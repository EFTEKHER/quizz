import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Main.css'
const Main = () => {
const inputRef=useRef(null)

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
<form id='form'>
<input ref={inputRef} type="text" placeholder='Username*'/>

</form>

<div className='start'>
<Link className='btn' to={'quiz'}>Start Quiz</Link>

</div>
    </div>

    
  )
}

export default Main
