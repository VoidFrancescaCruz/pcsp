import { Grid } from '@material-ui/core';
import React from 'react';

//CSS file


const CyberSafeguard = () => {
    return (
        <div>
            <h2 className="titleCard">Safeguarding against malware
            <img src="/images/cyberSecuritytopics/cyberSafeguard.png" className="center-image" /></h2>

            <div className="body">
                <h3 className="firstHeading">Softwares to better secure your personal computer</h3><br />

                <p className="paragraph">Malware is any type of software that is designed to damage your computer or gain unauthorized access to your personal information. It includes viruses, worms, Trojan horses, and spyware. Most malware is distributed over the Internet and is often bundled with other software.
The best way to guard against malware is to install antivirus software, such as Bitdefender, Norton, or Kaspersky. Antivirus software helps to prevent malware from being installed, and it can also remove malware from your computer.
<br/><br/>The best way to guard against malware is to install antivirus software, such as Bitdefender, Norton, or Kaspersky. Antivirus software helps to prevent malware from being installed, and it can also remove malware from your computer.
</p><br/>
                <h4 className="secondHeading">ANTIVIRUS SOFTWARES:</h4><ul>
                <li><h4>Webroot Antivirus:</h4></li>
                <p className="paragraph">Webroot SecureAnywhere AntiVirus scans at high speed and uses just a trickle of your system’s resources. It earned excellent scores in our hands-on tests and can even roll back some ransomware activity.<br/>
                <h5 className="secondHeading">Price: $39.99</h5>
                <img src="/images/cyberSecuritytopics/webroot.png"/><br/><br/>
                <Grid container spacing={6}>
                <Grid item xs={6}>
                <h5>Pros:</h5><ul>
                    <li>Near-perfect score in our malware protection and phishing protection tests</li>
                    <li>Light on system resources</li>
                    <li>Fast scan, tiny size</li>
                    <li>Can remediate ransomware damage</li>
                    <li>Advanced features</li></ul></Grid>
                <Grid item xs={6}>
                <h5>Cons:</h5><ul>
                    <li>Limited lab test results due to unusual detection techniques</li>
                    <li>Mixed results in testing with hand-modified ransomware</li>
                    <li>Firewall component not working at this time</li>
                    </ul><br/></Grid></Grid><br/>
                    The earliest antivirus utilities recognized malware by consulting a database of signatures. These signatures were elements of malware files that remained invariant, and hence could be used for identification. Malware writers quickly learned to write polymorphic programs that mutate slightly with each new copy, foiling simple signature-based detection. In any case, the never-ending proliferation of malware would have required an always-growing database. Webroot SecureAnywhere AntiVirus avoids the whole problem by using a completely different technique. When it encounters an unknown app, it runs it in a bubble, preventing the app from making any permanent system changes until its cloud-based intelligence reaches a conclusion about the program. If it’s malicious, the tiny local Webroot program wipes out the attacker and reverses its actions. It’s a different approach from most competitors, but our tests show that it works well. 
                    <h5 className="secondHeading"><br/>How Much Does Webroot SecureAnywhere AntiVirus Cost?</h5>
                    Price-wise, Webroot runs with the pack. Like Bitdefender, Kaspersky, and several others, it costs just under $40 for a one-year subscription. Where a three-license Webroot subscription cost $10 more, the other two ask another $20 for a three-pack. Norton's standalone antivirus doesn't have a multi-license plan, and one license will run you $59.99. As for McAfee AntiVirus Plus, it also costs $59.99 per year, but that subscription gets you unlimited protection for your Windows, macOS, Android, and iOS devices. As always, you may find any of these prices discounted for the first year, sometimes quite deeply.
                </p><br/>
                <li><h4>BITDEFENDER ANITVIRUS</h4></li>
                <p className="paragraph">With outstanding antivirus lab results and a collection of features that puts many security suites to shame, Bitdefender Antivirus Plus is an excellent choice for protecting your PC.<br/>
                <h5 className="secondHeading">Price: $39.99</h5>
                <img src="/images/cyberSecuritytopics/bitdefender.png"/><br/><br/>
                <h5>Pros:</h5><ul>
                    <li>Outstanding scores in independent lab tests and our web protection tests</li>
                    <li>Enhanced ransomware protection</li>
                    <li>Active Do Not Track</li>
                    <li>Banking protection</li>
                    <li>Offers a virtual private network, or VPN</li>
                    <li>Many security-centered bonus features</li></ul>
                <h5>Cons:</h5><ul>
                    <li>Unlimited VPN access requires separate subscription.</li>
                    <li>With all real-time protection disabled, ransomware-specific features missed one uncommon sample.</li>
                    </ul><br/>
                    The entry-level antivirus from Bitdefender boasts the name Bitdefender Antivirus Plus, and the Plus is very much deserved. This tool totally handles all the basic antivirus tasks effectively, and then goes way beyond in terms of additional security features. Feature-wise, it could take on many security suites and win. Bitdefender Antivirus Plus remains a top choice when it comes to protecting your PC's security.
                    <br/>Some antivirus products, such as Cylance Smart Antivirus and F-Secure, stick strictly with the essentials, wiping out existing malware infestations and defending against new attacks. Bitdefender, by contrast, packs a huge collection of security-centric features, among them password management, enhanced security for online transactions, ransomware protection, and even a VPN. To be sure you realize how much you're getting, the installer runs a slideshow detailing the features while doing its job.
                    <br/></p>
                    <li><h4>MCAFEE ANTIVIRUS</h4></li>
                <p className="paragraph">A subscription for McAfee AntiVirus Plus lets you protect every Windows, Android, macOS, and iOS device in your household. Other products may score better in testing, but none of them offer a deal like this.<br/>
                <h5 className="secondHeading">Price: $59.99</h5>
                <img src="/images/cyberSecuritytopics/mcafee.png"/><br/><br/>
                <h5>Pros:</h5><ul>
                    <li>Protection for all your Windows, macOS, Android, and iOS devices</li>
                    <li>Very good malware protection score</li>
                    <li>Excellent detection of malicious and fraudulent websites</li>
                    <li>Robust firewall</li>
                    <li>Virus protection promise</li>
                    <li>Includes Ransom Guard, PC Boost, and many bonus features</li></ul>
                <h5>Cons:</h5><ul>
                    <li>Missed some modified ransomware samples</li>
                    <li>Some poor lab test results</li>
                    <li>PC Boost web speedup still works only in Chrome</li>
                    <li>Mac edition less feature-rich than Windows or Android</li>
                    <li>Even fewer features for iOS</li>
                    </ul><br/>
                    Do you remember those simple days when all you needed was one antivirus program for the (single) family PC? Yeah, those days are long past. The modern household teems with devices, PC, Mac, and mobile, and they all need protection. Fortunately, one license for McAfee AntiVirus Plus lets you install McAfee security software on every Windows, macOS, Android, and iOS device in your household. Windows users get such a wealth of features that the Windows edition could almost qualify as a security suite, and the Android edition is likewise loaded. Features are sparser on macOS and iOS, but iOS users get more than many companies offer. It's an excellent value, and it did very well in some of our hands-on tests.
                    <br/><h5 className="secondHeading"><br/>How Much Does Mcafee AntiVirus Cost?</h5>
                    You pay $59.99 per year for unlimited McAfee licenses. That's rare. Most competing companies offer one-, three-, five-, or 10-license subscriptions. For example, about the same subscription price as McAfee’s gets you 10 Sophos licenses, three Kaspersky Anti-Virus licenses, and just one Norton license. Roughly $40 per month gets you a one-device license for many antivirus products, among them Bitdefender, Webroot, and Trend Micro. Price-wise, McAfee has the competition beat.
                    <br/></p></ul>
                    
                <a href= "https://sea.pcmag.com/antivirus/22/the-best-antivirus-protection-for-2020" className= "source"> https://sea.pcmag.com/antivirus/22/the-best-antivirus-protection-for-2020</a>

            </div>
            
            
        </div>
    );
}

export default CyberSafeguard;