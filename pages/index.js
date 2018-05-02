import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import HelmetMeta from '../components/HelmetMeta'
import PostLink from '../components/PostLink'
import SuperLayout from '../components/SuperLayout'

const Index = (props) => {
  return (
    <SuperLayout>
      <HelmetMeta title='Home'/>
      <ul className='menu'>
        <li class="divider" data-content="Pick the Sherlock Movie"/>
        {props.data.map(({show}) => (
          <PostLink id={`${show.id}`} key={`${show.id}`} title={`${show.name}`}/>
        ))}
      </ul>
    </SuperLayout>
  )
}

Index.getInitialProps = async function() {
  const respond = await fetch('https://api.tvmaze.com/search/shows?q=sherlock')
  const data = await respond.json()

  return {
    data
  }
}

export default withRouter(Index)
