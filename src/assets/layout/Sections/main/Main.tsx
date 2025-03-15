import styled from "styled-components";
import photo from '../../../images/image.jpg'
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
            <div>
                <MainTitle>Software Developer</MainTitle>
                <Name>Hello,  my name is Maria Nikolaienko</Name>
                <MainText>Short text with details about you, what you do or your professional career. You can add more information on the about page.</MainText>
            </div>
            <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const  StyledMain = styled.div`
    min-height: 100vh;
    background-color: #f68579;
`

const  Photo = styled.img`
width: 720px;
height: 630px;
    object-fit: cover;
`
const MainTitle = styled.h1``

const Name = styled.h2``

const MainText = styled.p``
