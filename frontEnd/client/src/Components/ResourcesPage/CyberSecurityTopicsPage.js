import React from 'react'
import Button from 'react-bootstrap'
import { Container, Grid } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const CyberSecurityTopicsPage = () => {

    return (
        <div>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <a href="/cyberinph">
                            <img width="100%" src="/images/securityPH2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="/cyberreportincident">
                            <img width="100%" src="/images/reportIncedent2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="/cybersafeguard">
                            <img width="100%" src="/images/safeguard2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="/cyberavoidance">
                            <img width="100%" src="/images/avoidCrime2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="/cyberimportance">
                            <img width="100%" src="/images/importance2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="/cybertips">
                            <img width="100%" src="/images/tips2.jpg" />
                        </a>
                    </Grid>
                    <Grid item xs={12}>
                        <a href="/cyberthreats">
                            <img width="100%" src="/images/threats2.jpg" />
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </div >
    )

}

export default CyberSecurityTopicsPage;
