import React from 'react'
import {MainContent,Artical, PageHeading, PageTag, PageText} from '../../Constants/GlobalStyles'

export default function About(prop){
return(
    <MainContent>
        <Artical>
            <PageHeading>
                About Us
            </PageHeading>
            <PageTag>
                About Us
            </PageTag>
            <PageText>
            KE Maintenance Services is a local family owned business that was formed over 5 years ago.

Kris has over 13 years of experience in the industry so we are sure that we can fix any of your problems. From concreting to the roof and everything in between, we can fix your issues.

So if there is something that is not quite right, give a call to Kris as we can usually give you a quote over the phone. We also offer a no obligation, free quote service.

So contact us now to find out more
            </PageText>
        </Artical>
    </MainContent>
)
}