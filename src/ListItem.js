function ListItem(props){
  return (
    <li key={props.id}>{props.title}</li>
  )
}
export default ListItem;