import Slider from "react-slick";
import SectionTitle from "comp/Common/SectionTitle";
import withPreviewPopup from "comp/HOC/withPreviewPopup";
import Image from "comp/Elements/Image";
import image11 from 'media/with-love-news/11.jpg';
import image12 from 'media/with-love-news/12.jpg';
import image13 from 'media/with-love-news/13.jpg';
import image15 from 'media/with-love-news/15.jpg';
import image16 from 'media/with-love-news/16.jpg';
import image17 from 'media/with-love-news/17.jpg';
import image19 from 'media/with-love-news/19.jpg';
import image20 from 'media/with-love-news/20.jpg';

const sliderSettings = {
    dots: true,
    centerMode: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
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

const Items = [
    ///                Reviews
    {
        id: 1,
        imgUrl: image11,
        alt: "1",
        textDescriptionComponent: <>
            <p className="mb-0">🚀 Ինչու՞ ընտրեցիք Ակտուալը</p>
            <p>👉 Ինչու՞ ընտրել Ակտուալը, որովհետև մեծ հնարավորություններ է տալիս հասնել հաջողության</p>
            <p className="mb-0">🚀 Ի՞նչ տվեց ձեզ դասընթացը</p>
            <p>👉 Դասընթացը տվեց այն հնարավորությունը, որ կադրային գծով մասնագետը դառնա բիզնես գործընկեր</p>
            <p className="mb-0">🚀 Խորհուրդ կտա՞ք այլ մարդկանց գալ Ակտուալի դասընթացներին</p>
            <p>👉 Խորհուրդ եմ տալիս միանշանակ մասնակցել Ակտուալի կազմակերպած դասընթացին, քանի որ նմանը չունեցող դասընթաց է։ Այն ինձ սովորեցրեց քայլել ժամանակին համընթաց</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 2,
        imgUrl: image15,
        alt: "2",
        textDescriptionComponent: <>
            <p className="mb-0">🤍 Մի քանի բառով պատմեք ձեր մասին</p>
            <p>👉 Ես Մերին եմ, աշխատում եմ որպես HR մասնագետ պետական համակարգում, մասնավոր ոլորտ անցնելու համար ընտրել եմ սկսնակների համար դասընթացը՝ ամբողջական պատկերացում կազմելու և գիտելիքնես ավելի ամրապնդելու համար</p>
            <p className="mb-0">🤍 Ինչու՞ ընտրեցիք մեզ</p>
            <p>👉 Ընտրել եմ հենց Ձեզ, քանի որ կարծում եմ՝ շուկայում առաջատարներից եք</p>
            <p className="mb-0">🤍 Ի՞նչ տվեց ձեզ դասընթացը</p>
            <p>👉 Դասընթացը տվեց ավելի հիմնավոր գիտելիքներ և հնարավորություն տվեց խորապես սովորել Մարդակային ռեսուրսների կառավարման առանձնահատկությունները</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 3,
        imgUrl: image12,
        alt: "3",
        textDescriptionComponent: <>
            <p className="mb-0">🚀 Ինչու՞ ընտրեցիք Ակտուալը</p>
            <p>👉 Ակտուալը Նորն ու այժմեականը լսելու վստահելի հարթակ է</p>
            <p className="mb-0">🚀 Ի՞նչ տվեց ձեզ դասընթացը</p>
            <p>👉 Ոլորտային կիրառելի գիտելիք և հմտություն, նոր կապեր ու լավ ընկերներ</p>
            <p className="mb-0">🚀 Խորհուրդ կտա՞ք այլ մարդկանց գալ Ակտուալի դասընթացներին</p>
            <p>👉 Արդեն խորհուրդ եմ տվել!</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 4,
        imgUrl: image16,
        alt: "4",
        textDescriptionComponent: <>
            <p className="mb-0">🤍 Մի քանի բառով պատմեք ձեր մասին</p>
            <p>👉 Ես Անին եմ, Ավարտել եմ ՀՊՏՀ ֆինանսներ բաժինը,աշխատում եմ ԱԿԲԱ Բանկում</p>
            <p className="mb-0">🤍 Ինչու՞ ընտրեցիք մեզ</p>
            <p>👉 Գրանցվեցի քանի որ օրը և ժամը ինձ շատ հարմար էր</p>
            <p className="mb-0">🤍 Ի՞նչ տվեց ձեզ դասընթացը</p>
            <p>👉 Դասընթացը շատ հետաքրքիր էր, բավական գիտելիք ստացա նոր մասնագիտությամբ՝ որպես սկսնակ աշխատելու համար</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 5,
        imgUrl: image13,
        alt: "5",
        textDescriptionComponent: <>
            <p className="mb-0">🚀 Ինչու՞ ընտրեցիք Ակտուալը</p>
            <p>👉 Ինչու՞ ընտրել Ակտուալը, որովհետև մեծ հնարավորություններ է տալիս հասնել հաջողության</p>
            <p className="mb-0">🚀 Ի՞նչ տվեց ձեզ դասընթացը</p>
            <p>👉 Դասընթացը լինելով բավականին հագեցած` փոխանցեց գործիքակազմ և հմտություններ այն կիրառելու և բիզնեսում հաջողության հասնելու գործում</p>
            <p className="mb-0">🚀 Խորհուրդ կտա՞ք այլ մարդկանց գալ Ակտուալի դասընթացներին</p>
            <p>👉 Ոչ միայն խորհուրդ կտամ մասնակցել , այլև ես ինքս մեծ սիրով կրկին կմասնակցեմ Ակտուալի կողմից անցկացվելիք դասընթացներին</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 6,
        imgUrl: image17,
        alt: "6",
        textDescriptionComponent: <>
            <p className="mb-0">🤍 Մի քանի բառով պատմեք ձեր մասին</p>
            <p>👉 Ես Անուշն եմ, Բրեվիս ընկերության HR բաժնի աշխատակից։ ՄՌԿ փորձառությունս սկսել եմ 2021 թվականից պետական համակարգում։ Ինձ համար մարտահրավերային էր ընտրել ՄՌԿ ոլորտը, քանի որ առաջին մասնագիտությամբ անգլերեն լեզվի մանկավարժ եմ, իսկ երկրորդ մասնագիտությամբ՝ մակրոտնտեսական վերլուծաբան</p>
            <p className="mb-0">🤍 Ինչու՞ ընտրեցիք մեզ</p>
            <p>👉 Ընկերության տնօրինությունը առաջարկեց</p>
            <p className="mb-0">🤍 Ի՞նչ տվեց ձեզ դասընթացը</p>
            <p>👉 Դասընթացը տվեց համակարգված և ամբողջական պատկերացում/գիտելիքներ ՄՌԿ-ի տեսությունից մինչև պրակտիկ կիրառությունը տարբեր ոլորտներում։ Ծանոթացում ՄՌԿ գրեթե բոլոր գործառույթներին և շուկայում ընթացող միտումներին</p>
            <p>🥹 ՀԳ։ Շնորհակալ եմ Ակտուալ կենտրոնին և Լաուրա Վիրաբյանին հետաքրքիր և արդյունավետ դասընթացի համար։ Դեռ կհանդիպենք HR ոլորտում․․․</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },

    ///             Instructor part
    {
        id: 19,
        imgUrl: image19,
        alt: "19",
        textDescriptionComponent: <>
            <p>Ողջույն👋 Ես Սիրանուշն եմ՝ 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ի ավագ 𝗛𝗥 մասնագետ 👩‍💼</p>
            <p>Ես պատրաստ եմ իմ մասնագիտական գիտելիքները և փորձը ներդնելու Ձեր բիզնեսի առջև դրված մարդկային ռեսուրսների կառավարման խնդիրները կարգավորելու համար 🔍</p>
            <p>🤝 Վստահե՛ք Ձեր բիզնեսի առաջընթացն ու նոր և պրոֆեսիոնալ մասնագետների հավաքագրման գործընթացն 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ին 🚀</p>
            <p>𝗛𝗥 աութսորս ծառայությունների փաթեթներին ծանոթանալու համար գրե՛ք մեր էջին կամ զանգահարե՛ք նշված հեռախոսահամարով 👇</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 20,
        imgUrl: image20,
        alt: "20",
        textDescriptionComponent: <>
            <p>Ողջույն👋 Ես Մոնիկան եմ՝ 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ի 𝗛𝗥 մասնագետ 👩‍💼</p>
            <p>Ես կօգնեմ Ձեզ ճիշտ ներկայանալ աշխատաշուկայում` որպես գործատու և համալրել Ձեր թիմը նոր ու պրոֆեսիոնալ մասնագետներով 🔍</p>
            <p>🤝 Վստահե՛ք Ձեր բիզնեսի առաջընթացն ու մարդկային ռեսուրսների կառավարման ողջ գործընթացն 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ին 🚀</p>
            <p>𝗛𝗥 աութսորս ծառայությունների փաթեթներին ծանոթանալու համար գրե՛ք մեր էջին կամ զանգահարե՛ք նշված հեռախոսահամարով 👇</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
];

const CourseReviews = ({ openPreviewHandler }) => {
    return (
        <div className="rs-course-reviews pt-100 pb-100 md-pt-76 md-pb-100 sm-pb-70">
            <div className="container-fluid">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle=""
                    titleClass="title mb-40"
                    title="Ակտուալ Հաղորդակցություն"
                />

                <Slider {...sliderSettings}>
                    {
                        Items.map(({ id, imgUrl, alt, textDescriptionComponent }) => (
                            <Image
                                key={id}
                                src={imgUrl} 
                                alt={alt} 
                                className="block d-block w-100 radius-12 b-none border-none coverable" 
                                clickHandler={evt => openPreviewHandler(evt, textDescriptionComponent)}
                                textDescriptionComponent={textDescriptionComponent}
                                isZooming={true}
                            />
                        ))
                    }
                </Slider>
            </div>
        </div>
        
    )
}

const CourseReviewsWithPreview = withPreviewPopup(CourseReviews);

export default CourseReviewsWithPreview;