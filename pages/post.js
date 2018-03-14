import fetch from 'isomorphic-unfetch'
import SuperLayout from '../components/SuperLayout'

const Post = (props) => (
  <SuperLayout>
    <h1>{props.url.query.id}</h1>
    <p>This is post page</p>
  </SuperLayout>
)

export default Post
