import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { Button, Card, Carousel } from 'react-bootstrap'

//Embedded Youtube Video Dependency
import ReactPlayer from 'react-player'

//Auto Scroll Dependency
import { Link } from 'react-scroll'

//CSS File
import './HomePage.css';

const HomePage = () => {

    return (
        //Background Image
        <div style={{ backgroundImage: "url(/images/background.png)" }}>

            {/* Hero Section */}
            <Container>

                <Grid container spacing={1} className="HeroSection">

                    <Grid item md={6} xs={12}>
                        <h1>Is your data safe?</h1><br />
                        <p className="HeroSectionBodyText"> Your data is the most important asset you have in the cyberworld.
                        <br />What should you do against cyberattacks?</p><br />
                        <Link to="learnMore">Click here to learn more...</Link>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <img src="/images/infographics.png" align="right"></img>
                    </Grid>

                </Grid>

            </Container>

            {/* Cyber Security Topics Section */}
            <h4 id="learnMore" align="center"> Learn More about <span classname="CyberSecurityText">Cyber Security</span></h4>
            <br />

            <Container className="CyberSecurityTopicsSectionContainer">
                <Grid
                    container 
                    spacing={6}
                    alignItems="center"
                    justifyContent="center"
                    alignContent="space-between"
                >

                    <Grid item lg={4} md={6} xs={12}>
                        <a href="/cybertips">
                            <img src="/images/tips.jpg" className="CyberSecurityCard"/>
                        </a>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <a href="/cyberthreats">
                            <img src="/images/threats.jpg" className="CyberSecurityCard"/>
                        </a>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <a href="cyberinph">
                            <img src="/images/securityPH.jpg" className="CyberSecurityCard"/>
                        </a>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <a href="/cyberimportance">
                            <img src="/images/importance.jpg" className="CyberSecurityCard"/>
                        </a>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <a href="/cybersafeguard">
                            <img src="/images/safeguard.jpg" className="CyberSecurityCard"/>
                        </a>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <a href="/cyberavoidance">
                            <img src="/images/avoidCrime.jpg" className="CyberSecurityCard"/>
                        </a>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <a href="/cyberreportincident">
                            <img src="/images/reportIncedent.jpg" className="CyberSecurityCard"/>
                        </a>
                    </Grid>

                </Grid>
            </Container>


            <br />
            <br />
            <br />
            <br />
            <br />

            <Container className="NPCSection">

                {/* NPC Video */}
                <h4> Being <span className="redTextHighlight">Safe</span> is Not Enough. Know Your <span className="redTextHighlight">Rights</span></h4>

                <br />

                <div className="videoFrame">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=Kz-INokaRFs"
                        controls
                        playbackRate={1}
                        width="1152px"
                        height="648px"
                    />
                </div>

                <br />

                <a className="npcLink" href="https://www.privacy.gov.ph/">Visit the NATIONAL PRIVACY COMMISSION to learn more</a>

            </Container>

            <br />
            <br />
            <br />
            <br />
            <br />

            <Carousel className="Carousel">
                <Carousel.Item>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <a href="https://www.gmanetwork.com/news/news/nation/798190/nbi-arrests-suspect-behind-hacking-of-gatchalian-s-credit-card/story/">
                                <img src="/images/News.jpg" className="News" />
                            </a></Grid>
                        <Grid item xs={4}>
                            <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                                <img src="/images/updatesNews.jpg" className="News" />
                            </a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                                <img src="/images/dataBreach.jpg" className="News" />
                            </a>
                        </Grid>
                    </Grid>
                </Carousel.Item>
                <Carousel.Item>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <a href="https://www.gmanetwork.com/news/news/nation/798190/nbi-arrests-suspect-behind-hacking-of-gatchalian-s-credit-card/story/">
                                <img src="/images/dataBreach.jpg" className="News" />
                            </a></Grid>
                        <Grid item xs={4}>
                            <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                                <img src="/images/vaccineBreach.jpg" className="News" />
                            </a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                                <img src="/images/News.jpg" className="News" />
                            </a>
                        </Grid>
                    </Grid>

                </Carousel.Item>
                <Carousel.Item>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <a href="https://www.gmanetwork.com/news/news/nation/798190/nbi-arrests-suspect-behind-hacking-of-gatchalian-s-credit-card/story/">
                                <img src="/images/News.jpg" className="News" />
                            </a></Grid>
                        <Grid item xs={4} >
                            <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                                <img src="/images/updatesNews.jpg" className="News" />
                            </a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://www.cnnphilippines.com/news/2021/8/6/Manila-City-vaccination-registration-website-hacked-troll-farm.html">
                                <img src="/images/dataBreach.jpg" className="News" />
                            </a>
                        </Grid>
                    </Grid>

                </Carousel.Item>
            </Carousel>

            <br />
            <br />
            <br />

        </div >
    )
}

export default HomePage;


