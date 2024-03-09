import { useEffect, useState } from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Jobs from "../Jobs";

const JobCategory = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        fetch('allJobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])
    const uniqueCategories = Array.from(new Set(jobs.map(job => job.category)))
    const filteredJobs = selectedCategory
        ? jobs.filter(job => job.category === selectedCategory)
        : jobs;
    return (
        <div>
            <Tabs>
                <TabList className="border flex items-center justify-center mt-5">
                    {uniqueCategories.map((category, index) => (
                        <Tab key={index} onClick={() => setSelectedCategory(category)}>
                            {category}
                        </Tab>
                    ))}
                </TabList>
                <div className="">
                    {uniqueCategories.map((category, index) => (
                        <TabPanel key={index}>

                            <Jobs filteredJobs={filteredJobs} />
                        </TabPanel>
                    ))}
                </div>

            </Tabs>
        </div>
    )
}
export default JobCategory;