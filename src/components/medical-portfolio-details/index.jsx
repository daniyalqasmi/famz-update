import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import It_ServiceArea from "./Medical-portfolio-details-area";
import Medical_ServiceArea from "./Medical-portfolio-details-area";

const MedicalPortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Medical Portfolio" page_title=" Portfolio Details" />
        <Medical_ServiceArea/>
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default MedicalPortfolioDetails;
