import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const EventCards = () => {
    const [eventCards, setEventCards] = useState([]);

    // fetch data 

    useEffect(() =>{
        fetch('./Data.json')
        .then(res => res.json())
        .then(data => setEventCards(data))
    }, [])

    // console.log(eventCards);
    return (
        <div className='grid grid-cols-3 gap-8 my-10'>
            {
                eventCards.map(eventCard => <SingleCard key={eventCard.id} eventCard ={eventCard}></SingleCard>)
            }
        </div>
    );
};

export default EventCards;