
const Features = () => {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-semibold text-center mt-20 mb-6">Why choose us?</h1>
                <div className="lg:flex justify-evenly items-center bg-[#e8f9f1] mb-10 rounded-lg p-8">
                    <img className="w-[450px] h-[300px] mb-5 rounded-xl" src="https://i.ibb.co/P4pzSbS/1198.jpg" alt="" />
                    <div>
                        <ul>
                            <li className="list-disc">Planning an event from start to finish.</li>
                            <li className="list-disc">Generating ideas for the event.</li>
                            <li className="list-disc">Managing event budgets.</li>
                            <li className="list-disc">Sponsorship negotiations.</li>
                            <li className="list-disc">Managing logistics and event venues.</li>
                            <li className="list-disc">Customized processes & scheduling.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;