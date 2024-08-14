import React from 'react';

function Button({ text, type, image, onClick, dataIndex }) {
    return (
        <button
            className={type === 'image' ? 'btn-img' : 'approved'}
            data-index={dataIndex}
            onClick={onClick}
        >
            {type === 'image' ? <img src={image}/> : text}
        </button>
    );
}

export default Button;
