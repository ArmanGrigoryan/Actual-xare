import React from 'react';
import Slider from 'react-slick';
import SectionTitle from 'comp/Common/SectionTitle';
import Image from 'comp/Elements/Image';
import withPreviewPopup from 'comp/HOC/withPreviewPopup';
import image1 from 'media/with-love-news/35.jpg';
import image2 from 'media/with-love-news/36.jpg';
import image3 from 'media/with-love-news/28.jpg';
import image4 from 'media/with-love-news/29.jpg';
import image5 from 'media/with-love-news/33.jpg';
import image6 from 'media/with-love-news/32.jpg';
import image7 from 'media/with-love-news/31.jpg';
import image8 from 'media/with-love-news/34.jpg';
import image9 from 'media/with-love-news/30.jpg';
import image10 from 'media/with-love-news/27.jpg';
import image11 from 'media/with-love-news/23.jpg';
import image12 from 'media/with-love-news/25.jpg';
import image13 from 'media/with-love-news/24.jpg';
import image14 from 'media/with-love-news/21.jpg';
import image15 from 'media/with-love-news/22.jpg';
import image16 from 'media/with-love-news/18.jpg';
import image17 from 'media/with-love-news/10.jpg';
import image18 from 'media/with-love-news/9.jpg';
import image19 from 'media/with-love-news/8.jpg';
import image20 from 'media/with-love-news/6.jpg';
import image21 from 'media/with-love-news/5.jpg';
import image22 from 'media/with-love-news/3.jpg';

const sliderSettings = {
    dots: true,
    centerMode: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 10000,
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
    {
        id: 1,
        imgUrl: image1,
        alt: "1",
        textDescriptionComponent: <>
            <p>🎙 ՄԱՐԴԻԿ․ Սերունդների տարբերությունը</p>
            <p>Մարդկային ռեսուրսի կառավարումը գնալով ավելի ու ավելի է բարդանում՝ կապված բազմապիսի գործոններից, որոնցով մենք շրջապատված ենք</p>
            <p>☝️ Եթե նախկինում մասնագետը կարող էր առաջնորդվել կառավարման հստակ օրենքներով և աշխատանքը կազմակերպել ըստ այդմ, ապա, այժմ նրանից պահանջվում է, կանոններից զատ, որոշ իրողությունների հետ հաշվի նստել</p>
            <p className="mb-0">👥 Իրողությունները տարբեր են՝</p>
            <p className="mb-0">💬 սերունդների բախումներ,</p>
            <p className="mb-0">💬 մտածելակերպի տարբերություններ,</p>
            <p className="mb-0">💬 աշխարհաքաղաքական գործոններ,</p>
            <p className="mb-0">💬 զգայուն միջավայր</p>
            <p>💬 և «մարդ» ամենաառեղծվածային, բնության մասնիկին, ՀԱՍԿԱՆԱԼՈւ հանգամանքը</p>
            <p>🎙 𝗧𝗛𝗘 𝗩𝗢𝗜𝗖𝗘 𝗢𝗙 𝗛𝗥 𝟮𝟬𝟮𝟯 միջոցառման ժամանակ հենց այս թեմայով առավել մանրամասն կխոսի ԼԱՈՒՐԱ ՎԻՐԱԲՅԱՆԸ և կկիսվի իր մասնագիտական փորձառությամբ և գիտելիքներով</p>
            <p>🗣️ Լաուրա Վիրաբյանը հանդիանում է 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ի հիմնադիր տնօրենը</p>
            <p>‼️ Շտապե՛ք գրանցվել միջոցառմանը և ամրագրել Ձեր տեղը</p>
            <a className="color-inherit mb-0" href="https://rb.gy/8cbai" target="_blank">Գրանցման հղումը՝ 👉 Այստեղ</a>
            <p>📋 Մասնակցության արժեքը՝ ընդամենը 𝟳𝟵𝟬𝟬֏</p>
            <p className="mb-0">📅 Նոյեմբերի 17</p>
            <p className="mb-0">🕒 18:00 - 21:00</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 2,
        imgUrl: image2,
        alt: "2",
        textDescriptionComponent: <>
            <p>🎙 THE VOICE OF HR 2023 | THE CODE OF UPSKILLING NEW TIMES միջոցառման ՀԱՏՈՒԿ ՀՅՈՒՐՆ է ՄՌԿ մասնագետ, թրեյներ ՋՈՒԼԻԵՏԱ ՎԱՐԴԱՆՅԱՆԸ</p>
            <p>🗣️ Ջուլիետա Վարդանյանը ՄՌԿ ոլորտում է ավելի քան 𝟭𝟭 տարի</p>
            <p className="mb-0">◾️ Աշխատել է ՀՀ առաջատար ընկերություններում</p>
            <p className="mb-0">◾️ ունի շուրջ 𝟭𝟲 տարվա թրեյներական փորձ</p>
            <p className="mb-0">◾️ 𝟭𝟬 անուն թրեյնինգների հեղինակ և վարող է՝ բիզնես հաղորդակցման, սպասարկման ոլորտին վերաբերվող թեմաներով</p>
            <p className="mb-0">◾️ Հեղինակել է՝ 👇</p>
            <p className="mb-0">📘 «Մարդկային ռեսուրսների կառավարումը՝ որպես հաճախորդների սպասարկում»,</p>
            <p className="mb-0">📘 «Դառնալո՞ւ եմ բիզնեսմեն»,</p>
            <p className="mb-0">📘 «Մարդկային ռեսուրսների կառավարում․ պատմություն, սոցիոլոգիա, տնտեսագիտություն, հոգեբանություն» գրքերը</p>
            <p>📚 Միջոցառման ժամանակ տեղի կունենա նաև Ջուլիետա Վարդանյանի հեղինակային գրքերի ներկայացում-վաճառք</p>
            <p>‼️ Շտապե՛ք գրանցվել միջոցառմանը և ամրագրել Ձեր տեղը</p>
            <a className="color-inherit mb-0" href="https://rb.gy/8cbai" target="_blank">Գրանցման հղումը՝ 👉 Այստեղ</a>
            <p>📋 Մասնակցության արժեքը՝ ընդամենը 𝟳𝟵𝟬𝟬֏</p>
            <p className="mb-0">📅 Նոյեմբերի 17</p>
            <p className="mb-0">🕒 18:00 - 21:00</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 3,
        imgUrl: image3,
        alt: "3",
        textDescriptionComponent: <>
            <p>🎙 𝗧𝗛𝗘 𝗩𝗢𝗜𝗖𝗘 𝗢𝗙 𝗛𝗥-ը հարթակ է, որն իր շուրջն է համախմբում 𝗛𝗥 ոլորտի մասնագետներին՝ դարձնելով նրանց ձայնն առավել լսելի</p>
            <p>Այս տարի միջոցառումը կրում է 𝗧𝗛𝗘 𝗖𝗢𝗗𝗘 𝗢𝗙 𝗨𝗣𝗦𝗞𝗜𝗟𝗟𝗜𝗡𝗚 𝗡𝗘𝗪 𝗧𝗜𝗠𝗘𝗦 խորագիրը, որը գալիս է բացահայտելու նոր ժամանակներում գործատուին անհրաժեշտ բոլոր հմտությունների կատարելագործման բանաձևը 🧬</p>
            <p>Արդեն 2-րդ տարին անընդմեջ՝ նախագիծն իր շուրջը կհամախմբի այն մասնագետներին և ընկերություններին, որոնք պատրաստ են իրենց ներդրումն ունենալ ոլորտի զարգացման, խնդիրների քննարկման և նոր մարտահրավերներին դիմակայմանը</p>
            <p>🎙 THE VOICE OF HR 2023 | THE CODE OF UPSKILLING NEW TIMES -ը հնարավորություն կտա նաև հաստատել նոր ու օգտակար կապեր գործընկերների հետ և ստանալ խորհուրդներ ու վարպետության դասեր ոլորտի առաջատար մասնագետների կողմից</p>
            <p>🗣 𝗧𝗲𝗱 𝘁𝗮𝗹𝗸 ձևաչափով միջոցառման խոսնակները կկիսվեն իրենց փորձառությամբ և կքննարկեն մարդկային ռեսուրսների կառավարմանն առնչվող արդի խնդիրներն՝ առաջարկելով նաև դրանց արդյունավետ լուծման ուղիները</p>
            <a className="color-inherit mb-0" href="https://rb.gy/8cbai" target="_blank">Գրանցման հղումը՝ 👉 Այստեղ</a>
            <p>📋 Մասնակցության արժեքը՝ ընդամենը 𝟳𝟵𝟬𝟬֏</p>
            <p className="mb-0">📅 Նոյեմբերի 17</p>
            <p className="mb-0">🕒 18:00 - 21:00</p>
            <p className="mb-0">📍 256HUB , Ծիծեռնակաբերդի խճուղի 1/3</p>
            <p>Բաց մի՛ թող 𝗛𝗥 ոլորտի սպասված միջոցառման մասնակիցը լինելու քո հնարավորությունը</p>
            <p className="mb-0">Հատուկ շնորհակալություն միջոցառման բոլոր խոսնակներին՝ իրենց մասնագիտական գիտելիքներով և փորձով կիսվելու պատրաստակամության համար 🤝</p>
            <p className="mb-0">💳 Վճարման հաշվեհամարը Հ/Հ 220533334557000</p>
            <p className="mb-0">ԱԿԲԱ ԲԱՆԿ ԲԲԸ</p>
            <p className="mb-0">ԱԿՏՈւԱԼ ՍՊԸ</p>
            <p>#thevoiceofhr #hr #hragency #actualhr #thevoiceofhr</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 4,
        imgUrl: image4,
        alt: "4",
        textDescriptionComponent: <>
            <p>🎙 THE VOICE OF HR 2023 | THE CODE OF UPSKILLING NEW TIMES միջոցառման գործընկերն է Job.am հարթակը</p>
            <p>🔎 𝐉𝐨𝐛.𝐚𝐦 ընկերությունն աշխատանքի առցանց շուկայում իր գործունեությունը սկսել է դեռևս 2001թվ-ից</p>
            <p>Ընկերությունը բոլոր գործատուներին է առաջարկում բարձրակարգ մասնագետների հավաքագրման արագ ու հարմարավետ միջոց և ջանք չի խնայում ստեղծելու հնարավոր ամեն ինչ՝ անհրաժեշտ աշխատակիցների ընդունման գործընթացը պարզեցնելու և գործատուի ժամանակը խնայելու համար 👌</p>
            <p>🤝 Շնորակալ ենք՝ աջակցության և միջոցառման գործընկերը լինելու համար</p>
            <p>‼️ Շտապի՛ր ամրագրել քո տեղը 𝗧𝗛𝗘 𝗩𝗢𝗜𝗖𝗘 𝗢𝗙 𝗛𝗥-ին</p>
            <a className="color-inherit mb-0" href="https://rb.gy/8cbai" target="_blank">Գրանցման հղումը՝ 👉 Այստեղ</a>
            <p>#thevoiceofhr #hr #hragency #actualhr #thevoiceofhr #job #jobam</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 5,
        imgUrl: image5,
        alt: "5",
        textDescriptionComponent: <>
            <p>Բիզնեսի աշխարհում ոչինչ հաստատուն չի մնում 📊</p>
            <p>🤖 Տեխնոլոգիական զարգացմանը զուգընթաց փոխվում են նաև շուկաները և սպառողների նախասիրությունները</p>
            <p>Արդյունքում, ընկերությունները պետք է հարմարվեն կա՛մ մնալ նույն արժեքներով, կա՛մ փորձեն դառնալ առավել մրցունակ ‼</p>
            <p>👉 Եվ այստեղ է, որ հմտությունների արդիականացումը սկսում է գործարկվել</p>
            <p>Երբ աշխատակիցներին խրախուսվում է սովորել և աճել, նրանք ոչ միայն քայլում են ոլորտի փոփոխություններին ընդառաջ, այլև՝ ակտիվորեն նպաստում են բիզնեսի ապագայի ձևավորմանը 👌</p>
            <p>Այս նորարարական ոգին կարող է հզոր մղիչ ուժ լինել աճի և հաջողության համար 📈</p>
            <p>🎙 THE VOICE OF HR 2023 | THE CODE OF UPSKILLING NEW TIMES միջոցառման ժամանակ հենց այս թեմայով առավել մանրամասն կխոսի ԼՈՒՍԻՆԵ ԱՐՍԵՆՅԱՆԸ և կկիսվի իր մասնագիտական փորձառությամբ և գիտելիքներով</p>
            <p>🗣️ Լուսինե Արսենյանը ներկայումս հանդիսանում է Zigzag ընկերության ՄՌԿ բաժնի ղեկավարը</p>
            <p className="mb-0">◾️ 𝟭𝟬 տարի եղել է 𝗚𝗹𝗼𝗯𝗮𝗹 𝗖𝗿𝗲𝗱𝗶𝘁 վարկային կազմակերպության 𝗛𝗥 մենեջերը,</p>
            <p>◾️ 𝟰,𝟱 տարի հանդիսացել է 𝗗𝗼𝘂𝗯𝗹𝗲𝗧𝗿𝗲𝗲 𝗯𝘆 𝗛𝗶𝗹𝘁𝗼𝗻 𝗬𝗲𝗿𝗲𝘃𝗮𝗻 հյուրանոցի 𝗛𝗥 մենեջերը</p>
            <p>‼️ Շտապե՛ք գրանցվել միջոցառմանը և ամրագրել Ձեր տեղը</p>
            <a className="color-inherit mb-0" href="https://rb.gy/8cbai" target="_blank">Գրանցման հղումը՝ 👉 Այստեղ</a>
            <p>📋 Մասնակցության արժեքը՝ ընդամենը 𝟳𝟵𝟬𝟬֏</p>
            <p className="mb-0">📅 Նոյեմբերի 17</p>
            <p className="mb-0">🕒 18:00 - 21:00</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 6,
        imgUrl: image6,
        alt: "6",
        textDescriptionComponent: <>            
            <p>⚖️ ԱՇԽԱՏԱՆՔ-ԿՅԱՆՔ․ բալանս, թե՞ ինտեգրում</p>
            <p>Աշխատանք-կյանք փոխհարաբերությունը ուսումնասիրության և քննարկման համեմատաբար նոր առարկա է, որի նպատակը կյանքի տարբեր կողմերի միջև լավագույն հավասարակշռությունների ստեղծումն է:</p>
            <p>Ինչ-որ պահից սկսվեց քննարկվել աշխատանքի և կյանք ինտեգրացիան, որպես հակազդում աշխատանք -կյանք հավասարակշռությանը, որը փաստացիորեն ենթադրում էր 🕒 ժամանակի ճիշտ կառավարում և մեր դերերի միաձուլում՝ որպես աշխատակից և որպես անհատ։</p>
            <p>🤔 Ի վերջո, ո՞րն է ճիշտ՝ բալանս, թե՞ ինտեգրում</p>
            <p>🎙 THE VOICE OF HR 2023 | THE CODE OF UPSKILLING NEW TIMES միջոցառման շրջանակում հենց այս թեմայով առավել մանրամասն կխոսի ԱՆՈՒՇԻԿ ՄԻՆԱՍՅԱՆԸ՝ կիսվելով իր իսկ փորձառությամբ</p>
            <p>🗣 Անուշիկը ՄՌԿ ոլորտում է արդեն ավելի քան 6 տարի</p>
            <p>◾️ Այժմ հանդիանում է Mer Soft LLC և 256 HUB ընկերությանների ՄՌԿ ղեկավարը</p>
            <p>◾️ ՄՌԿ ոլորտում կարիերան սկսել է 𝗛𝗦𝗕𝗖 բանկում, ապա ՄՌԿ ղեկավար պաշտոններ զբաղեցրել 𝗢𝗽𝗲𝗿𝗮 𝗦𝘂𝗶𝘁𝗲 հյուրանոցում, 𝗗𝗶𝗴𝗶𝘁𝗮𝗶𝗻 𝗔𝗿𝗺𝗲𝗻𝗶𝗮-ում, 𝗔𝗿𝗺𝗲𝗻𝗶𝗮 𝗪𝗶𝗻𝗲-ում</p>
            <p>‼️ Շտապե՛ք գրանցվել միջոցառմանը և ամրագրել Ձեր տեղը</p>
            <a className="color-inherit mb-0" href="https://rb.gy/8cbai" target="_blank">Գրանցման հղումը՝ 👉 Այստեղ</a>
            <p>📋 Մասնակցության արժեքը՝ ընդամենը 𝟳𝟵𝟬𝟬֏</p>
            <p className="mb-0">📅 Նոյեմբերի 17</p>
            <p className="mb-0">🕒 18:00 - 21:00</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 7,
        imgUrl: image7,
        alt: "7",
        textDescriptionComponent: <>
            <p>🎙 Անձնային և մասնագիտական զարգացում</p>
            <p>Անձնային աճի և մասնագիտական առաջընթացի հարցում առանձնակի կարևոր է անձնային որակների կատարելագործումը, ինքնազարգացումը, սեփական ուժեղ ու թույլ կողմերի գնահատումը և նպատակների սահմանումը կարիերայի հարթման համար 📈</p>
            <p>Անձնային աճն անձնային որակների կառուցողական փոփոխություններն են, ինչը կյանքում օգնում է հեշտությամբ լուծել խնդիրները և կառուցել սեփական ճանապարհը</p>
            <p>🎙 𝗧𝗛𝗘 𝗩𝗢𝗜𝗖𝗘 𝗢𝗙 𝗛𝗥 միջոցառման ժամանակ ԱՆՆԱ ԶԱՐԳԱՐՅԱՆՆ առավել մանրամասն կխոսի այս թեմայով և կկիսվի իր մասնագիտական փորձառությամբ և գիտելիքներով</p>
            <p>🗣️ Աննա Զարգարյանը հանդիսանում է 𝗜𝗗𝗕𝗮𝗻𝗸-ի Ուսուցման եվ զարգացման կենտրոնի ղեկավարը</p>
            <p>◾️ Աննա Զարգարյանը հավաստագրված 𝗛𝗥 մասնագետ է</p>
            <p>◾️ Ունի 10+ տարվա փորձ 𝗛𝗥 ոլորտում</p>
            <p>◾️ 20+ տարվա դասընթացավարի փորձ և 1000-ից ավել վարած դասընթաց, 15 000-ից ավել մասնակից, 20-ից ավել տեղական և միջազգային կազմակերպությունների պատվերներով</p>
            <p>‼️ Շտապե՛ք գրանցվել միջոցառմանը և ամրագրել Ձեր տեղը</p>
            <a className="color-inherit mb-0" href="https://rb.gy/8cbai" target="_blank">Գրանցման հղումը՝ 👉 Այստեղ</a>
            <p>📋 Մասնակցության արժեքը՝ ընդամենը 𝟳𝟵𝟬𝟬֏</p>
            <p className="mb-0">📅 Նոյեմբերի 17</p>
            <p className="mb-0">🕒 18:00 - 21:00</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 8,
        imgUrl: image8,
        alt: "8",
        textDescriptionComponent: <>
            <p>🎙 Ինչպե՞ս ճանաչենք մեր ուժը</p>
            <p>👉 Ուժեղ կողմերի վրա հիմնված մոտեցումը փիլիսոփայություն է, որի նպատակը մարդու և հասարակության ուժեղ կողմերը վեր հանելն է և դրանք կիրառելը տարբեր ուղղություններով զարգացումն ապահովելու նպատակով</p>
            <p>Կենտրոնանալով ուժեղ կողմերի և մեր ներքին ռեսուրսների վրա՝ կարող ենք հասնել մեր պոտենցիալի առավելագույն դրսևորման 🎯</p>
            <p>🎙 THE VOICE OF HR 2023 միջոցառման ժամանակ հենց այս հարցի պատասխանը կփորձենք գտնել ԱՍՏՂԻԿ ԱՎԵՏԻՍՅԱՆԻ հետ, ով կկիսվի իր մասնագիտական փորձառությամբ և գիտելիքներով</p>
            <p>🗣️ Աստղիկ Ավետիսյանն ավելի քան 𝟭𝟭 տարի 𝗛𝗥 ոլորտում է</p>
            <p>◾️ 2021թ-ից հանդիսանում է 𝗨𝗰𝗼𝗺 ընկերության Կորպորատիվ մշակույթի և կազմակերպական զարգացման բաժնի ղեկավարը</p>
            <p>◾️ Իր կարիերան սկսել է ֆինանսաբանկային ոլորտից․ 𝗩𝗧𝗕 բանկում, այնուհետև 𝗙𝗶𝗻𝗰𝗮 ՈՒՎԿ-ում</p>
            <p>◾️ Ֆինանսաբանկային ոլորտին հաջորդել է 𝗣𝗲𝗽𝘀𝗶 ընկերությունը, որտեղ եղել է 𝗛𝗥 պատասխանատուն</p>
            <p>‼️ Շտապե՛ք գրանցվել միջոցառմանը և ամրագրել Ձեր տեղը</p>
            <a className="color-inherit mb-0" href="https://rb.gy/8cbai" target="_blank">Գրանցման հղումը՝ 👉 Այստեղ</a>
            <p>📋 Մասնակցության արժեքը՝ ընդամենը 𝟳𝟵𝟬𝟬֏</p>
            <p className="mb-0">📅 Նոյեմբերի 17</p>
            <p className="mb-0">🕒 18:00 - 21:00</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 9,
        imgUrl: image9,
        alt: "9",
        textDescriptionComponent: <>
            <p>🎙 Կազմակերպության 𝗛𝗥 բրենդինգի ձևավորում և կորպորատիվ մշակույթ</p>
            <p>Մեր օրերում առավել քան կարևոր է կազմակերպության ճիշտ և գրագետ բրենդավորումը ՝ որպես գործատու 🤝💼</p>
            <p>🎯 Գործատուի բրենդավորումն օգնում է վերջինիս ճիշտ դիրքավորվել աշխատաշուկայում, կառուցել հարաբերություններ, տարածել կորպորատիվ մշակույթն ու այն արժեքները, որոնք կրում է բիզնեսը՝ ստեղծելով ցանկալի գործատուի կերպար</p>
            <p>🎙 THE VOICE OF HR 2023 | THE CODE OF UPSKILLING NEW TIMES միջոցառման ժամանակ ՄԱՐԳԱՐՅԱՆ ԷՄՄԱՆ առավել մանրամասն կխոսի այս թեմայով և կկիսվի իր փորձառությամբ</p>
            <p className="mb-0">🗣 Էմմա Մարգարյանն 𝗛𝗥 ոլորտում է առավել քան 8 տարի</p>
            <p>Էմմա Մարգարյանն Earlyone ընկերության 𝗛𝗥 ղեկավարն է</p>
            <p>◾️ Էմմա Մարգարյանն իր կարիերան սկսել է 𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗲 𝗕𝗮𝗻𝗸 ընկերությունից, որտեղ պատասխանատու է եղել բանկի անձնակազմի հավաքագրման համար (Recruiter)</p>
            <p>◾️ 2019-21թթ․ աշխատել է միջազգային ֆինանսական կազմակերպությունում որպես 𝗛𝗥 ղեկավար</p>
            <p>◾️ Ունի և մեծ, և փոքր թիմերի հետ աշխատելու փորձառություն</p>
            <p>◾️ 2018թվ-ից հանդիսանում է ՀՀ Մարդկային Ռեսուրսների Ասոցացիայի անդամ</p>
            <p>‼️ Շտապե՛ք գրանցվել միջոցառմանը և ամրագրել Ձեր տեղը</p>
            <a className="color-inherit mb-0" href="https://rb.gy/8cbai" target="_blank">Գրանցման հղումը՝ 👉 Այստեղ</a>
            <p>📋 Մասնակցության արժեքը՝ ընդամենը 𝟳𝟵𝟬𝟬֏</p>
            <p className="mb-0">📅 Նոյեմբերի 17</p>
            <p className="mb-0">🕒 18:00 - 21:00</p>
            <p>📍 256 HUB , Ծիծեռնակաբերդի խճուղի 1/3</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 10,
        imgUrl: image10,
        alt: "10",
        textDescriptionComponent: <>
            <p>📊 𝗠𝗦 𝗘𝗫𝗖𝗘𝗟 𝗘𝗫𝗣𝗘𝗥𝗧 ԽՈՐԱՑՎԱԾ ԴԱՍԸՆԹԱՑ` սկսնակից մինչև էքսպերտային մակարդակ</p>
            <p>☝Բացահայտե՛ք 𝗠𝗦 𝗘𝗫𝗖𝗘𝗟-ի բոլոր գաղտնիքներն ու նրբություններն 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ի հետ միասին</p>
            <p className="mb-0">Դասընթացի նկարագրությունը՝</p>
            <p className="mb-0">📌Տվյալների տեսակները և դրանց ֆորմատավորումը։</p>
            <p className="mb-0">📌Տվյալների զտումը (Filter) և տեսակավորումը (Sort):</p>
            <p className="mb-0">📌Տվյալների պատճենման (Copy) և տեղադրման (Paste) տեսակներն ու առանձնահատկությունները։</p>
            <p className="mb-0">📌Պայմանական ֆորմատավորման (Conditional formating) կիրառական հնարավորությունները:</p>
            <p className="mb-0">📌Ամփոփիչ աղյուսակներ (Pivot Table):</p>
            <p>📌50-ից ավել բանաձևեր՝ առանձին և համադրված կիրառության օրինակերով։</p>
            <p className="mb-0">🟩 Տեքստային ֆունկցիաներ</p>
            <p className="mb-0">🟩 Ամսաթվային ֆունկցիաներ</p>
            <p className="mb-0">🟩 Մաթեմատիկական ֆունկցիաներ</p>
            <p className="mb-0">🟩 Վիճակագրագրական ֆունկցիաներ</p>
            <p className="mb-0">🟩 Տրամաբանական ֆունցիաներ</p>
            <p>🟩 Բազմաթիվ համադրություններ</p>
            <p className="mb-0">Կիրառական գործիքներն իրենց առանձնահատություններով՝</p>
            <p className="mb-0">📌 Consolidate</p>
            <p className="mb-0">📌 Subtotal</p>
            <p className="mb-0">📌 Text to coloumn</p>
            <p className="mb-0">📌 Data validation</p>
            <p>📌 What-if analyses և այլն։</p>
            <p className="mb-0">🏅 Բազային և պրոֆեսիոնալ մակարդակի նյութեր</p>
            <p className="mb-0">🏅 Գործնական կիրառության իրավիճակային խնդիրներ</p>
            <a className="color-inherit mb-0" href="https://rb.gy/qc4rx" target="_blank">🏅 Վիդեոդասեր` Այստեղ</a>
            <p className="mb-0">🔵 Դասընթացի ֆորմատը՝ օֆֆլայն</p>
            <p className="mb-0">🔵 Տևողությունը` 8 դասաժամ</p>
            <p>🔵 Դասընթացավար՝ Հրաչ Դավիդյանց</p>
            <p className="mb-0">🗓 Մեկնարկը` ՆՈՅԵՄԲԵՐԻ 6-ԻՑ</p>
            <p className="mb-0">👉 Դասընթացի արժեքը՝ 𝟰𝟵,𝟬𝟬𝟬 ֏</p>
            <p className="mb-0">Մասնակցության համար նախապես գրանցվել հետևյալ հղումով՝ 👇</p>
            <a className="color-inherit mb-0" href="https://rb.gy/grvfz" target="_blank">🔗 Սեղմել այստեղ</a>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 11,
        imgUrl: image11,
        alt: "11",
        textDescriptionComponent: <>
            <p>📘 𝗕𝗨𝗦𝗜𝗡𝗘𝗦𝗦 𝗘𝗡𝗚𝗟𝗜𝗦𝗛 դասընթաց՝ Քո կարիերայի առաջընթացի համար 🚀📈</p>
            <p className="mb-0">Դասընթացը ներառում է՝ 👇</p>
            <p className="mb-0">🔵 𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒 𝐕𝐎𝐂𝐀𝐁𝐔𝐋𝐀𝐑𝐘</p>
            <p className="mb-0">🔵 𝐑𝐄𝐀𝐃𝐈𝐍𝐆</p>
            <p className="mb-0">🔵 𝐋𝐈𝐒𝐓𝐄𝐍𝐈𝐍𝐆</p>
            <p className="mb-0">🔵 𝐋𝐀𝐍𝐆𝐔𝐀𝐆𝐄 𝐑𝐄𝐕𝐈𝐄𝐖</p>
            <p className="mb-0">🔵 𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐒𝐊𝐈𝐋𝐋𝐒</p>
            <p>🔵 𝐖𝐎𝐑𝐊𝐈𝐍𝐆 𝐀𝐂𝐑𝐎𝐒𝐒 𝐂𝐔𝐋𝐓𝐔𝐑𝐄𝐒</p>
            <p className="mb-0">Դասընթացի ընթացքում ուսումնասիրվող թեմաներն են՝</p>
            <p className="mb-0">🟠 Բրենդ</p>
            <p className="mb-0">🟠 Գովազդ</p>
            <p className="mb-0">🟠 Մարդկային ռեսուրսներ</p>
            <p className="mb-0">🟠 Մրցակցություն</p>
            <p>🟠 Միջազգային շուկա</p>
            <p className="mb-0">🗓 Դասընթացի ընդհանուր տևողությունը 𝟯 ամիս է</p>
            <p className="mb-0">Շաբաթական 𝟯 օր՝ երկուշաբթի, չորեքշաբթի և ուրբաթ օրերին 👈</p>
            <p className="mb-0">🕒 Դասերի տևողությունը՝ 𝟭,𝟱 ժամ, մեկնարկը՝ ժ․ 𝟭𝟵:𝟯𝟬</p>
            <p>Դասընթացի յուրաքանչյուր օրվա արժեքը՝ 𝟱𝟬𝟬𝟬 ֏</p>
            <p>📚 Դասընթացի մեկնարկը՝ ՀՈԿՏԵՄԲԵՐԻ 16-ԻՑ</p>
            <p>Գրանցվելու համար գրե՛ք մեր էջին կամ այցելե՛ք հետևյալ հղումով՝ 👇</p>
            <a className="color-inherit mb-0" href="https://shorturl.at/fgrT3" target="_blank">🔗 Սեղմել այստեղ</a>
            <p>#Actual #hragency #businessenglish #english</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 12,
        imgUrl: image12,
        alt: "12",
        textDescriptionComponent: <>
            <p>ՄԱՐԴԿԱՅԻՆ ՌԵՍՈՒՐՍՆԵՐԻ ԿԱՌԱԱՎԱՐՄԱՆ #ԱՆՎՃԱՐ դասընթաց՝ 🇦🇲 ԱՐՑԱԽԻ մեր տեղահանված հայրենակիցների համար</p>
            <p>☝️ Հիշեցնենք, որ ամիսներ առաջ հայտարարված 𝗛𝗥 𝗠𝗔𝗡𝗔𝗚𝗘𝗠𝗘𝗡𝗧 դասընթացին մասնակցության տեղերն արդեն սպառված են</p>
            <p>Ուստի նոր խմբի դասընթացի մեկնարկը նախատեսված է նոյեմբեր ամսին 📅</p>
            <p>📚 Դասընթացի ավարտից հետո մենք կաջակցենք նաև աշխատանքի տեղավորման հարցում</p>
            <p>Խնդրում ենք տարածել հրապարակումը, որպեսզի այն առավել հասանելի լինի մեր հայրենակիցների համար 💪</p>
            <a className="color-inherit mb-0" href="https://shorturl.at/flxF3" target="_blank">Նոր դասընթացի գրանցման հղումը՝ 🔗 Այստեղ</a>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 13,
        imgUrl: image13,
        alt: "13",
        textDescriptionComponent: <>
            <p>⚠️ ՈւՇԱԴՐՈՒԹՅՈՒՆ</p>
            <p>🇦🇲 ԱՐՑԱԽԻ մեր տեղահանված հայրենակիցների համար ՄԱՐԴԿԱՅԻՆ ՌԵՍՈՒՐՍՆԵՐԻ ԿԱՌԱԱՎԱՐՄԱՆ դասընթացը կլինի ԼԻՈՎԻՆ ԱՆՎՃԱՐ ‼️</p>
            <p>📚 Դասընթացի ավարտից հետո մենք կաջակցենք նաև աշխատանքի տեղավորման հարցում</p>
            <p>Խնդրում ենք տարածել հրապարակումը, կիսվել հրապարակմամբ, որպեսզի այն առավել հասանելի լինի մեր հայրենակիցների համար</p>
            <a className="color-inherit mb-0" href="https://shorturl.at/jBEPW" target="_blank">Դասընթացի գրանցման հղումը՝ 🔗 Այստեղ</a>
            <p>📅 Դասընթացի մեկնարկը` ՍԵՊՏԵՄԲԵՐԻ 30-ին</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 14,
        imgUrl: image14,
        alt: "14",
        textDescriptionComponent: <>
            <p>👉 Դարձի՛ր 𝗛𝗥 մասնագետ</p>
            <p>Շտապի՛ր ամրագրել քո տեղn Ակտուալում 🚀</p>
            <p>🤝 Վստահե՛ք Ձեր բիզնեսի առաջընթացն ու մարդկային ռեսուրսների կառավարման ողջ գործընթացն 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ին 🚀</p>
            <p className="mb-0">Մանրամասները կգտնես հետևյալ հղմամբ`</p>
            <a className="color-inherit mb-0" href="https://shorturl.at/jBEPW" target="_blank">🔗 Սեղմել այստեղ</a>
            <p>#Actual #ActualHRAgency #hrmanagement #HR #hrcourse #դասընթաց</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 15,
        imgUrl: image15,
        alt: "15",
        textDescriptionComponent: <>
            <p>Այսօր, առավել քան երբևէ, կարևոր է գործատուի բրենդավորումն աշխատաշուկայում 🤝💼</p>
            <p>Գործատուի բրենդավորումն օգնում է վերջինիս ճիշտ դիրքավորվել աշխատաշուկայում նպատակային լսարանի մոտ 🎯</p>
            <p>Կառուցել հարաբերություններ, տարածել կորպորատիվ մշակույթն ու այն արժեքները, որոնք կրում է բիզնեսը՝ ստեղծելով ցանկալի գործատուի կերպար և իմիջ նախկին, ներկա և ապագա աշխատակիցների համար 👩‍💼</p>
            <p>𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ին կօգնի Ձեզ գրագետ ներկայանալ աշխատաշուկայում և ստեղծել Ձեր ընկերության ցանկալի կերպարը 👈</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 16,
        imgUrl: image16,
        alt: "16",
        textDescriptionComponent: <>
            <p>📣 𝟳 կետ Ձեր 𝗖𝗩-ում, որոնց ուշադրություն է դարձնում 𝗛𝗥 մասնագետը</p>
            <p>𝗛𝗥 մասնագետները երբեմն ժամանակի սղությամբ և իրենց տարիների փորձով պայմանավորված ստիպված են որդեգրել որոշակի սկզբունքներ և առաջնորդվել դրանցով՝ տասնյակ կամ անգամ հարյուրավոր ռեզումեներից արագ և ճիշտ ընտություն կատարելու համար 🔎</p>
            <p>👉 Ներկայացնում ենք Ձեզ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 ընկերության փորձառու 𝗛𝗥 մասնագետներից մեկի մոտեցումը այդ հարցում, ով կիսվում է իր փորձով և նշում այն 𝟳 հիմնական կետերը, որոնց ինքն ուշադրություն է դարձնում ռեզումեները դիտարկելիս․ ⤵️</p>
            <p className="mb-0">1️⃣ ՎԵՐՋԻՆ ԱՇԽԱՏԱՆՔԸ</p>
            <p>𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸-ի 𝗛𝗥 մասնագետը նշում է, որ սա իր համար թերևս ամենակարևոր կետն է։ Շատ կարևոր է հասկանալ, թե ինչու է թեկնածուն թողել իր վերջին աշխատատեղը, հեռացել է սեփական ցանկությամբ, թե՝ ոչ, որքան երկար է աշխատել և ինչ գործառույթներ է իրականացրել։</p>
            <p className="mb-0">2️⃣ ԸՆԿԵՐՈՒԹՅԱՆ ՃԱՆԱՉԵԼԻՈՒԹՅՈՒՆԸ</p>
            <p>Թեկնածուի մասնագիտական որակների մասին կարող է վկայլել նաև այն ընկերության անունը, որտեղ նա աշխատել է։ Եթե նախկին աշխատատեղերի ցանկում կա հայտնի աշխատավայր, դա արդեն իսկ թեկնածուին տալիս է հավելյալ առավելություն մյուս դիմորդների նկատմամբ։</p>
            <p className="mb-0">3️⃣ ՄԱՍՆԱԳԻՏԱԿԱՆ ՓՈՐՁԱՌՈՒԹՅՈՒՆԸ</p>
            <p>Շատ կարևոր է հասկանալ, թե արդյոք թեկնածուն ունեցել է մասնագիտական աճ նախկինում, թե ոչ։ Արդյոք նրա ամեն հաջորդ աշխատանքը նախորդից առավել պատասխանատու ու բարձր է եղել, ինչ խնդիրներ են դրվել նրա առջև։</p>
            <p className="mb-0">4️⃣ ԲԱՆԱԼԻ ԲԱՌԵՐ</p>
            <p>Եթե 𝗛𝗥 մասնագետը փնտրում է որոշակի հմտություններով թեկնածու, օրինակ ծրագրավորող կամ գրաֆիկ դիզայներ, ապա նա կարող է ուշադրություն չդարձնել տվյալ թեկնածուի կազմակերպչական հմտությունների վրա, փոխարենը՝ ստուգել վերջինիս ծրագրային իմացությունները։</p>
            <p className="mb-0">5️⃣ ԱՇԽԱՏԱՆՔԱՅԻՆ ԴԱԴԱՐՆԵՐ</p>
            <p>Սա թերևս 𝗛𝗥 մասնագետին ամենաշատն է անհանգստացնում։ Եթե, օրինակ, 2 աշխատանքների միջև կա մի քանի տարվա դադար, ապա դա կարող է մտահոգիչ լինել։ Եթե անգամ աշխատել են ֆրիլանս տարբերակով կամ փորձել եք սեփական բիզնեսը հիմնել, կամ պարզապես գտնվել եք ֆիզարձակուրդում, միանշանակ անհրաժեշտ է այդ մասին նշել 𝗖𝗩-ում։</p>
            <p className="mb-0">6️⃣ ՁԵՐ ՆԵՐԿԱՅԱՑՎԱԾՈՒԹՅՈՒՆԸ ՍՈՑԻԱԼԱԿԱՆ ՑԱՆՑԵՐՈՒՄ 🤳</p>
            <p>Սոցիալական ցանցերի Ձեր էջերը կարող են Ձեր մասին ավելին պատմել, քան Ձեր ռեզումեն։ Համոզված եղեք, որ գործատուներից շատերը նախքան հարցազրույցն ուսումնասիրում են նաև Ձեր սոց․էջերը 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸-ում կամ 𝗟𝗶𝗻𝗸𝗲𝗱𝗶𝗻-ում։ Այնպես որ, քան դիմելը որևէ հաստիքի համար՝ կարգի բերեք Ձեր սոց․էջերը ևս։</p>
            <p className="mb-0">7️⃣ 𝗖𝗩-Ի ԱՐՏԱՔԻՆ ՏԵՍՔԸ</p>
            <p>Գրագետ կազմված, առանց ուղղագրական սխալների և առավել հստակ ու պարզ․ Հենց այդպիսին պետք է լինի ճիշտ կազմված 𝗖𝗩-ին 📑</p>
            <p>Սրանք այն կետերն են, որոնց խորհուրդ է տալիս հետևել 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸-ի 𝗛𝗥 մասնագետը 😉</p>
            <p>#hrmanagement #HR #ActualHRblog</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 17,
        imgUrl: image17,
        alt: "17",
        textDescriptionComponent: <>
            <p>🚀 Մեր փորձառու թիմը կկարգավորի ձեր ընկերության խնդիրները</p>
            <p className="mb-0">👉 Մեզ հետ այլևս չեք ունենա 𝐇𝐑 մասնագետի խնդիր</p>
            <p className="mb-0">👉 Ձեզ կգոհացնեն ձեր աշխատակիցների կատարած աշխատանքները</p>
            <p className="mb-0">👉 Չեք ունենա ժամկետների խնդիր ռեսուրսի պակասի պատճառով</p>
            <p className="mb-0">👉 Չեք ունենա խնդիրներ կորպորատիվ մշակույթի բացակայության պատճառով</p>
            <p>👉 Ձեր թիմը կլինի համախմբված և իհարկե մոտիվացված</p>
            <p>🚀 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ի հետ բոլոր խնդիրները լուծելի են</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 18,
        imgUrl: image18,
        alt: "18",
        textDescriptionComponent: <>
            <p>Հարցերի, համագործակցությունների և առաջարկների համար՝</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 19,
        imgUrl: image19,
        alt: "19",
        textDescriptionComponent: <>
            <p>🚀 Մեր փորձառու թիմը պատրաստ է լուծելու ամենաբարդ ու անհնարին թվացող խնդիրները</p>
            <p>✅ Մեր 𝐇𝐑 մասնագետը ամիսներ շարունակ աշխատելու է ձեր բիզնեսի համար՝ 𝐈𝐍-𝐇𝐎𝐔𝐒𝐄 տարբերակով</p>
            <p className="mb-0">👉 Մեզ հետ այլևս չեք ունենա 𝐇𝐑 մասնագետի խնդիր</p>
            <p className="mb-0">👉 Ձեզ կգոհացնեն ձեր աշխատակիցների կատարած աշխատանքները</p>
            <p className="mb-0">👉 Չեք ունենա ժամկետների խնդիր ռեսուրսի պակասի պատճառով</p>
            <p className="mb-0">👉 Չեք ունենա խնդիրներ կորպորատիվ մշակույթի բացակայության պատճառով</p>
            <p className="mb-0">👉 Ձեր թիմը կլինի համախմբված և իհարկե մոտիվացված</p>
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
            <p>Մենք փոխում ենք մտածելակերպ ⚡️</p>
            <p>Սովորեցնում ենք լինել բիզնեսի կողքին և մտածել բիզնեսի մասին 🙌</p>
            <p>Ահա, թե ինչու՞ ընտրել 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ը 🙌</p>
            <p>𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ում, թե՛ սկսնակները, թե՛ մասնագետները հնարավորություն ունեն ստանալու մարդկային ռեսուրսների կառավարման պրակտիկ գիտելիքներ, որը միանշանակ նպաստելու է մասնագետի կայացմանը և բիզնեսի զարգացմանը 🙌📈</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 21,
        imgUrl: image21,
        alt: "21",
        textDescriptionComponent: <>
            <p>𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ի թիմը կկարգավորի բոլոր խնդիրները</p>
            <p className="mb-0">🫣 Ունեք 𝐇𝐑 մասնագետի խնդիր</p>
            <p className="mb-0">🫣 Ձեզ չի գոհացնում նրա կատարած աշխատանքը</p>
            <p className="mb-0">🫣 Չկա ոչ մի արդյունավետություն</p>
            <p className="mb-0">🫣 Առաջացել է ժամկետների խնդիր՝ ռեսուրսի պակասի պատճառով</p>
            <p className="mb-0">🫣 Թիմում առաջացել են խնդիրներ՝ կորպորատիվ մշակույթի բացակայության պատճառով</p>
            <p className="mb-0">🫣 Չկա համախմբվածություն</p>
            <p>🫣 Չկա մոտիվացիա</p>
            <p>🤩 Այս նորությունը քեզ կամ քո ընկերության համար է</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
    {
        id: 22,
        imgUrl: image22,
        alt: "22",
        textDescriptionComponent: <>
            <p>Այո՛, ճիշտ եք տեսնում 🙌🤍🥹</p>
            <p>1️⃣ տարի անվճար խորհրդատվություն կարող են ստանալ 𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ի բոլոր ուսանողները 🤝🫶🤝</p>
            <p>Գիտելիք ստանալը և այն կիրառելը պահանջում են մե՜ծ հմտություններ, և մենք ձեր կողքին կլինենք 1️⃣ տարի, որպեսզի հմտանաք և ամրապնդեք ձեր գիտելիքները 🙌</p>
            <hr />
            <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
            <p className="mb-0">🌐 Մեր հասցեն՝ Խանջյան 19</p>
        </>,
    },
];

const WithLoveNews = ({ openPreviewHandler }) => {

    return (
        <div className="rs-featured-news pt-70 pb-100 md-pt-76 md-pb-100 sm-pb-70">
            <div className="container-fluid">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle="Ծանոթացեք սպասվող նորություններին"
                    titleClass="title mb-40"
                    title="Սիրով՝ Ակտուալից"
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
    );
}

const WithLoveNewsWithPreview = withPreviewPopup(WithLoveNews);

export default WithLoveNewsWithPreview;