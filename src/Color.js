import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import './Color.css';

function Color({ colors }) {
    const { color } = useParams();
    const fullColor = colors[color];

    return (
        <div className='Color' style={{ backgroundColor: fullColor }}>
            {!color ? <Navigate exact to='/colors' /> : <h1>This is {color}</h1>}
            <Link to='/colors'>Go Back</Link>
        </div>
    )
}

export default Color;