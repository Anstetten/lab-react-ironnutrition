import React, { Component } from 'react'

export class AddFoodForm extends Component {

    state={
        name:"",
        calories:0,
        image:"",
        isVisible:false,
    }

    toggleForm= ()=>{
        this.setState({ isVisible: !this.state.isVisible,})
    }

    addFood= (event)=>{
        event.preventDefault();
        let newFood ={
            name:this.state.name,
            calories:this.state.calories,
            image:this.state.image,
        }

        this.props.addNewFood(newFood);
    }

    handleChange=(event)=>{
        const {name, value} =event.target;
        this.setState({[name]: value,})
    }

    render() {
        let style ={display:(this.state.isVisible)? "block" : "none"};
        return (
            <div className="foodFormWrapper">

                <button onClick={this.toggleForm} className="button is-small is-link is-outlined">Create new food</button>

                <form onSubmit={this.addFood} style={style} className="submitForm">
                    <div className="inputWrapper">
                        <label className="label" htmlFor="name">Name</label>
                        <input onChange={this.handleChange} name="name" className="input is-info" type="text" placeholder="Name"/>
                    </div>
                    <div className="inputWrapper">
                        <label className="calories" htmlFor="name">Calories</label>
                        <input onChange={this.handleChange} name="calories" className="input is-info" type="number"/>
                    </div>
                    <div className="inputWrapper">
                        <label className="image" htmlFor="name">Image URL</label>
                        <input onChange={this.handleChange} name="image" className="input is-info" type="text" placeholder="Image URL"/>
                    </div>
                <button  className="button is-small is-link is-outlined">Add new food</button>
                </form>
            </div>
        )
    }
}

export default AddFoodForm
