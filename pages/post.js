import SuperLayout from '../components/SuperLayout'

const Post = (props) => (
  <SuperLayout>
    <h1>{props.url.query.title}</h1>
    <p>This is post page</p>
  </SuperLayout>
)

export default Post