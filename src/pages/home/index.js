import React from "react";
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import Items from "../../components/items";

const Home = () => {

    return (
        <PageLayout>
            <Title title="Home" />
            <Items />
        </PageLayout>
    )
}

export default Home