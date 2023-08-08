import { Link } from 'react-router-dom';

const HeroList = ({ heroes }) => {

  return (
    <div className="hero-list">
      <p>All Heroes</p>
      {heroes.map(hero => (
        <div className="hero-preview" key={hero.id} >
          <Link to={`/change/${hero.id}`}>
            <h2>{hero.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroList;    