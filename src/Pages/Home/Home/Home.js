import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Place from '../Place/Place';

const Home = () => {
    const [places, setPlaces] = useState([]);
    const [placeDetail, setPlaceDetail] = useState({})
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, []);
    const handleSelectPlace = id => {
        const place = places.find(element => element.id === id);
        setPlaceDetail(place);
    };
    return (
        <div className='home grid grid-cols-1 md:grid-cols-2'>
            <div>
                <Detail placeDetail={placeDetail}/>
            </div>
            <div className='flex gap-4'>
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