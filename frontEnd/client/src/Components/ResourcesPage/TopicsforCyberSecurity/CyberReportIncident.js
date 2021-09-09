import React from 'react';

//CSS file
import './CyberReportIncident.css';

const CyberReportIncedent = () => {
    return (
        <div>
            <img src="/images/cyberSecuritytopics/cyberReportincedent.jpg" className="center-image" />

            <div className="text">

                <a href="https://www.doj.gov.ph/reporting_cybercrime.html" className="Link">Visit the <span className="Highlight">Department of Justice (DOH) </span> to learn more</a>
                <h1> You may report your Cyber Security Incedent here on the upper right button Report Here </h1>

            </div>

        </div>
    );
}

export default CyberReportIncedent;