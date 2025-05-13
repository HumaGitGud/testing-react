import Restaurant from "./Restaurant";

//Containers are for behind the scenes logic
function RestaurantsContainer(props) {
  console.log(props);
  return (
    <div className="restaurantContainer">
      {props.restaurants.map((restaurant, index) => (
        <Restaurant restaurant={restaurant} index={index} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
