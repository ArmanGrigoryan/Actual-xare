import React from 'react';
import Slider from "react-slick";
import SingleTeam from '../../components/Team/SingleTeam';
import SectionTitle from '../../components/Common/SectionTitle';

import team1 from '../../assets/img/team/1.jpg';
import team2 from '../../assets/img/team/2.jpg';
import team3 from '../../assets/img/team/3.jpg';
import team4 from '../../assets/img/team/4.jpg';

const Team = () => {
    const slilderSettings = {
        dots: false,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 3500,
        lazyLoad: true,
        infinite: true,
        arrows: true,
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
                    slidesToShow: 1,
                    arrows: false,
                }
            },
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
                                subtitle="Դասավանդողներ"
                                titleClass="title mb-0"
                                title="Ակտուալի թիմը"
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
                            Designation="Հիմնադիր տնօրեն, Ավագ ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={team4}
                            Title="Մոնիկա Գրիգորյան"
                            Designation="ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={team2}
                            Title="Լիլիթ Դավթյան"
                            Designation="ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            Image={team2}
                            Title="Էլեն Մարդոյան"
                            Designation="Մենեջեր"
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team;