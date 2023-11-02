import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ReviewPart from './ReviewPart';
import OverviewPart from './OverviewPart';
import InstructorPart from './IntructorPart';

const CourseDetailsTab = () => {

    let tab1 = "Նկարագիր",
        tab2 = "Դասընթացավար",
        tab3 = "Կարծիքներ";
    const tabStyle = 'intro-tabs tabs-box';

    return (
        <div className="intro-info-tabs">
            <Tabs>
                <TabList className={tabStyle}>
                    <Tab>
                        <button>{tab1}</button>
                    </Tab>
                    <Tab>
                        <button>{tab2}</button>
                    </Tab>
                    <Tab>
                        <button>{tab3}</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <OverviewPart />
                </TabPanel>

                <TabPanel>
                    <InstructorPart />
                </TabPanel>

                <TabPanel>
                    <ReviewPart />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default CourseDetailsTab;