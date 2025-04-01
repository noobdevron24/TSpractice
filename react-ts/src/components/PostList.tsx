import Post from './Post'

function PostList() {
  return (
    <ul>
      <Post author="John" body="Reactjs! is awesome!" />
      <Post author="Jane" body="Checkout the course" />
    </ul>
  )
}

export default PostList
