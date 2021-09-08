import React, { Component } from 'react'
import Button from 'react-bootstrap'
import { Container, Grid } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CyberSecurityTopicsPage from './CyberSecurityTopicsPage';

import  './Resources.css'
import NewsAndUpdatesPage from './NewsAndUpdatesPage';

export default class Resources extends Component {

    render() {
        return (
            <Router>
                <div>
                    <h3>Resources</h3>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <a href="/cybersecurity">
                                <img src= "/images/securityTopics2.jpg" className="securityTopic2"/>
                            </a>
                        </Grid>
                        <Grid item xs={6}>
                            <a href="/newsandupdates">
                                <img src="/images/updatesNews2.jpg" className="UpdateNews2" />
                            </a>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Switch>
                        <Route path="/cybersecurity">
                            <CyberSecurityTopicsPage />
                        </Route>
                        <Route path="/newsandupdates">
                            <NewsAndUpdatesPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
