import React, { useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';
import Color from './Color';

function ColorRoutes() {
    const INITIAL_COLORS = {
        red: '#eb3d34',
        orange: '#eba234',
        green: '#34eb52'
    };

    const [colors, setColors] = useState(INITIAL_COLORS);
    const handleAddColor = (clr) => setColors((color) => ({ ...color, ...clr }));
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/colors' element={<ColorList colors={colors}/>} />
                <Route exact path='/colors/new' element={<AddColorForm addColor={handleAddColor}/>} />
                <Route exact path='colors/:color' element={<Color colors={colors}/>} />
                <Route path='/' element={<Navigate to='/colors'/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default ColorRoutes;