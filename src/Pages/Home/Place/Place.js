import React from 'react';

const Place = ({ place, handleSelectPlace }) => {
    const { name, image, id } = place;
    return (
        <div onClick={() => handleSelectPlace(id)} className='relative cursor-pointer hover:border-2 hover:border-amber-400 rounded-xl hover:scale-110'>
            <img className='w-60' src={image} alt="" />
            <p className='absolute bottom-4 text-white text-xl left-2'>{name}</p>
        </div>
    );
};

export default Place;