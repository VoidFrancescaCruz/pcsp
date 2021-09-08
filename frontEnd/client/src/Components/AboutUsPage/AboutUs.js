import React from 'react';
import { Container, TextField, Button, Typography, Paper, FormControl, FormControlLabel, FormLabel, Grid, FormGroup, makeStyles } from '@material-ui/core';
import useStyles from './styles';
import Carousel from "react-elastic-carousel"
import Item from "./Item"

const AboutUs = () => {

    const classes = useStyles();

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },

    ]
    return (
        <div>
            {/* TitleCard   */}
            <div>
                <div class="card-body" className={classes.titleCardBackground}>
                    <Container className={classes.titleCard}>
                        <h1>About Us</h1>

                    </Container>
                </div><br />

                <div className="carousel">
                    <Carousel breakPoints={breakPoints}>
                        <Item>
                            <img src="/images/aboutUs/cesca.gif" className={classes.vectorImage} /><br />
                            <h2 align='center'>Francesca Cruz</h2>
                            <h5 align='center'>Scrum Master / Backend Developer</h5><br />
                        </Item>
                        <Item>
                            <img src="/images/aboutUs/gian.gif" className={classes.vectorImage} /><br />
                            <h2 align='center'>Gian Carlo Gallano</h2>
                            <h5 align='center'>Backend Developer</h5><br />
                        </Item>
                        <Item>
                            <img src="/images/aboutUs/tismo.gif" className={classes.vectorImage} /><br />
                            <h2 align='center'>Jericho Carl Tismo</h2>
                            <h5 align='center'>Frontend Developer</h5><br />
                        </Item>
                        <Item>
                            <img src="/images/aboutUs/stephen.gif" className={classes.vectorImage} /><br />
                            <h2 align='center'>Stephen John Chua</h2>
                            <h5 align='center'>Creatives Head / Frontend Developer</h5><br />
                        </Item>
                        <Item>
                            <img src="/images/aboutUs/ken.gif" className={classes.vectorImage} /><br />
                            <h2 align='center'>Michael Ken Revil</h2>
                            <h5 align='center'>Frontend Developer</h5><br />
                        </Item>
                        <Item>
                            <img src="/images/aboutUs/silas.gif" className={classes.vectorImage} /><br />
                            <h2 align='center'>Silas Samuel Baguhin</h2>
                            <h5 align='center'>Backend Developer</h5><br />
                        </Item>
                        <Item>
                            <img src="/images/aboutUs/jorel.gif" className={classes.vectorImage} /><br />
                            <h2 align='center'>Jorel Gutierrez</h2>
                            <h5 align='center'>Backend Developer</h5><br />
                        </Item>
                        <Item>
                            <img src="/images/aboutUs/henry.gif" className={classes.vectorImage} /><br />
                            <h2 align='center'>Henry Cacas Jr.</h2>
                            <h5 align='center'>Frontend Developer</h5><br />
                        </Item>
                    </Carousel>
                </div><br />



                <div class="card-body" className={classes.titleCardBackground}>
                    <Container className={classes.paragraph}>
                        <p>
                        <strong>Philippines Cyber Security Portal or PCSP</strong>,  is developed by a team of Razza Consulting Inc. Interns with one goal in mind and that is Cybersecurity. Ever since the pandemic, people have been home-bound cybersecurity has been more important. As many people use the internet for their personal and work affairs, it’s important to think about your security. This website will help you with the latest articles about what is happening in the cybersecurity industry and gives you the necessary information to protect yourself from the many threats. You may also report your cyber incidents to us via our contact info, we ensure to give a response as soon as we can.
                        </p>
                    </Container>

                </div><br />

                <Container>

                </Container>
            </div>
        </div>
    )
}

export default AboutUs;





