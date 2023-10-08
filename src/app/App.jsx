import React from 'react';
import { Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import CourseSingle from '../pages/course/course-single';
import Event from '../pages/event';
import Login from '../pages/login';
import Register from '../pages/register';
import Blog from '../pages/blog';
import Contact from '../pages/contact';
import Error from '../pages/404';
import Course from './../pages/course/index';
import Checkout from '../pages/shop/checkout';

const App = () => {

    return (
        <div className='App'>
            {/* <Router> */}
            <Switch>
                <Route path="/" exact element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/course" exact element={<Course />} />
                <Route path="/course/course-single" element={<CourseSingle />} />
                <Route path="/event" element={<Event />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/blog" exact element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<Error />} />
            </Switch>
            {/* </Router> */}
        </div>
    );
}

export default App;
