import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Cities</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Hotels </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Seasonal and holiday deals </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
