const Cards = (props) => {
    var card = props.user_list;
    return (
        <div className="userslist">
                <p className="name">{user_list.name}</p>
                <p className="description">{user_list}</p>
        </div>
    )
}
export default Cards;