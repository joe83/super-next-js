import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import HelmetMeta from '../components/HelmetMeta'
import PostLink from '../components/PostLink'
import SuperLayout from '../components/SuperLayout'

class Index extends React.Component {

  constructor(props) {
    super(props);
    this._handleInput = this._handleInput.bind(this)
    this._handleSearch = this._handleSearch.bind(this)
    this._handleKeyPress = this._handleKeyPress.bind(this)
    this.state = {
      searchLoading: false,
      searchQuery: '',
      queryData: {}
    }
  }

  _handleInput = () => {
    const searchValue = this.search.value
    this.setState({
      searchQuery: searchValue
    })
  }

  _handleSearch = async () => {
    this.setState({
      searchLoading: true
    })
    const respond = await fetch(`https://api.tvmaze.com/search/shows?q=${this.state.searchQuery}`)
    const data = await respond.json()
    this.setState({
      searchLoading: false,
      queryData: data
    })
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
     this._handleSearch()
    }
  }

  static async getInitialProps() {
    const dayNow = dayjs().format('YYYY-MM-DD');
    const respond = await fetch(`http://api.tvmaze.com/schedule?country=US&date=${dayNow}`)
    const data = await respond.json()
    return { data }
  }

  render() {
    const queryData = this.state.queryData
    const isQueryData = (Object.keys(queryData).length === 0)
    const response = isQueryData ? this.props.data : queryData;
    const dayNow = dayjs().format('dddd, YYYY-MM-DD')
    const miniTitle = isQueryData ? `Latest Movies in ${dayNow}` : `Search results for ${this.state.searchQuery}`
    return (
      <SuperLayout>
        <HelmetMeta title='Home'/>
        <div className='input-group'>
          <span className='input-group-addon'>Search by Movie Name</span>
          <input
            type='text'
            className='form-input'
            onKeyPress={this._handleKeyPress}
            ref={input => this.search = input}
            onChange={this._handleInput}
          />
          <button className='btn btn-primary input-group-btn' onClick={this._handleSearch}>
            <i className='icon icon-search'></i>
          </button>
        </div>
        <ul className='menu'>
          <li className='divider' data-content={`${miniTitle}`}/>
          {
            this.state.searchLoading
            ?
              (
                <div className='centered'>
                  <div className='loading loading-lg'></div>
                </div>
              )
              :
              response.map((data) => (
              <PostLink
                id={`${data.show.id}`}
                key={(data.id === undefined) ? data.show.id : data.id}
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
