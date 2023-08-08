import HeroList from "./HeroList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: heroes } = useFetch('http://localhost:8000/heroes');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {heroes && <HeroList heroes={heroes} />}
    </div>
  );
};

export default Home;