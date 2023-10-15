import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const Faq = () => {
    const location = useLocation();
    const faqElement = useRef();

    useEffect(() => {
        if (location.hash === "#faq") faqElement.current.scrollIntoView({
            behavior: "smooth"
        });
    }, [location.hash])

    return (
        <div ref={faqElement} id="faq" className="rs-faq-part style1 pt-90 pb-100 md-pt-70 md-pb-80">
            <div className="container">
                <div className="main-part innerpage">
                    <div className="faq-content mb-50 md-mb-30">
                        <h2 className='text-center mb-50'>Հաճախ տրվող հարցեր</h2>
                        <div className="title mb-30 md-mb-14">
                            <h3 className="text-part">Himnakan</h3>
                        </div>
                        <Accordion className="accordion-style1" preExpanded={'a'}>
                            <AccordionItem className="accordion-item" uuid="a">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Inchpes karox enq gracnvel?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Patasxan 1
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="b">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Inch e HR-@?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Patasxan 2
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="c">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Vortex e kentron@?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Patasxan 3
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="d">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Erb karox enq sksel?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis partu rient to montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu, pretium quis,pede justo, of fringilla vel, aliquet nec, ultricies nec, pellen of the tesque services Donec quam felis, ultricies nec, pellentesque eu
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="faq-content mb-50 md-mb-30">
                        <div className="title mb-30 md-mb-14">
                            <h3 className="text-part">Erkrordakan</h3>
                        </div>
                        <Accordion className="accordion-style1" preExpanded={'a'}>
                            <AccordionItem className="accordion-item" uuid="a">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        What if I have an emergency?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Hematology, also spelled haematology, is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="b">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        What if my regular doctor is unavailable?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Hematology, also spelled haematology, is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="c">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        What is the transfer application process?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Hematology, also spelled haematology, is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="d">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        What should I bring to my first appointment?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    Hematology, also spelled haematology, is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood. It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation.
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="faq-content mb-50 md-mb-30">
                        <div className="title mb-30 md-mb-14">
                            <h3 className="text-part">High School</h3>
                        </div>
                        <Accordion className="accordion-style1" preExpanded={'a'}>
                            <AccordionItem className="accordion-item" uuid="a">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        How does the normal heart work?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, blood flows into the lower two chambers (called ventricles) which pump blood with each heart beat, into the main arteries.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="b">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        What are the heart valves?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="c">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Can a child acquire a heart problem?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="d">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        What is heart education?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, blood flows into the lower two chambers (called ventricles) which pump blood with each heart beat, into the main arteries.
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="faq-content">
                        <div className="title mb-30 md-mb-14">
                            <h3 className="text-part">College/University</h3>
                        </div>
                        <Accordion className="accordion-style1" preExpanded={'a'}>
                            <AccordionItem className="accordion-item" uuid="a">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        What are the requirements ?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="b">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        Does Educavo offer free courses?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="c">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        What is the transfer application process?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className="accordion-item" uuid="d">
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="card-link">
                                        What is distance education?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="card-body">
                                    The normal heart is composed of four chambers. The two upper chambers (called atriums or atria) are reservoirs which collect blood as it flows back to the heart. From the atriums, blood flows into the lower two chambers (called ventricles) which pump blood, with each heart beat, blood flows into the lower two chambers (called ventricles) which pump blood into the main arteries.
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;