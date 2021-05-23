import React from 'react';
import MainNavBar from "./Main/MainNavBar";
import MainBody from "./Main/MainBody";
import Background from "./Background/Background";
import ScrollUp from "./util/ScrollUp";

const App: React.FC = () => {
    return (
        <>
            <MainNavBar/>

            <MainBody/>

            <Background/>

            <ScrollUp/>
        </>
    );
}

export default App;
