import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from './redux/actions';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const buttons = useSelector(state => state.buttons);
    const currentTitle = useSelector(state => state.currentTitle);

    return (
        <div className="App">
            <h1>{currentTitle || "Click a button to set the title"}</h1>
            <div className="button-list">
                {buttons.map((button, index) => (
                    <button key={index} onClick={() => dispatch(setTitle(button.title))}>
                        {button.title}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default App;
