import { withRouter } from 'next/router'
import HelmetMeta from '../components/HelmetMeta'
import SuperLayout from '../components/SuperLayout'

const About = () => (
  <SuperLayout>
    <HelmetMeta title='about'/>
    <p>Hello All! Welcome to my Example Project using Next.JS</p>
  </SuperLayout>
)

export default withRouter(About)
