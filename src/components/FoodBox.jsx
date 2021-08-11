import React from 'react'

function FoodBox(props) {


    function addFood(){

        let addedFood ={quantityToAdd,...food};
        props.addTodayFood(addedFood);

    }
    function handleInput(event){
        quantityToAdd=event.target.value;
    }

    let quantityToAdd=1;
    let food = props.food;

    return (
        <div className="box" name={food.name}>
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={food.image} />
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input onChange={handleInput} className="input" type="number" defaultValue="1" />
                    </div>
                    <div className="control">
                    <button onClick={addFood} className="button is-info">
                        +
                    </button>
                    </div>
                </div>
                </div>
            </article>
        </div>

    )
}

export default FoodBox
