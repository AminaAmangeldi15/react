import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"
export default function Navigation(){
    return (
        <header>
            <div>
                <div className="navigation-links">
                    <Link to="/"></Link>
                    <Link to="home">Home</Link>
                    <Link to="profile">Profile</Link>
                </div>
            </div>
        </header>
    )
}