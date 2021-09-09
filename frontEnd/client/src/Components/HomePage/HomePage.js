import React from 'react'
import ReactPlayer from 'react-player'
import { Container, Grid } from '@material-ui/core'
import { Button, Card, Carousel } from 'react-bootstrap'

import './HomePage.css';

const HomePage = () => {

    return (
        // Home page Video NPC with two texts
        <div classname="d-grid gap-Vd-m d-block" style={{ backgroundImage: "url(/images/background.png)" }}>
            <Container className="Video">
                <Container className="topText">
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <h1 align="left">Is your data safe?</h1><br />
                            <h6 align="left"> Your data is the most important asset you have in the cyberworld.
                        <br />What should you do against cyberattacks?</h6><br />
                            <p align="left"> Click here to learn more..</p>
                        </Grid>
                        <Grid item xs={6}>
                            <img src="/images/infographics.png" align="right"></img>
                        </Grid>
                    </Grid>
                </Container>
            </Container>

            <Container className="Video">

                {/* Learn more about Cyber Security */}
                <div>
                    <Container>
                        <h4> Learn More about <span classname="CyberSecurityText">Cyber Security</span></h4>
                        <br />
                    </Container>
                </div>
                <Grid container spacing={7}>
                    <Grid item xs={4}>
                        <a href="/cybertips">
                            <img src="/images/tips.jpg" className="Tips" />
                        </a>
                    </Grid>
                    <Grid item xs={4}>
                        <a href="/cyberthreats">
                            <img src="/images/threats.jpg" className="Threats" />
                        </a>
                    </Grid>
                    <Grid item xs={4}>
                        <a href="cyberinph">
                            <img src="/images/securityPH.jpg" className="SecurityPH" />
                        </a>
                    </Grid>
                    <Grid item xs={4}>
                        <a href="/cyberimportance">
                            <img src="/images/importance.jpg" className="Importance" />
                        </a>
                    </Grid>
                    <Grid item xs={4}>
                        <a href="/cybersafeguard">
                            <img src="/images/safeguard.jpg" className="Safeguard" />
                        </a>
                    </Grid>
                    <Grid item xs={4}>
                        <a href="/cyberavoidance">
                            <img src="/images/avoidCrime.jpg" className="AvoidCrime" />
                        </a>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <a href="/cyberreportincident">
                            <img src="/images/reportIncedent.jpg" className="reportIncedent" />
                        </a>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>

                <br />
                <br />
                <br />
                <br />
                <br />

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
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
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
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
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
                            <a href="https://www.cnnphilippines.com/news/2021/8/6/Manila-City-vaccination-registration-website-hacked-troll-farm.html">
                                <img src="/images/dataBreach.jpg" className="News" />
                            </a>
                        </Grid>
                    </Grid>
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            <br />
            <br />
            <br />

        </div >

    )
}

export default HomePage;


