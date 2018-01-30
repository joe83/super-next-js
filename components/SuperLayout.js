import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #222'
}

const SuperLayout = (props) => (
  <div style={layoutStyle}>
    <Header />
  </div>
)

export default SuperLayout
