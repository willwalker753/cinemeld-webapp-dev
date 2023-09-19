import React from "react";
import "./circle.css";

// Based on: https://www.cssscript.com/pure-css-circular-percentage-bar/

const CircleProgressChart = ({
    percent=70,
    label="7.0"
}) => {
    return (
        <div className="circle-progress-chart">
            <div className={`c100 p${percent}`}>
                <span>{label}</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
        </div>
    )
}

export default CircleProgressChart;