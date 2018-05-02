import fetch from 'isomorphic-unfetch'
import Helmet from 'react-helmet'
import { withRouter } from 'next/router'
import SuperLayout from '../components/SuperLayout'

const Post = (props) => {
  return (
    <SuperLayout>
      <Helmet
        title={`${props.title} | Super Next`}
        meta={[
          { property: 'og:title', content: props.title }
        ]}
      />
      <h1>{props.title}</h1>
      <img src={props.data.image.medium}/>
      <div dangerouslySetInnerHTML={{ __html: props.data.summary }} />
    </SuperLayout>
  )
}

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const respond = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const data = await respond.json()
  if (context.req) {
    Helmet.renderStatic();
  }
  return {
    data,
    title: data.name
  }
}

export default withRouter(Post)
