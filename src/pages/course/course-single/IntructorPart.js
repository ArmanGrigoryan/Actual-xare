import React from 'react';
import teamImg1 from '../../../assets/img/team/3.jpg';
import useFade from '../../../utils/hooks/useFade';

const InstructorPart = () => {
    const { refElement: animateRef } = useFade(false);

    return (
        <div className="content pt-30 pb-30 pl-30 pr-30 white-bg" ref={animateRef}>
            <div className="rs-team style1 orange-color transparent-bg clearfix d-flex gap-4">
                <div className="col-lg-6 col-md-6 col-sm-12 sm-mb-30">
                    <div>
                        <img src={teamImg1} alt="" className="radius-12" />
                    </div>
                </div>

                <div className="instructor col-lg-6 col-md-6 col-sm-12 sm-mb-30">
                    <h2 className="instructor-title">Լաուրա Վիրաբյան</h2>
                    <h5 className="instructor-subtitle">Ավագ ՄՌԿ մասնագետ</h5>

                    <ul>
                        <li>ՀՊՏՀ ի Կառավարում ֆակուլտետի «Պետական և մունիցիպալ կառավարում» մասնագիտության մագիստրոսի աստիճան</li>
                        <li>Եվրազիա միջազգային համալսարանի Օտար լեզուների ֆակուլտետի «Անգլերեն լեզվի ուսուցիչ և թարգմանիչ» մասնագիտության բակալավրի աստիճան</li>
                        <li>Մասնակցել է միջազգային տարբեր դասընթացների կառավարման հիմունքների վերաբերյալ և ունի բազմաթիվ հավաստագրեր անձնակազմի կառավարման վերաբերյալ</li>
                        <li>AIHR ակադեմիայի որակավորում ստացած մասնագետ</li>
                        <li>Ունի աշխատանքային փորձ ՀՀ ում 4000 և ավելի աշխատակից ունեցող կազմակերպության Մարդկային ռեսուրսների կառավարման տնօրենի</li>
                        <li>Պետական հատվածից մինչև հիմնադրամային հատված, ՄՌ կառավարման աշխատանքային փորձ ավելի քան 15 տարվա</li>
                        <li>Գործք ընկերության Մարդկային ռեսուրսների կառավարում դասընթացի դասախոս 2017-2019թթ</li>
                        <li>ՀՀ պետական կառավարման ակադեմիայի «ՄՌ կառավարման պրակտիկ գործիքակազմը» առարկայի դասախոս 2019թ առ այսօր</li>
                        <li>Բազմաթիվ կոնֆերանսներին, որպես խոսնակ հանդես գալու փորձ</li>
                        <li>Ակտուալ ՍՊԸ ի հիմնադիր տնօրեն</li>
                    </ul>
                </div>

            </div>  
        </div>
    );
}

export default InstructorPart;