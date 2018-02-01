import Link from 'next/link'
import SuperLayout from '../components/SuperLayout'
import PostLink from '../components/PostLink'

const Index = () => (
  <SuperLayout>
    <h1>Hello Super</h1>
    <ul>
      <PostLink title="Dynamic One"/>
      <PostLink title="Dynamic Two"/>
    </ul>
  </SuperLayout>
)

export default Index
