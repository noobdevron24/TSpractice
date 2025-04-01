import Post from './Post'
import classes from './PostList.module.css'
import NewPost from './NewPost'
function PostList() {
  return (
    <>
    <NewPost />
    <ul className={classes.posts}>
      <Post author="John" body="Reactjs! is awesome!" />
      <Post author="Jane" body="Checkout the course" />
    </ul>
    </>
  )
}

export default PostList
