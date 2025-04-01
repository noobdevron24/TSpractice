import classes from './NewPost.module.css'

function NewPost() {
  return (
    <form className={classes.form}>
      <input type="text" />
      <label htmlFor="author">Your name</label>
      <textarea id='body' required rows={3} />
      <label htmlFor="text">Text</label>
      <button>Add Post</button>
    </form>
  )
}

export default NewPost
