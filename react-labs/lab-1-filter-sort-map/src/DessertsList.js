// var lowCaloriesD = [];
const  DessertsList = (props) => {
    // Implement the component here.
const lowCaloriesD = props.data.filter((dessert) =>{
    return dessert.calories < 500;
}).sort((a, b) =>{
    return a.calories - b.calories;
    // return a.calories - b.calories;
}).map((dessert) => {
    return <li>{dessert.name} - {dessert.calories} cal </li>
})
 return <ul>{lowCaloriesD}</ul>;
  
    
}
  
  export default DessertsList;
  