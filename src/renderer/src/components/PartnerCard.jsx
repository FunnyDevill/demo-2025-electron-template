import PropTypes from 'prop-types';

const PartnerCard = ({ partner, onClick }) => {
  return (
    <li className="partner-card" onClick={onClick}>
      <div className="partner-data">
        <p className="card_heading">{partner.organization_type} | {partner.name}</p>
        <div className="partner-data-info">
          <p>{partner.ceo}</p>
          <p>{partner.phone}</p>
          <p>Рейтинг: {partner.rating}</p>
        </div>
      </div>
      <div className="partner-sale partner-data card_heading">
        {partner.discount}%
      </div>
    </li>
  );
};

PartnerCard.propTypes = {
  partner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    organization_type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ceo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PartnerCard; 