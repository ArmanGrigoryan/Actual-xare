import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import SingleTestimonial from '../../components/Testimonial/SingleTestimonial';
import quote from '../../assets/img/testimonial/main-home/test-2.png';
// import author1 from '../../assets/img/testimonial/style5/1.png';
// import author2 from '../../assets/img/testimonial/style5/1.png';
// import author3 from '../../assets/img/testimonial/style5/1.png';
import female from '../../assets/img/icon/female.png';

const Testimonial = () => {

    const testimonialSettings = {
        dots: true,
        centerMode: false,
        infinite: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="rs-testimonial main-home pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title2 mb-50 md-mb-30 text-center"
                        subtitleClass="sub-title primary"
                        subtitle=""
                        titleClass="title white-color"
                        title="Կարծիքներ մեր մասին"
                        effectClass="heading-line"
                    />
                    <Slider {...testimonialSettings}>
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Լուսինե Մանուկյան"
                            Designation="ՄՌԿ մասնագետ"
                            Description="Ոչ միայն խորհուրդ կտամ մասնակցել , այլև ես ինքս մեծ սիրով կրկին կմասնակցեմ Ակտուալի կողմից անցկացվելիք դասընթացներին..."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Արմինե Աղաջանյան"
                            Designation="ՄՌԿ մասնագետ"
                            Description="Ակտուալը նորն ու այժմեականը լսելու վստահելի հարթակ է..."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Սուսաննա Մարտիրոսյան"
                            Designation="ՄՌԿ մասնագետ"
                            Description="Դասընթացը տվեց այն հնարավորությունը, որ կադրային գծով մասնագետը դառնա բիզնես գործընկեր..."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Սոնա Վարդանյան"
                            Designation="ՄՌԿ դասընթացի շրջանավարտ"
                            Description="Շատ շնորհակալ եմ արդիական դասընթացի, կազմակերպության գործնական խնդիրների վերաբերյալ մեծ քանակությանմբ տեղյակություն ստանալու համար..."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Աննա Օհանյան"
                            Designation="ՄՌԿ դասընթացի շրջանավարտ"
                            Description="Ակտուալ-ում Յուրաքանչյուր թեմա յուրովի հետաքրքիր է..."
                        />
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial