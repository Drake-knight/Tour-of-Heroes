import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { error, isPending, data: heroes } = useFetch('http://localhost:8000/heroes');
  const topFourHero = heroes && heroes.slice(0, 4);

  return (
    <div className="hero-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {topFourHero && <div className="hero-list">
        <p>My top four Heroes</p>
        {topFourHero.map(hero => (
          <div className="hero-preview" key={hero.id} >
            <Link to={`/change/${hero.id}`}>
              <h2>{hero.name}</h2>
            </Link>
          </div>
        ))
        };
      </div>}
    </div>
  );
};

export default BlogDetails;