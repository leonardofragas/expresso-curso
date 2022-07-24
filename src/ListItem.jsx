export default function ListItem(props) {
  return (
      <li>
          <div>
              <span className="Check"></span>
          </div>

          <div>
              <span className="Type">{props.category}</span>
              <h5>{props.text}
              { props.new ? <span className="New">novo</span> : '' }</h5>   
          </div>
      </li>
  )
}