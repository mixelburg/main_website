import React from 'react';
import MainNavBar from "./Main/MainNavBar";
import MainBody from "./Main/MainBody";
import Background from "./Background/Background";

const App: React.FC = () => {


    return (
        <>
            <MainNavBar/>

            <MainBody/>

            <Background/>
        </>
    );
}

export default App;
