import classes from './NewPost.module.css'
import { ChangeEvent } from 'react'
function NewPost() {
  
  function changeBodyHandler(event: ChangeEvent<HTMLTextAreaElement>) {
    const body = event.target.value;
    console.log(body)
  }

  return (
    <form className={classes.form}>
     <p> 
      <input type="text" />
      <label htmlFor="author">Your name</label>
    </p>
    <p>
      <textarea id='body' required rows={3} onChange={changeBodyHandler} />
      <label htmlFor="text">Text</label>
    </p>
      <button>Add Post</button>
    </form>
  )
}

export default NewPost
