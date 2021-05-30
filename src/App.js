// import React from "react";
import PropTpyes from "prop-types";

URL = "https://screamfmlondon.files.wordpress.com/2016/03/20160112_195618.jpg";

const foodILike = [
  { id: 1, name: "Kimchi", image: URL, rating: 2 },
  { id: 2, name: "Samgyeopsal", image: URL, rating: 3 },
];
// URL = "http://xxx.xxx.com/xxx.jpg";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} width="300px" />
      <div>{rating}/10</div>
    </div>
  );
}

function App() {
  // return <div className="App" />;
  // return <div>Home</div>;
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTpyes.string.isRequired,
  picture: PropTpyes.string.isRequired,
  rating: PropTpyes.number.isRequired,
};

export default App;
