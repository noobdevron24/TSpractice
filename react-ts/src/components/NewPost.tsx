import classes from './NewPost.module.css'

function NewPost() {
  return (
    <form className={classes.form}>
      <input type="text" />
      <textarea />
      <button>Add Post</button>
    </form>
  )
}

export default NewPost
