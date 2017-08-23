import Link from 'next/link'

const Index = () => (
  <div>
    <Link href='/about'>
      <button style={{ fontSize: 20 }}>Go to About</button>
    </Link>
      <p>Hello Super</p>
  </div>
)

export default Index
