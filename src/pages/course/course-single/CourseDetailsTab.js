import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import FaqPart from './FaqPart';
import ReviewPart from './ReviewPart';
import OverviewPart from './OverviewPart';
import CurriculumPart from './CurriculumPart';

const CourseDetailsTab = () => {

    let tab1 = "Overview",
        tab2 = "Curriculum",
        tab4 = "Faq",
        tab5 = "Reviews"
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
                        <button>{tab4}</button>
                    </Tab>
                    <Tab>
                        <button>{tab5}</button>
                    </Tab>
                </TabList>

                <TabPanel>
                    <OverviewPart />
                </TabPanel>

                <TabPanel>
                    <CurriculumPart />
                </TabPanel>

                <TabPanel>
                    <FaqPart />
                </TabPanel>

                <TabPanel>
                    <ReviewPart />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default CourseDetailsTab;