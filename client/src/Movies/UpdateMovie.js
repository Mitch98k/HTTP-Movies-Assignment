import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function UpdateMovie() {
    const { id } = useParams();

    const [info, setInfo] = useState({
        id: null,
        title: '',
        director: '',
        metascore: '',
        stars: []
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
            console.log(res);
            setInfo({
                id: res.data.id,
                title: res.data.title,
                director: res.data.director,
                metascore: res.data.metascore,
                stars: res.data.stars
            });
        })
        .catch(err => console.log(err));
    }, []);

    const handleChange = e => {
        setInfo({...info, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <form>
                <label htmlFor='title'>Title: 
                    <input
                    id='title'
                    name='title'
                    value={info.title}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='director'>Director: 
                    <input
                    id='director'
                    name='director'
                    value={info.director}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='metascore'>Metascore: 
                    <input
                    id='metascore'
                    name='metascore'
                    value={info.metascore}
                    onChange={handleChange}
                    />
                </label>
                <button>Update</button>
            </form>
        </div>
    );

};

export default UpdateMovie;