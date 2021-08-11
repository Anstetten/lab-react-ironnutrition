import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsData from './foods.json';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";
import Summary from "./components/Summary";

class App extends React.Component {

  state = {
    foods: foodsData,
    filter:"",
    todaysFoods:[],
  };

  addNewFood= (newFood)=>{
    let foodsTemp = [newFood,...this.state.foods]
    this.setState({foods:foodsTemp});
}
    filterChange= (event)=>{
    this.setState({filter:event.target.value});
}

  addTodayFoods = (foodToAdd)=>{
    let todaysFoodTemp=this.state.todaysFoods;
    if (todaysFoodTemp.some((food)=>{return food.name===foodToAdd.name}))
    {
      let index = todaysFoodTemp.findIndex((food)=>{ return food.name===foodToAdd.name })
      todaysFoodTemp[index].quantityToAdd=parseInt(todaysFoodTemp[index].quantityToAdd)+parseInt(foodToAdd.quantityToAdd);
    }
    else{
      todaysFoodTemp.push(foodToAdd);
    }

    this.setState({todaysFoods:todaysFoodTemp});
  }
  

  render(){
    return (
      <div className="App">
        <div className="appLeft">
          <SearchBar filterChange={this.filterChange}/>
          <AddFoodForm addNewFood={this.addNewFood}/>
          <div className="foodListWrapper">
            {this.state.foods
            .filter((food)=>{if (food.name.includes(this.state.filter)) return food})
            .map((food)=>{return <FoodBox key={food.name} addTodayFood={this.addTodayFoods} food={food}/>})
            }
          </div>
        </div>
        
        <div className="appRight">
            <Summary foods={this.state.todaysFoods}/>
        </div>
      </div>
    );
  }
}

export default App;
