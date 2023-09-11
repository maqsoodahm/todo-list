import ListItem from "./ListItem"

const TodoList = () => {
  const TASK=[
    {name:"go to gym",itcom:true},
    {name:"go to home",itcom:true},
    {name:"go to school",itcom:true},
    {name:"go to park",itcom:true},
    {name:"read a book",itcom:false},
    {name:"Meat to Savera",itcom:false}
  ]
    return (
        <ul id="myUL">
            {TASK.map(obj => (
             <ListItem  key="obj.title" item={obj}/>
            ))}
            
        </ul>
    )
}
 
export default TodoList;
