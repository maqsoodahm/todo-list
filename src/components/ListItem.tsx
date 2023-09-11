const ListItem = ({item}:any) => {
    const  {name,itcom}=item;
    return (
        <>
            <li className={itcom?"checked":""}>{name}</li>
        </>
    )

}
export default ListItem;