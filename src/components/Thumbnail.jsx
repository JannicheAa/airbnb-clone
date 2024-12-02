export function Thumbnail(props) {
  let badgeText = "";
  if (props.thumbnail.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.thumbnail.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="thumbnail">
      {badgeText && <div className="thumbnail-badge">{badgeText}</div>}
      <img
        className="thumbnail-image"
        src={`./images/${props.thumbnail.coverImg}`}
      />
      <div className="one-line">
        <img src="./star.svg" />
        <p>{props.thumbnail.stats.rating}</p>
        <p className="lighter-text"> ({props.thumbnail.stats.reviewCount})</p>
        <p className="lighter-text">• {props.thumbnail.location}</p>
      </div>
      <p>{props.thumbnail.title}</p>
      <div className="one-line">
        <p className="bold-text">From ${props.thumbnail.price}</p>
        <p>/ person</p>
      </div>
    </div>
  );
}
