import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import PostLink from '../components/PostLink'
import SuperLayout from '../components/SuperLayout'

const Index = () => (
  <SuperLayout>
    <h1>Hello Super</h1>
    <ul>
      <PostLink id="dynamic-one" title="Dynamic One"/>
      <PostLink id="dynamic-two" title="Dynamic Two"/>
    </ul>
  </SuperLayout>
)

Index.getInitialProps = async function() {
  const respond = await fetch('https://api.tvmaze.com/search/shows?q=casper')
  const data = await respond.json()

  console.log(data)

  return {}
}

export default Index
