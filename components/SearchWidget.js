import React from 'react'
import fetch from 'isomorphic-unfetch'
import PostLink from '../components/PostLink'

class SearchWidget extends React.Component {

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
    // const searchValue = this.search.value
  }

  _handleSearch = async () => {
    const searchValue = this.search.value
    this.setState({
      searchQuery: searchValue,
      searchLoading: true
    })
    const respond = await fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
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

    if (e.keyCode === 27) {
      console.log('escaped')
    }
  }

  render() {
    const { searchLoading, queryData } = this.state
    const isQueryData = (Object.keys(queryData).length === 0)
    const response = isQueryData ? false : queryData

    return (
      <div>
        <div className='input-group'>
          <span className='input-group-addon'>Search by Movie Name</span>
          <input
            type='text'
            className='form-input'
            onKeyPress={this._handleKeyPress}
            ref={input => this.search = input}
          />
          {
            searchLoading ?
              (<button className='btn btn-default disabled'>
                <i className='icon icon-refresh'></i>
              </button>)
              :
              (<button className='btn btn-primary input-group-btn' onClick={this._handleSearch}>
                <i className='icon icon-search'></i>
              </button>)
          }
        </div>
        <div className='absolute'>
          {
            response && response.map((data) => (
              <ul className='menu'>
                <PostLink
                  id={`${data.show.id}`}
                  key={(data.id === undefined) ? data.show.id : data.id}
                  title={`${data.show.name}`}
                  genre={`${data.show.genres[0]}`}
                />
              </ul>
            ))
          }
        </div>
      </div>
    )
  }
}

export default SearchWidget
