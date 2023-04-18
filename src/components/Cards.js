import './Cards.css';

export default function Cards(props) {

    return (
        <div className="box" id={props.id}>
            {/************ main layout of card  *************/}
            <p className="name">{props.name}</p>
            <img src={props.image} alt={props.name} className="personsimage" />
            <p className="description">{props.description}</p>
    </div>
    )
}
