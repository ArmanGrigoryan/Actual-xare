import React from 'react';
import Slider from "react-slick";
import SingleTeam from '../../components/Team/SingleTeam';
import SectionTitle from '../../components/Common/SectionTitle';

import team1 from '../../assets/img/team/team1.jpg';
import team2 from '../../assets/img/team/team2.jpg';
import team3 from '../../assets/img/team/team3.jpg';
import team4 from '../../assets/img/team/team4_.jpg';

const Team = () => {

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i className="flaticon-right-arrow"></i></button>
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i className="flaticon-left-arrow"></i></button>
        );
    }

    const slilderSettings = {
        dots: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3500,
        lazyLoad: true,
        infinite: true,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: "active",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-team style1 inner-style orange-color pt-94 pb-100 md-pt-64 md-pb-70 gray-bg">
                <div className="container">
                    <div className="row y-middle mb-30">
                        <div className="col-md-6 sm-mb-30">
                            <SectionTitle
                                sectionClass="sec-title"
                                subtitleClass="sub-title orange"
                                subtitle="Ակտուալի թիմը"
                                titleClass="title mb-0"
                                title="Դասավանդողներ"
                            />
                        </div>
                    </div>
                    <Slider {...slilderSettings}>
                        <SingleTeam
                            itemClass="team-item"
                            Image={team1}
                            Title="Սոնա Վարդանյան"
                            Designation="Ավագ ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={team2}
                            Title="Սիրանուշ Բարսեղյան"
                            Designation="Ավագ ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={team3}
                            Title="Լաուրա Վիրաբյան"
                            Designation="CEO, Ավագ ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={team4}
                            Title="Մոնիկա Գրիգորյան"
                            Designation="ՄՌԿ մասնագետ"
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team;