import React from "react";
const foodILike = [
  {
    id:1,
    name:"Kimchi",
    image:"https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg"
  },
  {
    id:2,
    name:"Bibimbap",
    image:"https://mykoreankitchen.com/wp-content/uploads/2013/07/1.Korean-mixed-rice-Bibimbap.jpg"
  },
  {
    id:3,
    name:"ramen",
    image:"https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg"
  },
  {
    id:4,
    name:"pasta",
    image:"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-recipe-1-500x500.jpg"
  },
];

function Food({name,picture}){
  
  return <div>
    <h1>I like {name}</h1>
    <img src={picture} alt={name}/>
  </div>;

}

function App() {
  return (
  <div className="App">
    <h1>Hello!!</h1>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image}/>
    ))}
  </div>
  );
}

export default App;
