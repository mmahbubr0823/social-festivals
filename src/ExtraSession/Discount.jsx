const Discount = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl font-semibold text-center mt-16 mb-6'>Super <span className='text-4xl text-[#d6b03c]'>Discounts</span> for winter vacation are going on</h1>
                <div className='flex justify-evenly items-center bg-[#e4e5f5] p-5 rounded-lg'>
                    <img className='w-[350px] h-[300px] rounded-lg' src="https://i.ibb.co/jJNsGcX/108.jpg" alt="" />
                    <div>
                        <p>Up to 30% off for early booking events.</p>
                        <p>Students with valid Id can also get the advantages.</p>
                        <p>So, book for your events as soon as possible.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;