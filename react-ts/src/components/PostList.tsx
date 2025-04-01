import Post from './Post'
import classes from './PostList.module.css'

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="John" body="Reactjs! is awesome!" />
      <Post author="Jane" body="Checkout the course" />
    </ul>
  )
}

export default PostList
