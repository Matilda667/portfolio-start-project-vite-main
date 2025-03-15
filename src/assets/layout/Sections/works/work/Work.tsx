import styled from "styled-components";

type WorkPropsType ={
title: string
    text: string
    src: string
}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>View Project</Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
background-color: mediumvioletred;
   max-width: 496px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 524px;
    object-fit: cover;
`

const Link = styled.a`
`

const Title = styled.h3``

const Text = styled.p``