import Header from './Header'
import Footer from './Footer'

const SuperLayout = (props) => {
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column col-6 col-mx-auto col-xs-12'>
          <Header />
          {props.children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default SuperLayout
