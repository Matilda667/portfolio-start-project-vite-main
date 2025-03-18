import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {Button} from "../../../../components/Button.tsx";


export const Slogan = () => {
    return (
        <StyleSlogan>
<SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyleSlogan>
    );
};

const StyleSlogan = styled.section`
min-height: 30vh;
    background-color: darkorchid;
    
`