import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import SuperLayout from '../components/SuperLayout'
import HelmetMeta from '../components/HelmetMeta'
import convertHttps from '../libs/convertHttps'
import SearchWidget from '../components/SearchWidget'

const Post = (props) => {
  const noImage = '/static/no-image.png'
  const imageMedium = (props.data.image === null) ? noImage : convertHttps(props.data.image.medium)
  return (
    <SuperLayout>
      <HelmetMeta title={props.data.name}/>
      <SearchWidget/>
      <div className='card'>
        <div className='card-header'>
          <div className='card-title h5'>{props.data.name}</div>
          <div className='card-subtitle text-gray'>
            {
              props.data.genres.length === 0 ?
                ''
                :
                props.data.genres.map((genre, index) =>
                  (<kbd key={index}>{genre}</kbd>)
                )
            }
            ({props.data.type})
          </div>
          <div className='card-subtitle'>
            <a className='button button-primary' href={`${props.data.url}`} target='_blank'>
              <i className='icon icon-link'></i> Go to this movie
            </a>
          </div>
        </div>
        <div className='card-body'>
          <div className='columns'>
            <div className='column col-4 col-xs-12'>
              <img className='img-responsive' src={imageMedium} />
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
