import React from 'react'
import Link from 'next/link'
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
    const respond = await fetch(`https://api.tvmaze.com/search/shows?q=${this.state.searchQuery}`)
    const data = await respond.json()
    this.setState({
      queryData: data
    })
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
     this._handleSearch()
    }
  }

  static async getInitialProps() {
    const respond = await fetch('https://api.tvmaze.com/search/shows?q=sherlock')
    const data = await respond.json()

    return {
      data
    }
  }

  render() {
    const queryData = this.state.queryData
    const response = (Object.keys(queryData).length === 0) ? this.props.data : queryData;
    return (
      <SuperLayout>
        <HelmetMeta title='Home'/>
        <div className='input-group'>
          <span className='input-group-addon'>Search by Movie Name</span>
          <input type='text' className='form-input' onKeyPress={this._handleKeyPress} ref={input => this.search = input} onChange={this._handleInput}/>
          <button className='btn btn-primary input-group-btn' onClick={this._handleSearch}>
            <i className='icon icon-search'></i>
          </button>
        </div>
        <ul className='menu'>
          <li className='divider' data-content='Pick the Sherlock Movie'/>
          {
            response.map(({show}) => (
            <PostLink id={`${show.id}`} key={`${show.id}`} title={`${show.name}`}/>
            ))
          }
        </ul>
      </SuperLayout>
    )
  }
}


export default withRouter(Index)
