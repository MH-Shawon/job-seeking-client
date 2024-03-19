import { useEffect, useState } from "react";
import "animate.css/animate.min.css";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Jobs from "../Jobs";
import Marquee from "react-fast-marquee";

const JobCategory = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch("https://job-seeking-server-theta.vercel.app/api/v1/jobs")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    const uniqueCategories = [
        "All Jobs",
        ...Array.from(new Set(jobs.map((job) => job.category))),
    ];

    const filteredJobs = selectedCategory
        ? jobs.filter((job) => job.category === selectedCategory)
        : jobs;

    return (
        <div>
            <Marquee className="text-4xl font-extrabold mb-8 text-center text-white bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded shadow-md animate__animated animate__fadeIn mt-5">
                <h2>
                    🚀 Discover Exciting Career Opportunities 🌟
                </h2>
            </Marquee>

            <Tabs>
                <TabList className="flex justify-center space-x-4 bg-gray-800 p-4 rounded-lg">
                    {uniqueCategories.map((category, index) => (
                        <Tab
                            className={`text-white px-4 py-2 rounded cursor-pointer focus:outline-none ${selectedCategory === category
                                ? 'bg-indigo-600 font-bold'
                                : 'hover:bg-gray-700'
                                }`}
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Tab>
                    ))}
                </TabList>
                <div className="">
                    {uniqueCategories.map((category, index) => (
                        <TabPanel key={index}>
                            <Jobs
                                filteredJobs={category === "All Jobs" ? jobs : filteredJobs}
                            />
                        </TabPanel>
                    ))}
                </div>
            </Tabs>
        </div>
    );
};
export default JobCategory;
