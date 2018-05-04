import React from 'react'
import dayjs from 'dayjs'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import HelmetMeta from '../components/HelmetMeta'
import PostLink from '../components/PostLink'
import SuperLayout from '../components/SuperLayout'
import SearchWidget from '../components/SearchWidget'

class Index extends React.Component {
  static async getInitialProps() {
    const dayNow = dayjs().format('YYYY-MM-DD');
    const respond = await fetch(`https://api.tvmaze.com/schedule?country=US&date=${dayNow}`)
    const data = await respond.json()
    return { data }
  }

  render() {
    const dayNow = dayjs().format('dddd, YYYY-MM-DD')
    const miniTitle = `Latest movies on ${dayNow}`
    return (
      <SuperLayout>
        <HelmetMeta title='Home'/>
        <SearchWidget/>
        <ul className='menu'>
          <li className='divider' data-content={`${miniTitle}`}/>
          {
            this.props.data.map((data) => (
              <PostLink
                id={`${data.show.id}`}
                key={`${data.id}`}
                title={`${data.show.name}`}
                genre={`${data.show.genres[0]}`}
              />
            ))
          }
        </ul>
      </SuperLayout>
    )
  }
}


export default withRouter(Index)
