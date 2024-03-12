
import { Helmet } from "react-helmet-async";
import Banner from "../../Layouts/Banner/Banner";
import JobCategory from "../../Layouts/Job/JobCategory/JobCategory";
import Story from "../../Layouts/Story/Story";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Job Seeking | Home </title>
            </Helmet>
            <Banner />
            <JobCategory />
            <Story />
        </div>
    )
}
export default Home;