import Helmet from 'react-helmet'

const HelmetMeta = (props) => {
  const theTitle = `${props.title} | Super Next`
  return (
    <div>
      <Helmet
        title={`${theTitle}`}
        meta={[
          { property: 'og:title', content: props.title }
        ]}
      />
    </div>
  )
}

export default HelmetMeta
