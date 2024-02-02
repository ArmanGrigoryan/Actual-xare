import React, { createContext, useState } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from 'pages/home';
import About from 'pages/about';
import Course from 'pages/course';
import CourseSingle from 'pages/course/course-single';
import Event from 'pages/event';
import EventSingle from 'pages/event/event-single';
import Contact from 'pages/contact';
import Error from 'pages/404';
import { Storage } from 'helpers';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import withCourse from 'comp/HOC/withCourse';
import withEvent from 'comp/HOC/withEvent';

export const CourseContext = createContext(null);
export const EventContext = createContext(null);

export const queryClient = new QueryClient();

const CourseSingleHOC = withCourse(CourseSingle);
const EventSingleHOC = withEvent(EventSingle);

const App = () => {
    const [course, setCourse] = useState(Storage.get("course"));
    const [event, setEvent] = useState(Storage.get("event"));

    const courseChangeHandler = (value) => {
        setCourse(value);
        Storage.set("course", value);
    }

    const eventChangeHandler = (value) => {
        setEvent(value);
        Storage.set("event", value);
    }

    return (
        <div className='App'>
            <QueryClientProvider client={queryClient}>
                <CourseContext.Provider value={{
                    course,
                    courseChangeHandler,
                }}>
                    <EventContext.Provider value={{
                        event,
                        eventChangeHandler,
                    }}>
                        <Switch>
                            <Route path="/" exact element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/course" exact element={<Course />} />
                            <Route path="/course/course-single" element={<CourseSingleHOC />} />
                            <Route path="/event" element={<Event />} />
                            <Route path="/event/event-single" element={<EventSingleHOC />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<Error />} />
                        </Switch>
                    </EventContext.Provider>
                </CourseContext.Provider>
            </QueryClientProvider>
        </div>
    );
}

export default App;