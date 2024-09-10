import Banner from "../Banner/Banner";
import Feedbacks from "../Feedbacks/Feedbacks";
import Hero from "../Hero/Hero";
import FAQSection from "../Questions/Questions";

import Trending from "../Trending/Trending";
import Why from "../Why/Why";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Why/>
            <Trending/>
            <Hero/>
            <FAQSection/>
            <Feedbacks/>
        </div>
    );
};

export default Home;