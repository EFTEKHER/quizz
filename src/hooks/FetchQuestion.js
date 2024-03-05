import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';

/** redux actions */
import * as Action from '../redux/questionReducer';

/** Helper function to fetch data from the server */
export async function getServerData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from server:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}

/** Fetch question hook to fetch API data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {
                const data = await getServerData('http://localhost:5000/api/questions');
                
                if(data && data.questions.length > 0){
                    setGetData({ isLoading : false, apiData : data.questions });
                    dispatch(Action.startExamAction({ question : data.questions, answers : data.answers }));
                } else {
                    throw new Error("No Questions Available");
                }
            } catch (error) {
                setGetData({ isLoading : false, serverError : error.message });
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.error(error);
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.error(error);
    }
}
