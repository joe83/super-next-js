import Link from 'next/link'

const CardLink = (props) => (
  <div className='column col-4 col-xs-6'>
    <div className='card'>
      <div className='card-image'>
        <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
          <a>
            <img
              className='img-responsive'
              src={`${props.image}`}
              alt={`${props.title}`}
              title={`${props.title}`}
            />
          </a>
        </Link>
      </div>
      <div className='card-header'>
        <div className='card-title h6'>
          {props.title}
          <br/>
          <strong>{props.name}</strong>
        </div>
        {
          props.genre === 'undefined' ?
            ''
            :
            (<span className='chip'>{props.genre}</span>)
        }
      </div>
    </div>
  </div>
)

export default CardLink
