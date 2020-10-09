import React from "react";
import Form from "../components/form"


import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="">
        <Form/>   
      </section>
    </Layout>
  );
}

export default IndexPage;
