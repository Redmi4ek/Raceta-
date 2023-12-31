import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM!</span>
            <span>
                Тут ты ошибся мужики с профессией IT
            </span>
            <span>
                (но мы отправили того самого сына маминой подруги тебе на помощь)
            </span>
        </div>
    );
};

export default ErrorIndicator;