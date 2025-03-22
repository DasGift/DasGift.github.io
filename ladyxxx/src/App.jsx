import React, {useState} from "react";
import ReactDOM from 'react-dom'
import './index.css'
import PropTypes from "prop-types";

// @ts-ignore
const EditableField = ({ text, onUpdate }) => {
    const [isEditing, setEditing] = useState(false);
    const [inputValue, setInputValue] = useState(text);

    const handleClick = () => {
        setEditing(true);
    };

    const handleBlur = () => {
        setEditing(false);
        onUpdate(inputValue);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div onClick={handleClick}>
            {isEditing ? (
                <input
                    type="text"
                    value={inputValue}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoFocus
                />
            ) : (
                <p className='price'>Цена: {text} руб/час</p>
            )}
        </div>
    );
};

// https://lady.xxx.org/

// Добавление PropTypes для валидации
EditableField.propTypes = {
    text: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
};

const App = () => {
    const [description, setDescription] = useState('5000');

    return (
        <>
            <header id="header" className="header">
                <div className='about'>
                    <div className='foto'></div>
                    <div className='info'>
                        <h1>Жрица любви</h1>
                        <div className='description'>
                            Для расслабления и приятного отдыха. Индивидуальный сервис. Возможно всё.
                        </div>
                        <EditableField text={description} onUpdate={setDescription} />
                    </div>
                </div>
            </header>
        </>
    );
};

export { App }