import "./Card.css";
import starIcon from "./../images/star_icon.png";

export default function Card(props) {
  let { location, title, price, openSpots } = props.item;
  let { rating, reviewCount } = props.item.stats;
  let img = props.item.coverImg;

  let badgeText =
    openSpots === 0 ? "sold out" : location === "Online" ? "online" : null;

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={`images/${img}`} alt="Katie Zaferes" className="card-image" />
      </div>
      {badgeText !== null ? (
        <div className="card-badge">{badgeText}</div>
      ) : null}
      <div className="flex-container">
        <img src={starIcon} alt="A star icon" className="star-icon" />
        <span>{rating.toFixed(1)}</span>
        <span className="text-secondary">
          ({reviewCount}) • {location}
        </span>
      </div>
      <p>{title}</p>
      <span class="text-bold">From ${price}</span> / person
    </div>
  );
}
