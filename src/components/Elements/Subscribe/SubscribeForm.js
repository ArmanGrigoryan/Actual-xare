import { useRef } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://rstheme.us16.list-manage.com/subscribe?u=b07284c0016b6ff3084de6551&id=292fe5312b";

const CustomForm = () => {
    const inputRef = useRef();

    const clickHandler = (submitHandler) => () => {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const value = inputRef.current.value.trim();

        if (!value || !pattern.test(value)) return;

        submitHandler({ email: inputRef.current.value });
    }

    return (
        <MailchimpSubscribe
            url={url}
            render={({ subscribe, status }) => (
            <div>
                <div>
                    <input type="email" placeholder="Էլ․ փոստ" ref={inputRef} />
                    <button disabled={status} onClick={clickHandler(subscribe)}>
                        { status ? "Ուղարկված է!" : "Ուղարկել" }
                    </button>
                </div>
            </div>
            )}
        />
    );
}

export default CustomForm;