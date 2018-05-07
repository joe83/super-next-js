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
    const dayNow = dayjs().format('YYYY-MM-DD');
    const respond = await fetch(`https://api.tvmaze.com/schedule?country=US&date=${dayNow}`)
    const data = await respond.json()
    return { data }
  }

  render() {
    // const dayNow = dayjs().format('dddd, YYYY-MM-DD')
    // const miniTitle = `Latest movies on ${dayNow}`
    const noImage = '/static/no-image.png'
    return (
      <SuperLayout>
        <HelmetMeta title='Home'/>
        <SearchWidget/>
        <div className='columns'>
          {
            this.props.data.map((data) => (
              <CardLink
                id={`${data.show.id}`}
                key={`${data.id}`}
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
