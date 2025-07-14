import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import MedicalPortfolioDetails from '../components/medical-portfolio-details';
import ItPortfolioDetails from '../components/it-portfolio-details';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Portfolio Details"} />
            <ItPortfolioDetails/>
        </Wrapper>
    );
};

export default index;