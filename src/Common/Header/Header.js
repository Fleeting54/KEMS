import React from 'react'
import {HeadBar, HeadText, LinkBar, LinkItem, StyledLink} from './HeaderStyles'
import {Link} from 'react-router-dom'

export default function Header(props){

    const [value, setValue] = React.useState(0);
    const tabs = [
        {link:'/',text:"Home"}, {link:'/about',text:"About Us"}, {link:'/gallery',text:"Gallery"}, {link:'/reviews',text:"Reviews"}, {link:'/services',text:"Services"}, {link:'/contact',text:"Contact Us"}]

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      return (
          <React.Fragment>
              <HeadBar>
            <HeadText>
                KE MAINTENANCE SERVICES
            </HeadText>
            </HeadBar>
          <LinkBar

          >

            {tabs.map((tab, tabindex)=>
                (<LinkItem>
                    <StyledLink to={tab.link}>
                        {tab.text}
                        </StyledLink>
                    
                </LinkItem>)
                )}
          </LinkBar>
          </React.Fragment>
      );
}