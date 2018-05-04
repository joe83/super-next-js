import { withRouter } from 'next/router'
import HelmetMeta from '../components/HelmetMeta'
import SuperLayout from '../components/SuperLayout'
import SearchWidget from '../components/SearchWidget'
import withDynamicFetch from '../hocs/withDynamicFetch'

const About = () => (
  <SuperLayout>
    <HelmetMeta title='about'/>
    <SearchWidget/>
    <p>Hello All! Welcome to my Example Project using Next.JS</p>
  </SuperLayout>
)

export default withRouter(withDynamicFetch(About))
