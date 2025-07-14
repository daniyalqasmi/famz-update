import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import It_ServiceArea from "./it-portfolio-details-area";

const ItPortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title=" Portfolio Details" />
        <It_ServiceArea/>
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default ItPortfolioDetails;
