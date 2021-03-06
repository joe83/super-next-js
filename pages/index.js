import React from 'react'
import dayjs from 'dayjs'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import HelmetMeta from '../components/HelmetMeta'
import CardLink from '../components/CardLink'
import SuperLayout from '../components/SuperLayout'
import SearchWidget from '../components/SearchWidget'
import convertHttps from '../libs/convertHttps'

class Index extends React.Component {
  static async getInitialProps() {
    const dayNow = await dayjs().format('YYYY-MM-DD');
    const respond = await fetch(`https://api.tvmaze.com/schedule?country=US&date=${dayNow}`)
    const data = await respond.json()
    return { data }
  }

  render() {
    const noImage = '/static/no-image.png'
    return (
      <SuperLayout>
        <HelmetMeta title='Home'/>
        <SearchWidget/>
        <div className='divider'></div>
        <div className='text-left'>Movie Today</div>
        <div className='text-left'>{dayjs().format('dddd, MMMM DD YYYY')}</div>
        <div className='divider'></div>
        <div className='columns'>
          {
            this.props.data.map((data) => (
              <CardLink
                id={`${data.show.id}`}
                key={`${data.id}`}
                name={`${data.name}`}
                image={`${data.show.image === null ? noImage : convertHttps(data.show.image.medium)}`}
                title={`${data.show.name}`}
                genre={`${data.show.genres[0]}`}
              />
            ))
          }
        </div>
      </SuperLayout>
    )
  }
}


export default withRouter(Index)
