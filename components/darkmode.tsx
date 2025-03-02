'use client';

import "./darkmode.css";
import { useState } from "react";

export default function Darkmode() {
    const [toggled, setToggled] = useState<boolean>(true);

    return (
        <div className="switch">
            <div className={`switch-container ${toggled ? "switch-container-active" : ""} text-white`} onClick={() => setToggled(!toggled)}>
                <div className="toggle-dark-btn">
                </div>
            </div>
        </div>
    )
}