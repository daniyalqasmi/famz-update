import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import Projects_area from "./projects-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const Software_web_development = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title=" Portfolio Details" />
        <Projects_area/>
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Software_web_development;
