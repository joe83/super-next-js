import Link from 'next/link'

const CardLink = (props) => (
  <li className='menu-item'>
    <div className='menu-badge'>
      {
        (props.genre !== 'undefined')
          ?
          (<kbd>
            {props.genre}
          </kbd>)
          :
          (<label className='label label-default'>
            No Genre
          </label>)
      }
    </div>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a><i className='icon icon-arrow-right'></i> {props.title}</a>
    </Link>
  </li>
)

export default CardLink
