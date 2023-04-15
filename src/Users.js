import './Users.css';
const Users = (props) => {
    var user_list = props.user_list;
    return (
        <div className="users-list">
        {user_list.map((DUMMY_USERS) => (
            <div className="box">
            <div className="person" key = {DUMMY_USERS.id}>
                <p className="name">{DUMMY_USERS.name}</p>
                    <img src={DUMMY_USERS.image} alt={DUMMY_USERS.name} className="personsimage" />
                <p className="description">{DUMMY_USERS.description}</p>
            </div>
            </div>
        ))}

        </div>
    )
}
export default Users;