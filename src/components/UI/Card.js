import './Card.css';

function Card(props){ // wrapper function
    const classes = props.className + ' card';
    return (
    <div className={classes}>{props.children}</div>
    );
}

export default Card;
