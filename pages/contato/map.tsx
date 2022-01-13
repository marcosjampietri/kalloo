import styled from "styled-components";

const Map = () => {
    return (
        <Google>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28872.507260894465!2d-46.64578941548773!3d-23.60177493306341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2ea7889029%3A0x4082ce660c9f6a4!2sShopping%20Metro%20Santa%20Cruz!5e0!3m2!1sen!2suk!4v1642081410125!5m2!1sen!2suk"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </Google>
    );
};

export default Map;

const Google = styled.div`
    width: 100vw;
    height: 500px;
    margin: 0px auto;

    iframe {
        box-shadow: inset 2px 2px 20px red;
        width: 100%;
        height: 100%;
    }
`;
