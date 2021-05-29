// import React from "react";

const foodILike = [
  { name: "Kimchi", image: URL },
  { name: "Samgyeopsal", image: URL },
];
URL = "http://xxx.xxx.com/xxx.jpg";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

function App() {
  // return <div className="App" />;
  // return <div>Home</div>;
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
