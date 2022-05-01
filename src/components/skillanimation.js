
import React from "react";
import styled ,{keyframes} from "styled-components";

export default function Ccod() {

    const cimg = <img src="./img/c.png" id="" className="icons-skills" alt="c"></img>;
    
    return(
        <Wrap>{cimg}</Wrap>
        
    )
};

const animation = keyframes`
    0% {transform: translateY(0px) translateX(0px) scale(1);}
    50% {transform: translateY(50%) translateX(50%) scale(0.8) ;}
    50% {transform: translateY(75%) translateX(75%) scale(0.5);}
    50% {transform: translateY(50%) translateX(50%) scale(0.8);}
    100% {transform: translateY(0px) translateX(0px) scale(1);} 
    `;


const Wrap = styled.span`
display: inline-block;
img{
    display: inline-block;
    animation-name: ${animation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}
`;


export  function Ccpp() {

    const cppimg = <img src="./img/c++.png" id="" className="icons-skills c" alt="c++"></img>
    
    return(
        <Cpp>{cppimg}</Cpp>   
    )
};
const anicpp = keyframes`
    0% {transform: translateY(0px) translateX(0px) scale(1);}
    50% {transform: translateY(50%) translateX(0px) scale(0.8);}
    50% {transform: translateY(80%) translateX(0px) scale(0.5);}
    50% {transform: translateY(50%) translateX(0px) scale(0.8);}
    100% {transform: translateY(0px) translateX(0px) scale(1);}
    `;

const Cpp = styled.span`
display: inline-block;
img{
    display: inline-block;
    animation-name: ${anicpp};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}`;

export  function Cfire() {

    const cfire = <img src="./img/firebase.png" id="" className="icons-skills firebase" alt="firebase"></img>
    
    return(
        <Cfir>{cfire}</Cfir>   
    )
};

const anifir = keyframes`
    0% {transform: translateY(0px) translateX(0px) scale(1);}
    50% {transform: translateY(50%) translateX(-50%) scale(0.8);}
    50% {transform: translateY(80%) translateX(-80%) scale(0.5);}
    50% {transform: translateY(50%) translateX(-50%) scale(0.8);}
    100% {transform: translateY(0px) translateX(0px) scale(1);}
    `;

const Cfir = styled.span`
display: inline-block;
img{
    display: inline-block;
    animation-name: ${anifir};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}`;


export  function Chtml() {

    const chtml = <img src="./img/html.png" id="" className="icons-skills html" alt="html"></img>;
    
    return(
        <Chtm>{chtml}</Chtm>   
    )
};

const anihtml = keyframes`
    0% {transform: translateY(0px) translateX(0px) scale(1);}
    50% {transform: translateY(0px) translateX(50%) scale(0.8);}
    50% {transform: translateY(0px) translateX(80%) scale(0.5);}
    50% {transform: translateY(0px) translateX(50%) scale(0.8);}
    100% {transform: translateY(0px) translateX(0px) scale(1);}
    `;

const Chtm = styled.span`
display: inline-block;
img{
    display: inline-block;
    animation-name: ${anihtml};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}`;

export  function Ccss() {

    const ccss =  <img src="./img/css.png" id="" className="icons-skills css" alt="css"></img>;
    
    return(
        <Ccs>{ccss}</Ccs>   
    )
};

const anicss = keyframes`
    0% {transform: translateY(0px) translateX(0px) scale(1);}
    50% {transform: translateY(-50%) translateX(50%) scale(0.8);}
    50% {transform: translateY(-80%) translateX(80%) scale(0.5);}
    50% {transform: translateY(-50%) translateX(50%) scale(0.8);}
    100% {transform: translateY(0px) translateX(0px) scale(1);}
    `;

const Ccs = styled.span`
display: inline-block;
img{
    display: inline-block;
    animation-name: ${anicss};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}`;

export  function Cjs() {

    const cjs = <img src="./img/js.png" id="" className="icons-skills js" alt="js"></img>;
    
    return(
        <Cj>{cjs}</Cj>   
    )
};

const anijs = keyframes`
    0% {transform: translateY(0px) translateX(0px) scale(1);}
    50% {transform: translateY(-50%) translateX(0px) scale(0.8);}
    50% {transform: translateY(-80%) translateX(0px) scale(0.5);}
    50% {transform: translateY(-50%) translateX(0px) scale(0.8);}
    100% {transform: translateY(0px) translateX(0px) scale(1);}
    `;

const Cj = styled.span`
display: inline-block;
img{
    display: inline-block;
    animation-name: ${anijs};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}`;

export  function Cnode() {

    const cnode = <img src="./img/node.png" id="" className="icons-skills node" alt="node"></img>
    
    return(
        <Cnod>{cnode}</Cnod>   
    )
};

const aninode = keyframes`
    0% {transform: translateY(0px) translateX(0px) scale(1);}
    50% {transform: translateY(-50%) translateX(-50%) scale(0.8);}
    50% {transform: translateY(-80%) translateX(-80%) scale(0.5);}
    50% {transform: translateY(-50%) translateX(-50%) scale(0.8);}
    100% {transform: translateY(0px) translateX(0px) scale(1);}
    `;

const Cnod = styled.span`
display: inline-block;
img{
    display: inline-block;
    animation-name: ${aninode};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}`;

export  function Creact() {

    const creact =  <img src="./img/react.png" id="" className="icons-skills react" alt="react"></img>
    
    return(
        <Creac>{creact}</Creac>   
    )
};

const anireact = keyframes`
    0% {transform: translateY(0px) translateX(0px) scale(1);}
    50% {transform: translateY(0px) translateX(-50%) scale(0.8);}
    50% {transform: translateY(0px) translateX(-80%) scale(0.5);}
    50% {transform: translateY(0px) translateX(-50%) scale(0.8);}
    100% {transform: translateY(0px) translateX(0px) scale(1);}
    `;

const Creac = styled.span`
display: inline-block;
img{
    display: inline-block;
    animation-name: ${anireact};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}`;

export  function Cgithub() {

    const cgithub =  <img src="./img/github.png" id="" className="icons-skills github" alt="git"></img>
    
    return(
        <Cgit>{cgithub}</Cgit>   
    )
};

const anigit = keyframes`
    0% {transform: scale(0.6);}
    50% {transform: scale(0.8); }
    50% {transform: scale(1); }
    50% {transform: scale(0.8);}
    100% {transform: scale(0.6);}
    `;

const Cgit = styled.span`
display: inline-block;
img{
    display: inline-block;
    animation-name: ${anigit};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}`;
