
const Gallery = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold my-10 text-center">Welcome to our photo gallery</h1>
                <div>
                    <h1 className="text-xl my-5">A View of our event center</h1>
                    <div className="grid grid-cols-3 gap-5">
                        <img className="w-[300px] h-[300px] rounded-md" src="https://i.ibb.co/nzNCZXd/2111-w015-n001-619-B-p15-619.jpg" alt="" />
                        <img className="w-[300px] h-[300px] rounded-md" src="https://i.ibb.co/P4pzSbS/1198.jpg" alt="" />
                        <img className="w-[300px] h-[300px] rounded-md" src="https://i.ibb.co/xL2K97K/2002.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold my-10 text-center">Our Events</h1>
                    <div className="grid grid-cols-3 gap-5">
                        <img className="w-[300px] h-[300px] rounded-md" src="https://i.ibb.co/NNNWnDq/couples-celebrating-birthday.jpg" alt="" />
                        <img className="w-[300px] h-[300px] rounded-md" src="https://i.ibb.co/zbgBhdR/senior-people-celebrating-together.jpg" alt="" />
                        <img className="w-[300px] h-[300px] rounded-md" src="https://i.ibb.co/fN6Sv3d/group-young-afro-american-female-students-dressed-black-graduation-gown-campus-as-background.jpg" alt="" />
                    </div>
                </div>
                <div className="my-10">
                    <div className="grid grid-cols-3 gap-5">
                        <img className="w-[300px] h-[300px] rounded-md" src="https://i.ibb.co/nzNCZXd/2111-w015-n001-619-B-p15-619.jpg" alt="" />
                        <img className="w-[300px] h-[300px] rounded-md" src="https://i.ibb.co/GH7S4Jd/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony.jpg" alt="" />
                        <img className="w-[300px] h-[300px] rounded-md" src="https://i.ibb.co/xXhdmcJ/small-baby-lies-basket-with-plaid.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;