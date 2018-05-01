import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default PostLink
