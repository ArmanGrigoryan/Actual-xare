import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import CourseSingle from '../pages/course/course-single';
import Event from '../pages/event';
import Login from '../pages/login';
import Register from '../pages/register';
import Blog from '../pages/blog';
import Contact from '../pages/contact';
import Error from '../pages/404';
import LoadTop from '../components/Common/ScrollTop/LoadTop';
import Course from './../pages/course/index';
import Checkout from '../pages/shop/checkout';

const App = () => {

    return (
        <div className='App'>
            <Router>
                <LoadTop />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/course" exact component={Course} />
                    <Route path="/course/course-single" component={CourseSingle} />
                    <Route path="/event" component={Event} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/checkout" component={Checkout} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
