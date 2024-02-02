import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from 'app/App';

const SingleCard = (props) => {
    const { eventChangeHandler } = useContext(EventContext);

    return (
        <div className={props.eventClass ? props.eventClass : 'event-item'}>
            <Link to="/event/event-single" onClick={() => eventChangeHandler(props)}>
                <div className="event-short">
                    <div className="featured-img">
                        <img 
                            loading="lazy" 
                            src={props.logo} 
                            alt="Event" 
                            className="radius-12 height-500 md-height-600 object-fit-cover w-100"
                        />
                    </div>
                    <div className="content-part">
                        <h4 className="title">{ props.title }</h4>
                        {
                            props.eventDesc ?
                            <p className="text">
                                {props.eventDesc}
                            </p> : ''
                        }
                        <div className="address"><i className="fa fa-map-o"></i> { props.location }</div>
                        {
                            props.date ?
                                <div className="date-part">
                                    <div className="date">
                                        <i className="fa fa-calendar-check-o"></i>
                                        {props.date}
                                    </div>
                                </div> : ''
                        }

                        {props.schedule ?
                            <div className="time">
                                <i className="fa fa-clock-o"></i>
                                {props.schedule}
                            </div> : ''
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SingleCard