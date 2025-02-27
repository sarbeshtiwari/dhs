import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DHSGurugram() {
    const navigate = useNavigate();

    return (
        <div className="mainContent">
            <div className="banner-header">
                <h3>Choose Workplace (Gurugram)</h3>
                <button className="btn btn-secondary" onClick={() => navigate("/dashboard")}>Back</button>
            </div>

            <div className="section">
                <h4 className="section-title">Home</h4>
                <div className="row">
                    <Card link="/dhs-gurugram/content-image-heading/about" title="About Content" />
                    <Card link="/dhs-gurugram/content-image-heading/infrastructure" title="Infrastructure" />
                </div>
            </div>
            <div className="section">
                <h4 className="section-title">About Us</h4>
                <div className="row">
                    <Card link="/dhs-gurugram/banner-content/our-school" title="Our School" />
                    <Card link="/dhs-gurugram/banner-content/vision-n-mission" title="Vision & Mission" />
                    <Card link="/dhs-gurugram/leadership" title="Leadership" />
                    <Card link="/dhs-gurugram/board-of-member" title="Board Of Member" />
                </div>
            </div>

            <div className="section">
                <h4 className="section-title">Infrastructure</h4>
                <div className="row">
                    <Card link="/dhs-gurugram/banner-content-image/school-campus" title="School Campus" />
                    <Card link="/dhs-gurugram/banner-content-image/labs" title="Labs" />
                    <Card link="/dhs-gurugram/banner-content-image/sports" title="Sports" />
                    <Card link="/dhs-gurugram/banner-content-image/other-facilities" title="Other Facilities" />
                </div>
            </div>
            <div className="section">
                <h4 className="section-title">Academics</h4>
                <div className="row">
                    <Card link="/dhs-gurugram/banner-content-image/primary" title="Primary"/>
                    <Card link="/dhs-gurugram/banner-content-image/pedagogy" title="Pedagogy"/>
                    <Card link="/dhs-gurugram/banner-content-image/curriculum" title="Curriculum"/>
                    <Card link="/dhs-gurugram/banner-content-image/technology" title="Technology"/>
                </div>
            </div>
            <div className="section">
                <h4 className="section-title">Beyond Academics</h4>
                <div className="row">
                    <Card link="/dhs-gurugram/banner-content-image/visual-art" title="Visual Art"/>
                    <Card link="/dhs-gurugram/banner-content-image/performing-arts" title="Performing Arts"/>
                    <Card link="/dhs-gurugram/content/theatre" title="Theatre"/>
                    <Card link="/dhs-gurugram/banner-content-image/music" title="Music"/>                    
                    <Card link="/dhs-gurugram/content/dance" title="Dance"/>
                    <Card link="/dhs-gurugram/content/sports" title="Sports"/>
                    <Card link="/dhs-gurugram/banner-content-image/health-n-wellness" title="Health and Wellness"/>
                </div>
            </div>
            <div className="section">
                <h4 className="section-title">Admissions</h4>
                <div className="row">
                    <Card link="/dhs-gurugram/content/pre-nursery-to-class-1" title="Pre-Nursery to Class 1"/>
                    <Card link="/dhs-gurugram/content/class-2-to-5" title="Class 2 to 5"/>
                    <Card link="/dhs-gurugram/content/fees" title="Fees"/>
                    <Card link="/dhs-gurugram/faq" title="FAQs"/>
                </div>
            </div>
        </div>
    );
}

function Card({ link, title }) {
    return (
        <div className="col-md-4 mb-4">
            <Link to={link} className="card custom-card text-decoration-none">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </Link>
        </div>
    );
}
