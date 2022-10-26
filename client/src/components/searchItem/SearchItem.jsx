import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = (item) => {
  return (
    <div className="searchItem">
      {item?.photos?.length > 1 && (
        <img
          src={item.photos[0]}
          alt=""
          className="siImg"
        />
      )}
      <div className="siDesc">
        <h1 className="siTitle">{item.item.name}</h1>
        <span className="siDistance">{item.item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {item.item.desc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${item.item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item.item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
