import fetch from 'isomorphic-unfetch'
import Helmet from 'react-helmet'
import { withRouter } from 'next/router'
import SuperLayout from '../components/SuperLayout'
import HelmetMeta from '../components/HelmetMeta'

const Post = (props) => {
  return (
    <SuperLayout>
      <HelmetMeta title={props.data.name}/>
      <div className='card'>
        <div className='card-header'>
          <div className='card-title h5'>{props.data.name}</div>
          <div className='card-subtitle text-gray'>{props.data.type}</div>
        </div>
        <div className='card-body'>
          <div className='columns'>
            <div className='column col-4 col-xs-12'>
              <img className='img-responsive' src={props.data.image.medium} />
            </div>
            <div className='column col-8 col-xs-12'>
              <div dangerouslySetInnerHTML={{ __html: props.data.summary }} />
            </div>
          </div>
        </div>
      </div>
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
