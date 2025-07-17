import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import PortfolioDetails from '../components/portfolio-details';
import Softandweb from '../components/it-services/[slug]/softandweb';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Software and Webdevelopment"} />
            <Softandweb/>
        </Wrapper>
    );
};

export default index;