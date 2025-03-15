import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"js"} title={"js"} description={"lorem"}/>
                <Skill iconId={"react"} title={"react"} description={"lorem"}/>
                <Skill iconId={"css"} title={"css"} description={"lorem"}/>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
background-color: lightskyblue;
    min-height: 100vh;
`