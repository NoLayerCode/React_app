import React from "react";
import "./styles.css";

import Button from "./Button";


const App = () => {
    return (
        <div>
            <h1> Hellow World </h1>
            <Button tittle ="App"/>
            <Button tittle ="Play"/>
            {/* <button className="button">Play Store</button>
            <button className="button">App Store</button> */}
        </div>
    );
};


export default App;