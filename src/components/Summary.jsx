import React from 'react'

function Summary(props) {
//random comment
    let foods = props.foods;
    let calories =0;
    calories = foods.reduce((acc,curr)=>{ return acc+curr.calories*curr.quantityToAdd},0);

    return (
        <div className="todaysWrapper">
            <h3>Today's foods</h3>
            <ul className="todayList">
            {foods.map((food)=>{
                return <li key={food.name}>{food.quantityToAdd} {food.name} = {food.quantityToAdd*food.calories} calories</li>
            })

            }
            </ul>
            
            <h3>Total calories : {calories}</h3>
        </div>
    )
}

export default Summary
