import React from 'react';
import useFade from '../../../utils/hooks/useFade';

const ReviewPart = () => {
    const { refElement: animateRef } = useFade(false);

    return (
        <div className="content pt-30 pb-30 white-bg" ref={animateRef}>
            <div className="cource-review-box mb-30">
                <h4>Stephane Smith</h4>
                <div className="rating">
                    <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span> 256 Reviews
                </div>
                <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                <div className="helpful">Was this review helpful?</div>
                <ul className="like-option">
                    <li><i className="fa fa-thumbs-o-up"></i></li>
                    <li><i className="fa fa-thumbs-o-down"></i></li>
                    <li><a className="report">Report</a></li>
                </ul>
            </div>
            <div className="cource-review-box mb-30">
                <h4>Anna Sthesia</h4>
                <div className="rating">
                    <span className="total-rating">4.5</span> <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span> 256 Reviews
                </div>
                <div className="text">Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus.</div>
                <div className="helpful">Was this review helpful?</div>
                <ul className="like-option">
                    <li><i className="fa fa-thumbs-o-up"></i></li>
                    <li><i className="fa fa-thumbs-o-down"></i></li>
                    <li><a className="report">Report</a></li>
                </ul>
            </div>
        </div>
    );
}

export default ReviewPart;