import React from "react";

export default function BrandItem({ src }) {
    return (
        <div className="partner-item">
            <div className="logo-img">
                <img loading="lazy" className="main-logo" src={src} alt="" />
            </div>
        </div>
    )
}