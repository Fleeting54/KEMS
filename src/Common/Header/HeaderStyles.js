import styled from 'styled-components'
import {theme} from '../../Constants/Theme'
import {Link} from 'react-router-dom'

export const HeadBar = styled.div`
    width:100%;
    height:165px;
    background-color: ${theme.header.background};
    text-align: center;
`

export const HeadText = styled.p`
    margin: 0px;
    padding: 0px;
    font-size:30px;

`

export const LinkBar = styled.div`
    margin: 0px;
    padding: 0px;
    font-size:30px;
    text-align:center;
    background-color: ${theme.header.background};
    

`
export const LinkItem = styled.div`
    display: inline-block;
    width: 150px;
`

export const StyledLink = styled(Link)`
  color: Black;
  font-weight: bold;
  text-decoration: none;
`;