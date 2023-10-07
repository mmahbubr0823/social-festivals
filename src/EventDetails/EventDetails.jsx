import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const [cardDetails, setCardDetails] = useState({})
    const eventCards = useLoaderData();
   const {id} = useParams();
   const idInt = parseInt(id);

//    finding matching card 
   useEffect(()=>{
       const findEvent = eventCards.find(eventCard => eventCard.id ===idInt);
        setCardDetails(findEvent)
   }, [eventCards, idInt])
   console.log(cardDetails);

//    destructuring 
const { img, title, price, details, discount } = cardDetails;

    return (
        <div>
           <div className="flex items-center gap-5 bg-base-100 my-16 shadow-xl p-4 rounded-md">
                <figure><img className='w-[300px] h-[300px] rounded-md' src={img} alt="Shoes" /></figure>
                <div className="card-body w-[250px]">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p>{details}</p>
                    <div>
                        <p>
                           <span className='font-bold'> Price</span>:{price}
                        </p>
                        <p className="mt-4 font-bold text-[#f1ab43] text-2xl">{discount}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link className="bg-[#f55151] text-white py-1 rounded-md mt-5 w-full text-center" to="/"><button >Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;