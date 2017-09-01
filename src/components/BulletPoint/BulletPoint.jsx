import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import './BulletPoint.css';

const iconStyles = {
    color: '#ffffff',
    fontSize: '56px'
};

const BulletPoint = props =>
    (
        <div className='bulletPoint__container'>
            <FontIcon className="material-icons" style={iconStyles}>{props.icon}</FontIcon>
            <p className="bulletPoint__text">{props.text}</p>
        </div>
    );

export default BulletPoint;
