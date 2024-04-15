import star from "../assets/star.svg";

function Card(props) {
    let badgeText 
    
    if (props.openSpots === 0) { badgeText = 'SOLD OUT' }
    else if (props.location === 'Online') { badgeText = 'ONLINE' };

return (

    <section>
        <div className="card-picture">
            {badgeText && <p className="semibold">{badgeText}</p>}
            <img src={props.coverImg} alt="card image" />
        </div>
        <div className="card-text">
            <div className="rating">
                <img src={star} alt="star" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount})</span>
                <span>·</span>
                <span>{props.location}</span>
            </div>
            <p className="card-description">
                {props.title}
            </p>
            <div className="price">
                <span className="semibold">From ${props.price}</span>
                <span>/</span>
                <span>person</span>
            </div>
        </div>
    </section>

)

};

export default Card