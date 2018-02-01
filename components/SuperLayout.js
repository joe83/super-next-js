import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #222'
}

const SuperLayout = (props) => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}

export default SuperLayout