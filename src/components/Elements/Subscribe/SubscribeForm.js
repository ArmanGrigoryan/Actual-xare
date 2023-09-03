import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://rstheme.us16.list-manage.com/subscribe?u=b07284c0016b6ff3084de6551&id=292fe5312b";

const CustomForm = () => (
    <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
        <div>
            <div>
                <input type="email" placeholder="Էլ․ փոստ" />
                <button>Ուղարկել</button>
            </div>

            {status === "sending" && <div style={{ color: "blue" }}>ուղարկում...</div>}
            {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: "Անհաջող փորձ"}}/>}
            {status === "success" && <div style={{ color: "green" }}>Դուք բաժանորդագրված եք!</div>}
        </div>
        )}
    />
)

export default CustomForm;