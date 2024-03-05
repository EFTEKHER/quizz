import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import { setUserId } from '../redux/resultReducer'
import '../styles/Main.css'
import { useDispatch } from 'react-redux'
const Main = () => {
  const inputRef = useRef(null)
  const dispatch = useDispatch()


  function startQuiz(){
      if(inputRef.current?.value){
          dispatch(setUserId(inputRef.current?.value))
      }
  }


  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <ol>
      <li>You will be asked 50 questions one after another </li>
      <li>Each Questions will have four options . You can choose only one</li>

      <li>You can review and change answers before the quiz finish</li>
      <li>Time for test will be 30 minutes</li>
      <li>The Result will be declared at the end of the quiz</li>  
      </ol>
      <form id="form">
      <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
  </form>

  <div className='start'>
      <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
  </div>
    </div>

    
  )
}

export default Main
