import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
  }
`

export const MainContent = styled.div`
  display: inline-block;
  text-align: center;
  width:100%;
`
export const Artical = styled.div`
  display: inline-block;
  text-align:left;
  padding: 60px;
  width:50%;
  
`

export const PageHeading = styled.h1`
  color: #272727;
  margin: 0px 0px 30px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 36px;
`

export const PageTag =styled.strong`
color: #656D6D;
font-family: 'Open Sans', sans-serif;
font-size: 14px;
`

export const PageText = styled.p`
color: #656D6D;
font-family: 'Open Sans', sans-serif;
font-size: 14px;
`