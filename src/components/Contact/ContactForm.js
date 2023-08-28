import React from 'react';

const ContactForm = (props) => {
    const { submitBtnClass, btnText } = props;
    return (
        <form id="contact-form" action="#">
            <div className="row">
                <div className="col-md-6 mb-30">
                    <input className="from-control" type="text" id="name" name="name" placeholder="Անուն" required />
                </div>

                <div className="col-md-6 mb-30">
                    <input className="from-control" type="text" id="email" name="email" placeholder="Էլ. փոստ" required />
                </div>

                <div className="col-md-6 mb-30">
                    <input className="from-control" type="text" id="phone" name="phone" placeholder="Հեռ." required />
                </div>

                <div className="col-md-6 mb-30">
                    <input className="from-control" type="text" id="website" name="website" placeholder="Ձեր կայքը" required />
                </div>

                <div className="col-12 mb-30">
                    <textarea className="from-control" id="message" name="message" placeholder="Ձեր հաղորդագրությունը" required></textarea>
                </div>
            </div>
            <div className="btn-part">
                <button className={submitBtnClass ? submitBtnClass : 'readon learn-more submit'} type="submit">{btnText ? btnText : 'Submit Now'}</button>
            </div>
        </form>
    );

}

export default ContactForm;