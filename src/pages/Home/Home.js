import React from 'react'
import {MainContent,Artical, PageHeading, PageTag, PageText} from '../../Constants/GlobalStyles'

export default function Home(props){
return(
    <MainContent>
        <Artical>
        <PageHeading>HOME</PageHeading>
        <PageTag>Offering Maintenance services in Point Cook and more</PageTag>
        <PageText>KE Maintenance Services is a local company that services the greater Point Cook area. 
            For any quotes please contact Kris on 0403003320 or email <a href={"mailto:info@kems.com.au"}>info@kems.com.au</a></PageText>
        </Artical>
    </MainContent>
)
}