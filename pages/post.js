import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import SuperLayout from '../components/SuperLayout'

const Post = (props) => {
  return (
    <SuperLayout>
      <h1>{props.data.name}</h1>
      <img src={props.data.image.medium}/>
      <div dangerouslySetInnerHTML={{ __html: props.data.summary }} />
    </SuperLayout>
  )
}

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const respond = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const data = await respond.json()

  return {
    data
  }
}

export default withRouter(Post)
