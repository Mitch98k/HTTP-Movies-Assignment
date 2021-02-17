import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function UpdateMovie() {

    return (
        <div>
            <form>
                <label htmlFor='title'>Title: 
                    <input
                    id='title'
                    name='title'
                    />
                </label>
                <label htmlFor='director'>Director: 
                    <input
                    id='director'
                    name='director'
                    />
                </label>
                <label htmlFor='metascore'>Metascore: 
                    <input
                    id='metascore'
                    name='metascore'
                    />
                </label>
                <button>Update</button>
            </form>
        </div>
    );

};

export default UpdateMovie;