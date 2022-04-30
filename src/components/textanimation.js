
import React from "react";
import styled ,{keyframes} from "styled-components";

export default function TextAnimation() {

    let reactarray = "React".split("");

    reactarray = reactarray.map((item, index) => {
        return <span key={index} className="dev">{item}</span>
       
    });
    return(
        <Wrapper>{reactarray}
        </Wrapper>
    )
};

const animation = keyframes`
    0% {opacity: 0;}
    25% {opacity: 1;}
    75% {opacity: 1;}
    100% {opacity: 0;} 
    `;



const Wrapper = styled.span`
display: inline-block;
span{
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}

span:nth-child(1){
    animation-delay: 0.3s;
}
span:nth-child(2){
    animation-delay: 0.6s;
}
span:nth-child(3){
    animation-delay: 0.9s;
}
span:nth-child(4){
    animation-delay: 1.2s;
}
span:nth-child(5){
    animation-delay: 1.5s;
}


`;


