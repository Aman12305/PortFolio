
import React from "react";
import styled ,{keyframes} from "styled-components";

export function CreateIcon({data})
{
    const image = <img src={data.img} className={`icons-skills skillsimg ${data.name}`} alt={data.alt}></img>
    const animation = keyframes`
    0% {transform: translateY(${data.ty0}) translateX(${data.tx0}) scale(${data.scale0});}
    50% {transform: translateY(${data.ty50_1}) translateX(${data.tx50_1}) scale(${data.scale50_1}) ;}
    50% {transform: translateY(${data.ty50_2}) translateX(${data.tx50_2}) scale(${data.scale50_2});}
    50% {transform: translateY(${data.ty50_3}) translateX(${data.tx50_3}) scale(${data.scale50_3});}
    100% {transform: translateY(${data.ty100}) translateX(${data.tx100}) scale(${data.scale100});} 
    `
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
    return (
        <div className="icons-skills">
            <Wrap>{image}</Wrap>
        </div>
    )
}

