import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import PortfolioDetails from '../components/portfolio-details';
import It_PortfolioDetails from '../components/it-portfolio-details';
import MedicalPortfolioDetails from '../components/medical-portfolio-details';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Portfolio Details"} />
            <MedicalPortfolioDetails/>
        </Wrapper>
    );
};

export default index;