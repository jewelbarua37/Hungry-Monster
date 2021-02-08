fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
.then (res => res.json())
.then(data => displayFoodCategories(data));

const displayFoodCategories = foodCategories =>{
   console.log(foodCategories)
   }
}
