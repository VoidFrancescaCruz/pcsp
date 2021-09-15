import React from 'react';
import { Container, Grid } from '@material-ui/core'
//CSS file
import './styles.css';

const CyberAvoidance = () => {
    return (
        <div>
            <h2 className="titleCard">How To Avoid Committing A Cyber Security Crime?
            <img src="/images/cyberSecuritytopics/cyberAvoidance.png" className="center-image" /></h2>

            <div className="body">
                <h3 className="firstHeading">How to avoid committing a Cyber Security crime</h3><br />
                <h4 className="secondHeading">What is Cybercrime?</h4>
                <p className="paragraph">Cybercrime is defined as a crime that is committed using a network-connected device such as a computer or a mobile phone. Those who commit cyber-crime are known as cyber criminals or cyber crooks. With the growing digitization, internet crimes are also increasing at a faster pace.  As, this type of crime can be committed from a distant location; for an example-a foreign country, most criminals prefer this mode as the risk of getting traced and punished is limited.  Some common types of cybercrimes include phishing, hacking, cyber-bullying, identity theft, spamming to name a few. Let’s explain what exactly these terminologies mean.</p><br/>
                <h4 className="secondHeading">Types of Cybercrime</h4><ul>
                <li><h5>PHISHING</h5></li>
                <p className="paragraph">Phishing is a technique used to gain personal or sensitive information of a PC user, which can be his bank details or credit card information.</p>
                <li><h5>CYBER-BULLYING</h5></li>
                <p className="paragraph">Cyberbullying is insulting, harassing or threatening anyone using the internet via email or messenger etc.</p>
                <li><h5>IDENTITY THEFT</h5></li>
                <p className="paragraph">Identity theft is the process of stealing your personal information such as social security number or driver license to open a bank account or apply for credit card etc.</p>
                <li><h5>HACKING</h5></li>
                <p className="paragraph">Hacking is defined as an activity to intrude into your system or gain unauthorized access to your accounts.</p><br/></ul>
                <h4 className="secondHeading">Knowing what is cybercrime and its types helps avoid accidentally committing a cybercrime</h4><br/>

            <a href= "https://www.reveantivirus.com/en/computer-security-threats/cybercrime" className= "source">Source: https://www.reveantivirus.com/en/computer-security-threats/cybercrime </a>

            </div>
            

        </div>
    );
}

export default CyberAvoidance;