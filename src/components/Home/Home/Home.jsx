import Contact from "../../Contact/Contact";
import ExtraSection from "../../ExtraSection/ExtraSection";
import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
// import FeatureProduct from "../FeatureProduct/FeatureProduct";
import OurCollection from "../OurCollection/OurCollection";
import PeopleSays from "../PeopleSays/PeopleSays";

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurCollection/>
            {/* <FeatureProduct/> */}
            <CategorySection/>
            <PeopleSays/>
            <ExtraSection/>
            <Contact/>
        </div>
    );
};

export default Home;