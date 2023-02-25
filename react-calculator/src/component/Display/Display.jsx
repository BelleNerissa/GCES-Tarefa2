import React from "react";
import "./Display.css";

export const Display = ({ value }) => {
    return (
        <div className="componet-display">
            <div>{value}</div>
        </div>
    );
}