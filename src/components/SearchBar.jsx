import React from 'react'

function SearchBar(props) {
    return (
        <div>
            <input onChange={props.filterChange} name="search" className="input is-info" type="text" placeholder="Search by name...."/>     
        </div>
    )
}

export default SearchBar
