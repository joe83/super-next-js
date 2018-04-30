import Link from 'next/link'
import { withRouter } from 'next/router'
import SuperLayout from '../components/SuperLayout'

const About = () => (
  <SuperLayout>
    <p>About Page</p>
  </SuperLayout>
)

export default withRouter(About)
