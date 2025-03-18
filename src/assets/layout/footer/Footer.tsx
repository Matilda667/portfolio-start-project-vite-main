import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
           <Name>Maria</Name>
           <SocialList>
               <SocialItem>
                   <SocialLink>
                       <Icon height={"48px"} width={"48px"} viewBox={"0 0 48px 48px"} iconId={"instagram"}/>
                   </SocialLink>
               </SocialItem>

               <SocialItem>
                   <SocialLink>
                       <Icon height={"48px"} width={"48px"} viewBox={"0 0 48px 48px"} iconId={"linkedin"}/>
                   </SocialLink>
               </SocialItem>

               <SocialItem>
                   <SocialLink>
                       <Icon height={"48px"} width={"48px"} viewBox={"0 0 48px 48px"} iconId={"email"}/>
                   </SocialLink>
               </SocialItem>
           </SocialList>
            <Copyright>Madelyn Torff 2021 </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
background-color: darkkhaki;
    min-height: 20vh;
`


const Name = styled.span `

`

const SocialList = styled.ul `
display: flex;
    gap: 30px;
    
`

const SocialLink = styled.a `

`

const Copyright = styled.small `

`

const SocialItem = styled.li`
`