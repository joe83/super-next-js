import React from 'react'
import fetch from 'isomorphic-unfetch'
import PostLink from '../components/PostLink'

class SearchWidget extends React.Component {

  constructor(props) {
    super(props)
    this.setStack = this.setStack.bind(this);
    this._resetStack = this._resetStack.bind(this)
    this._handleInput = this._handleInput.bind(this)
    this._handleSearch = this._handleSearch.bind(this)
    this._handleKeyPress = this._handleKeyPress.bind(this)
    this._handleOutsideClick = this._handleOutsideClick.bind(this)
    this.state = {
      searchLoading: false,
      searchQuery: '',
      queryData: {}
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this._handleOutsideClick);
  }

  setStack = (node) => {
    this.wrapperStack = node;
  }

  _resetStack = () => {
    this.setState({
      queryData: {}
    })
  }

  _handleOutsideClick(event) {
    if (this.wrapperStack && !this.wrapperStack.contains(event.target)) {
      this._resetStack()
    }
  }

  _handleInput = (e) => {
    if (e.keyCode === 27) {
      this._resetStack()
    } else {
      this._handleSearch()
    }
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
  }

  render() {
    const { queryData } = this.state
    const isQueryData = (Object.keys(queryData).length === 0)
    const response = isQueryData ? false : queryData

    return (
      <div className='relative' ref={this.setStack}>
        <div className='input-group'>
          <span className='input-group-addon'>Search by Movie Name</span>
          <input
            type='text'
            className='form-input'
            onKeyUp={this._handleInput}
            onKeyPress={this._handleKeyPress}
            onFocus={this._handleInput}
            ref={input => this.search = input}
          />
          <button className='btn btn-primary input-group-btn' onClick={this._handleSearch}>
            <i className='icon icon-search'></i>
          </button>
        </div>
        <div className='absolute' style={{ width: '100%', zIndex: 9999 }}>
          {
            response ?
              (<ul className='menu' onClick={this._resetStack}>
                {
                  response && response.map((data) => (
                    <PostLink
                      id={`${data.show.id}`}
                      key={`${data.show.id}`}
                      title={`${data.show.name}`}
                      genre={`${data.show.genres[0]}`}
                    />
                  ))
                }
              </ul>)
              :
              ''
          }
        </div>
      </div>
    )
  }
}

export default SearchWidget
