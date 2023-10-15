import React from "react";

export default function BrandItem({ src }) {
    return (
        <div className="partner-item">
            <div className="logo-img">
                <a href="#">
                    <img loading="lazy" className="main-logo" src={src} alt="" />
                </a>
            </div>
        </div>
    )
}