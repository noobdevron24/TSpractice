interface PostProps {
  author: string;
  body: string;
}

function Post({ author, body }: PostProps) {

  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  )
}

export default Post
