import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from 'app/App';

const SingleCard = (props) => {
    const { courseChangeHandler } = useContext(CourseContext);

    return (
        <div className={`${props.itemClass}`}>
            <Link to="/course/course-single" onClick={() => courseChangeHandler(props)}>
                <div className="courses-grid">
                    <div className="img-part featured-img">
                        <img 
                            src={props.logo}
                            alt={props.title}
                            loading="lazy"
                            className="xl-min-height-500"
                        />
                    </div>
                    <div className="content-part">
                        <div className="info-meta">
                            <ul>
                                <li className="ratings">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <span>({props.rate} կարծիք)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="course-price">
                            <span className="price">{props.info}</span>
                        </div>
                        <h3 className="title">{props.title}</h3>
                        <ul className="meta-part">
                            <li className="user">
                                <i className="fa fa-user"></i>
                                {props.disabled ? 0 : props.studentQuantity} մասնակից
                            </li>
                            <li className="user">
                                <i className="fa fa-file"></i>
                                {props.lessonsQuantity} դաս
                            </li>
                        </ul>
                        <span className="course-qnty">{props.quantity}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SingleCard