import React, { useContext } from "react";
import { EventContext } from 'app/App';
import { Navigate } from "react-router-dom";

export default function withCourse(Component) {
    return function withCourseComponent() {
        const { event } = useContext(EventContext);

        return event ?
            <Component /> :
            <Navigate to="/event" />
    }
}