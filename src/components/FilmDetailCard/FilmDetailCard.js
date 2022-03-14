import PropTypes from 'prop-types';
import InfoBox from '../common/InfoBox';
import './styles.scss';

function FilmDetailCard({ film }) {
  const {
    name,
    year,
    genre,
    imageUrl,
    director,
    producer,
    distributor,
    cast,
  } = film;

  return (
    <div className="card-full">
      <div className="card-full-main-info">
        <div className="card-full-main-info-title">
          <p className="card-full-main-info-title-year-genre">
            {year}
            /
            {genre}
          </p>
          <p className="card-full-main-info-title-name">{name}</p>
        </div>
        <img className="card-full-main-info-image" src={imageUrl} alt={name} />
      </div>
      <div className="card-full-detail-info">
        <InfoBox text={director} title="Director" />
        <InfoBox text={producer} title="Producer" />
        <InfoBox text={distributor} title="Distributor" />
        <InfoBox text={cast.join(', ')} title="Cast" />
      </div>
    </div>
  );
}

FilmDetailCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.string,
    genre: PropTypes.string,
    imageUrl: PropTypes.string,
    director: PropTypes.string,
    producer: PropTypes.string,
    distributor: PropTypes.string,
    cast: PropTypes.instanceOf(Array),
  }),
};

FilmDetailCard.defaultProps = {
  film: null,
};

export default FilmDetailCard;
