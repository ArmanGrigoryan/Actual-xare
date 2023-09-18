import React from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import AboutImage from '../../assets/img/about/about2orange.png';

const AboutText = () => {

    return (
        <div className="rs-about style1 pt-82 pb-100 md-pt-50 md-pb-60">            
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-last padding-0 md-pl-14 md-pr-14 md-mb-30">
                        <div className="img-part animated">
                            <img className="about-main" src={AboutImage} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6 pr-70 md-pr-14">
                        <div className="about-content">
                            <SectionTitle
                                sectionClass="sec-title mb-44 md-mb-0"
                                subtitleClass="sub-title orange"
                                subtitle=""
                                titleClass="title mb-16"
                                title="Ակտուալ-ի մասին"
                                descClass="bold-text mb-22"
                                description="Recogizing the need is the primary than we expected Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus,"
                                secondDescClass="desc"
                                secondDescription="Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua enims ad minim. Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempor. Lorem ipsum dolor sit amet"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutText;