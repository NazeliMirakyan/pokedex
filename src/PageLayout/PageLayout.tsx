import React from "react";
import Head from "next/head";

import { Data } from "./type";

const PageLayout: React.FC<Data> = ({ children, title, metaDescription }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Head>
    <main>{children}</main>
  </>
);

export default PageLayout;
