import Link from 'next/link'

const PostLink = (props) => (
  <li className='menu-item'>
    <Link as={`p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default PostLink
