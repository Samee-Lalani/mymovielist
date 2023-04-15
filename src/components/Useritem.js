import './Useritem.css'
const User_item = (props) => {
    var user_list = props.user_list;
    return (
        <div className="users-list">
        {user_list.map((DUMMY_USERS) => (
                <><p className="name">{user_list}</p><p className="description">{user_list}</p></>
        ))}

        </div>
    )
}
export default Useritem;