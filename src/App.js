import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name:"Kimchi",
    image:"https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating:5
  },
  {
    id:2,
    name:"Bibimbap",
    image:"https://mykoreankitchen.com/wp-content/uploads/2013/07/1.Korean-mixed-rice-Bibimbap.jpg",
    rating:4.9
  },
  {
    id:3,
    name:"ramen",
    image:"https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg",
    rating:5.5
  },
  {
    id:4,
    name:"pasta",
    image:"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-recipe-1-500x500.jpg",
    rating:4.7
  },
];

function Food({name,picture,rating}){
  
  return <div>
    <h1>I like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>;

}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
  <div className="App">
    <h1>Hello!!</h1>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
    ))}
  </div>
  );
}

export default App;
