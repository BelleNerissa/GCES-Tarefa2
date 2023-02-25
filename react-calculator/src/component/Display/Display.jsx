import React from "react";
import "./Display.css";

export const Display = ({ value }) => {
    return (
        <div className="componet-display">
            {console.log('passei aqui')}
            <div>{value}</div>
        </div>
    );
}