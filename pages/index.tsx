import React from "react";
import HomeContainer from "~/containers/HomeContainer/HomeContainer";
import PageLayout from "~/PageLayout/PageLayout";

const Home: React.FC = () => {
  return (
    <PageLayout title="Pokemon" metaDescription="some description">
      <HomeContainer />
    </PageLayout>
  );
};

export default Home;
