import {Icon} from "../../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string


}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <StillTitle>{props.title}</StillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
width: 30%;
  background-color: cornsilk;  
    margin: 10px;
    
`

const StillTitle = styled.h3``

const SkillText = styled.p``