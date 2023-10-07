import EventCards from "../EventCards/EventCards";
import Discount from "../ExtraSession/Discount";
import Features from "../ExtraSession/Features";

const Home = () => {
    return (
        <div>
            <Discount></Discount>
            <EventCards></EventCards>
            <Features></Features>
        </div>
    );
};

export default Home;