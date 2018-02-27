import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`p/${props.slug}`} href={`/post?slug=${props.slug}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default PostLink
