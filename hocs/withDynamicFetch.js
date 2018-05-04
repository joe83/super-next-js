import React from 'react'

const withDynamicFetch = SuperComponent => class extends React.Component {
  render() {
    return (
      <div className='dynamic-fetch'>
        <SuperComponent {...this.props} />
      </div>
    )
  }
}

export default withDynamicFetch
