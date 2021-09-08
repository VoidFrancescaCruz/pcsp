import React from 'react'
import Button from 'react-bootstrap'
import { Container, Grid } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import cyberSecuritytopics from './CyberSecurityTopicsPage/cyberSecuritytopics';

const CyberSecurityTopicsPage = () => {

    return (
        <div>
            <Container>
                <h3 align="center">Cyber Security Topics</h3>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <a href="https://www.gmanetwork.com/news/news/nation/798190/nbi-arrests-suspect-behind-hacking-of-gatchalian-s-credit-card/story/">
                            <img width="100%" src="/images/securityPH2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                            <img width="100%" src="/images/reportIncedent2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                            <img width="100%" src="/images/safeguard2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                            <img width="100%" src="/images/avoidCrime2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="https://www.bworldonline.com/main-philippine-govt-portal-hacked-after-death-of-9-activists/">
                            <img width="100%" src="/images/importance2.jpg" />
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )


}

export default CyberSecurityTopicsPage;
