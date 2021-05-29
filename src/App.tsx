import React from 'react';
import MainNavBar from "./Main/MainNavBar";
import MainBody from "./Main/MainBody";
import Background from "./Background/Background";
import ScrollUp from "./util/ScrollUp";
import MainFooter from "./Main/MainFooter";

const App: React.FC = () => {
    return (
        <>
            <MainNavBar/>

            <MainBody/>

            <MainFooter/>

            <Background/>

            <ScrollUp/>
        </>
    );
}

export default App;
