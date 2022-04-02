import styled from "styled-components";
import Image from "next/image";
import { animated, useTransition, config } from "react-spring";
import useScrollTo from "react-spring-scroll-to-hook";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { Margin } from "../../styles/globalSC";

const Hero = () => {
    const { scrollTo }: any = useScrollTo(config.slow);

    const socials = [
        {
            name: "facebook",
            icon: <FaFacebook />,
            url: "https://www.facebook.com/kallooenglishschool-107130884976780",
        },
        {
            name: "instagram",
            icon: <FaInstagramSquare />,
            url: "https://www.instagram.com/kallooenglishschool/",
        },
        // {
        //     name: "youtube",
        //     icon: <FaYoutube />,
        //     url: "/icons/youtube.svg",
        // },
    ];

    return (
        <Section>
            <Margin>
                <W>
                    <Text>
                        <h3>
                            <span>KALLOO</span> - english school
                        </h3>
                        <Image
                            src="/Kalloo-Symbol.svg"
                            width="50"
                            height="50"
                            alt="logo da escola Kalloo"
                        />
                        <h1>
                            Dê <span>&apos;match&apos;</span> com o professor de
                            inglês
                            <br />
                        </h1>
                        <h2>
                            A Kalloo é a primeira escola de inglês do Brasil com
                            a proposta de oferecer um curso totalmente focado na
                            experiência do aluno, com material inteligente e
                            acompanhamento 100% humanizado.
                        </h2>
                        <CTA>
                            <div
                                data-test="contact-button"
                                onClick={() =>
                                    scrollTo(document.querySelector("#Contact"))
                                }
                            >
                                Entre em contato!
                                <MdOutlineArrowForwardIos />
                            </div>
                        </CTA>
                    </Text>

                    {/*                     <Background
                        src="/Kalloo-Symbol.svg"
                        alt="rapazes na escola restudando e recebendo aulas de inglês"
                    /> */}
                    <Background
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                        alt="rapazes na escola restudando e recebendo aulas de inglês"
                    />
                </W>
                <Social>
                    {socials.map(({ name, icon, url }, index) => (
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                        >
                            {icon}
                        </a>
                    ))}
                </Social>
            </Margin>
        </Section>
    );
};

export default Hero;

const Section = styled.section`
    width: 100vw;
    min-height: 100vh;
    padding: 70px 20px 0px;

    background-image: linear-gradient(
        165deg,
        hsla(50, 100%, 100%, 1) 50%,
        hsla(260, 23%, 80%, 1)
    );

    display: flex;
    align-items: center;
`;
const W = styled.div`
    width: 100%;
    height: 100%;
    // padding-top: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    // background: url("/Kalloo-Symbol.svg") no-repeat;
    // background-position: right center;
`;

const Text = styled.div`
    // flex: 1 1 350px;
    width: 100%;
    max-width: 650px;
    min-width: 200px;
    margin: 35px 15px 35px;

    // background: hsla(0, 0%, 100%, 0.5);
    backdrop-filter: blur(10px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    img {
        filter: drop-shadow(-1px 1px 3px hsla(280, 100%, 30%, 0.7));
        padding: 20px;
        display: none !important;
    }

    h1 {
        margin: 0px 0px 32px -3px;
        font-size: clamp(45px, 9vw, 62px);
        color: #65009c;
        // font-weight: bold;
        // line-height: 1.5em;
        // letter-spacing: 6px;

        span {
            color: transparent;
            color: hsla(335, 100%, 50%, 1);
            font-weight: bold;
            background-image: linear-gradient(
                0deg,
                #65009c 20%,
                hsla(335, 100%, 50%, 1),
                hsla(45, 100%, 50%, 1) 80%
            );
            background-clip: text;
            -webkit-background-clip: text;
        }
    }

    h2 {
        width: 88%;
        font-size: 20px;
        font-weight: 300;

        padding-left: 14px;
        text-align: justify;
        margin: 0px 0px 40px;

        line-height: 1.2em;
        color: hsla(335, 0%, 30%, 1);
        border-left: 4px solid hsla(335, 100%, 50%, 1);

        // background: #fcd545;
    }
    h3 {
        font-size: 16px;
        margin: 0px 0px 25px;
        font-weight: bold;
        span {
            font-weight: bold;
            // font-size: 16px;
        }

        color: hsla(280, 100%, 30%, 1);
    }
`;
const Background = styled.img`
    flex: 1 1 350px;
    width: 0%;
    height: 50vh;
    margin: 0px auto;
    box-shadow: 4px 4px 20px hsla(0, 0%, 0%, 0.5);
    object-fit: cover;
    border-radius: 10px;
    opacity: 1;
    z-index: 2;

    // filter: brightness(190%) grayscale(50%) contrast(70%);
`;

const CTA = styled.div`
    width: 80vw;
    max-width: 300px;
    div {
        padding: 25px 0px;
        margin: 0px 0px 0px -8px;
        font-size: 16px;
        text-align: center;
        font-weight: 200;

        color: hsla(279, 100%, 100%, 1);
        background: hsla(335, 100%, 50%, 1);
        // background-image: linear-gradient(
        //     0deg,
        //     #65009c,
        //     hsla(335, 100%, 50%, 1),
        //     hsla(45, 100%, 50%, 1)
        // );
        cursor: pointer;
        border-radius: 30px;
        box-shadow: 2px 2px 15px hsla(279, 0%, 31%, 0.5);

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            margin: 0px 4px;
        }
    }
`;

const Social = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 15px;

    display: flex;
    // justify-content: end;

    a {
        margin: 0px 20px 0px 0px;

        // border: 2px solid black;
        // border-radius: 5px;

        // background: #65009c;
        img {
            // filter: grayscale(100%);
            // mix-blend-mode: luminosity;
        }

        svg {
            width: 35px;
            height: 35px;
            fill: #65009c;
        }
    }
`;
