import Header from './Header'

const SuperLayout = (props) => {
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column col-6 col-mx-auto col-xs-12'>
          <Header />
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default SuperLayout
