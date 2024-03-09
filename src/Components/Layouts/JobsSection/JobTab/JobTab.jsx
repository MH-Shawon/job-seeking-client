import { Tab, TabList, TabPanel, Tabs } from "react-tabs"; 
import "react-tabs/style/react-tabs.css";

const JobTab=({job})=>{
    console.log(job)
    return(
        <div>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )}
export default JobTab;