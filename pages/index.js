import Link from 'next/link'
import SuperLayout from '../components/SuperLayout'
import PostLink from '../components/PostLink'

const Index = () => (
  <SuperLayout>
    <h1>Hello Super</h1>
    <ul>
      <PostLink slug="dynamic-one" title="Dynamic One"/>
      <PostLink slug="dynamic-two" title="Dynamic Two"/>
    </ul>
  </SuperLayout>
)

export default Index
