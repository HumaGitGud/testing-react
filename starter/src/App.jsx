import RestaurantsContainer from "./components/RestaurantsContainer";
import AddRestaurant from "./components/AddRestaurant";
import { data } from "./data/data.js";
import { useState } from "react";
import "./App.css";

//App is the root of our application and where we load in our components.
function App() {
  const [restaurantState, setRestaurants] = useState([...data]);

  const updateRestaurants = (restaurant) => {
    console.log(restaurant);
    setRestaurants([...restaurantState, restaurant]);
  };

  return (
    <div className="App">
      <AddRestaurant updateRestaurants={updateRestaurants} />
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;
