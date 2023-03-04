import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { getGifs } from '../actions/index';

const GifForm = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("clicked it");
        props.getGifs(searchTerm);
    }    

    const handleChange = (e) => {
        // console.log(e.target.value);
        setSearchTerm(e.target.value);
    }
        
    // console.log(searchTerm);
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}/>
            <button>Search</button>
        </form>
    );
}

export default connect(null, { getGifs })(GifForm);