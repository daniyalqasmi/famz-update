import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Projects_details from "../components/projects";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio"} />
      <Projects_details />
    </Wrapper>
  );
};

export default index;
