import React from "react";

function Food({name,picture}){
  
  return <div>
    <img src={picture}/>
    <h1>I like {name}</h1>
  </div>;

}

const foodILike = [
  {
    name:"Kimchi",
    image:"https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg"
  },
  {
    name:"Bibimbap",
    image:"https://mykoreankitchen.com/wp-content/uploads/2013/07/1.Korean-mixed-rice-Bibimbap.jpg"
  },
  {
    name:"ramen",
    image:"https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg"
  },
  {
    name:"pasta",
    image:"https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-recipe-1-500x500.jpg"
  },
];
function App() {
  return (
  <div className="App">
    <h1>Hello!!</h1>
    {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image}/>
    ))}
  </div>
  );
}

export default App;
