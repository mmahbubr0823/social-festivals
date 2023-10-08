import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ eventCard }) => {
    const { id, img, title, price, details } = eventCard;
    return (
        <div>
            <div className="card lg:w-72 xl:w-80 h-[430px] bg-base-100 shadow-xl p-3">
                <figure><img className='w-[260px] h-[200px] rounded-md' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p>{`${details.slice(0, 80)}`}</p>
                    <div>
                        <p>
                           <span className='font-bold'> Price</span>:{price}
                        </p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link className="bg-[#f55151] text-white py-1 rounded-md mt-5 w-full text-center" to={`/eventDetails/${id}`}><button >View details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;