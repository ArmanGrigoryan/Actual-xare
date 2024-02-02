import React, { useContext } from "react";
import { CourseContext } from 'app/App';
import { Navigate } from "react-router-dom";

export default function withCourse(Component) {
    return function withCourseComponent() {
        const { course } = useContext(CourseContext);

        return course ?
            <Component /> :
            <Navigate to="/course" />
    }
}