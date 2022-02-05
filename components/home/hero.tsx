import styled from "styled-components";
import { animated, useTransition, config } from "react-spring";
import useScrollTo from "react-spring-scroll-to-hook";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Margin } from "../../styles/globalSC";

const Hero = () => {
    const { scrollTo }: any = useScrollTo(config.slow);
    return (
        <Section>
            <Margin>
                {/*             <Background src="https://images.unsplash.com/photo-1501349800519-48093d60bde0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" /> */}
                <W>
                    <Text>
                        <h1>
                            <span>KALLOO </span> English School <br />
                        </h1>
                        <h2>Dê &apos;match&apos; com o professor de inglês</h2>
                        <CAT>
                            <div
                                data-test="contact-button"
                                onClick={() =>
                                    scrollTo(document.querySelector("#Contact"))
                                }
                            >
                                Entre em contato agora mesmo!
                                <MdOutlineArrowForwardIos />
                            </div>
                        </CAT>
                    </Text>
                </W>
            </Margin>
        </Section>
    );
};

export default Hero;

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    padding: 0px 20px;

    background: linear-gradient(
        165deg,
        hsla(50, 100%, 100%, 1) 50%,
        hsla(220, 30%, 70%, 1) 100%
    );
`;
const W = styled.div`
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    h1 {
        margin: 0px 0px 10px;
    }
    h2 {
        font-weight: 300;
        margin: 0px;
        text-align: justify;
        margin: 0px 0px 20px;
        color: hsla(360, 0%, 50%, 1);
    }
    span {
        color: transparent;
        font-weight: bold;
        font-size: 37px;
        line-height: 1.5em;

        background: linear-gradient(
            90deg,
            rgba(90, 6, 165, 1) 0%,
            rgba(93, 48, 221, 1) 20%,
            rgba(55, 241, 116, 1) 40%,
            rgba(240, 250, 50, 1) 60%,
            rgba(238, 156, 51, 1) 80%,
            rgba(232, 47, 47, 1) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
    }
`;
const Background = styled.img`
    position: absolute;
    top: 110px;
    right: 10px;
    width: 500px;
    height: 500px;

    clip-path: circle(50% at 50% 50%);
`;

const CAT = styled.div`
    div {
        height: 70px;
        padding: 0px 20px;
        margin: 20px 0px 0px -8px;
        font-size: 12px;
        text-align: center;
        font-weight: 200;

        background: hsla(50, 100%, 60%, 1);
        cursor: pointer;
        border-radius: 30px;
        box-shadow: 2px 2px 10px hsla(0, 0%, 50%, 0.5);

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            margin: 0px 4px;
        }
    }
`;
