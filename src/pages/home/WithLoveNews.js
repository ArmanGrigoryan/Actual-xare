import React from 'react';
import Slider from 'react-slick';
import withPreviewPopup from 'comp/HOC/withPreviewPopup';
import SectionTitle from 'comp/Common/SectionTitle';
import Image from 'comp/Elements/Image';
import HtmlText from 'comp/Elements/HtmlText';
import { useQuery } from 'react-query';
import { getNews } from 'api';

const sliderSettings = {
    dots: true,
    centerMode: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 12000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                dots: false,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
};

const WithLoveNews = ({ openPreviewHandler }) => {
    const { data, isFetched } = useQuery("news", getNews);

    return (
        <div className="rs-featured-news pt-50 pb-70 md-pb-50 sm-pb-20">
            <div className="container-fluid">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle="Ծանոթացեք վերջին նորություններին"
                    titleClass="title mb-40 sm-mb-10"
                    title="Սիրով՝ Ակտուալից"
                />

                <Slider {...sliderSettings}>
                    {
                        isFetched ?
                        data.slice(0).reverse().map(({ id, logo, alt, html }) => {
                            const textDescriptionComponent = <HtmlText html={html} />;

                            return (
                                <Image
                                    key={id}
                                    src={logo} 
                                    alt={alt} 
                                    className="block d-block w-100 radius-12 b-none border-none coverable" 
                                    clickHandler={evt => openPreviewHandler(evt, textDescriptionComponent)}
                                    textDescriptionComponent={textDescriptionComponent}
                                    isZooming={true}
                                />
                            )
                        }) :
                        null
                    }
                </Slider>
            </div>
        </div>
    );
}

const WithLoveNewsWithPreview = withPreviewPopup(WithLoveNews);

export default WithLoveNewsWithPreview;