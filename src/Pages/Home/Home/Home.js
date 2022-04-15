import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Place from '../Place/Place';
import './Home.css';

const Home = () => {
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState({})
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, []);
    const handleSelectPlace = id => {
        const place = places.find(element => element.id === id);
        setSelectedPlace(place);
    };
    console.log(selectedPlace);
    return (
        <div className='home grid grid-cols-1 md:grid-cols-2 py-40 px-10'>
            <div>
                <Detail />
            </div>
            <div className='flex gap-8'>
                {
                    places.map(place => <Place
                        key={place.id}
                        place={place}
                        handleSelectPlace={handleSelectPlace}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;