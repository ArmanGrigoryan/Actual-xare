import React, { useRef, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://rstheme.us16.list-manage.com/subscribe?u=b07284c0016b6ff3084de6551&id=292fe5312b";

const CustomForm = () => {
    const [disabled, setDisabled] = useState(false);
    const inputRef = useRef();

    const clickHandler = (submitHandler) => () => {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const value = inputRef.current.value.trim();

        if (!value || !pattern.test(value)) return;

        submitHandler({ email: inputRef.current.value });

        const body = JSON.stringify({
            filters: {
                toEmail: value
            }
        });

        fetch("http://localhost:8000/send-mail", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body
        })
            .finally(() => setDisabled(true))
    }

    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status }) => (
            <div>
                <div>
                    <input 
                        type="email"
                        placeholder="Էլ․ փոստ"
                        ref={inputRef}
                        disabled={disabled}
                    />
                    <button 
                        // disabled={disabled} 
                        onClick={clickHandler(subscribe)}
                    >
                        { status ? "Շնորհակալություն!" : "Ուղարկել" }
                    </button>

                </div>
            </div>
            )}
        />
    );
}

export default CustomForm;