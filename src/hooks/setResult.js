import { postServerData } from '../helper/helper';
import * as Action from '../redux/resultReducer';

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result));
    } catch (error) {
        console.error(error);
    }
};

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.error(error);
    }
};

/** Insert user data */
export const usePublishResult = async (resultData) => {
    const { result, username } = resultData;
    try {
        if (result.length === 0 || !username) {
            throw new Error("Couldn't get Result");
        }
        await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData);
    } catch (error) {
        console.error(error);
    }
};
