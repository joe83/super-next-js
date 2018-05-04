import Link from 'next/link'
import Router from 'next/router'
import TitleHeader from './TitleHeader'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <ul className='tab'>
      <li className='tab-item'>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
      </li>
      <li className='tab-item'>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </li>
      <li className='tab-item tab-action'>
        <TitleHeader />
      </li>
    </ul>
  </div>
)

export default Header
