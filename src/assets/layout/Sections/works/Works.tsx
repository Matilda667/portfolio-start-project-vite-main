import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {Menu} from "../../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from '../../../images/project1.webp'
import timerImg from '../../../images/Rectangle-2.webp'


const worksItems = ["All", "landing page", "React", "SPA"]
export const Works = () => {
    return (
        <StyledWorks>
<SectionTitle>Projects</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Project Name"}
                      text={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."}
                      src={socialImg}/>
                <Work title={"Project Name"}
                      text={"What was your role, your deliverables, if the project was personal, freelancing."}
                      src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
min-height: 100vh;
    background-color: palegreen;
`