import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Detail = ({ placeDetail }) => {
    const { name, description } = placeDetail;
    const navigate = useNavigate();
    return (
        <div className='text-white px-4'>
            <h1 className='font-bold text-3xl'>{name ? name : 'Sundarbans'}</h1>
            <p className='text-xl'>{description ? description : "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal."}</p>
            <button onClick={()=>navigate('/booking')}
                className='bg-amber-500 rounded px-2 py-1 text-black font-semibold mt-4 flex items-center'
            >Booking <span className='ml-2'>
                    <AiOutlineArrowRight />
                </span>
            </button>
        </div>
    );
};

export default Detail;