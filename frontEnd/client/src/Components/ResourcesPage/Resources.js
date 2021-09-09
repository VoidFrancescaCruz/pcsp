import React, { Component } from 'react'
import Button from 'react-bootstrap'
import { Container, Grid } from '@material-ui/core'

import './Resources.css'

const Resources = () => {

    return (
        <div>
            <Grid container>
                <Grid item xs={6}>
                    <a href="/cybersecurity">
                        <img width="100%" src="/images/securityTopics2.jpg" className="SecurityTopic2" />
                    </a>
                </Grid>
                <Grid item xs={6}>
                    <a href="/newsandupdates">
                        <img width="100%" src="/images/updatesNews2.jpg" className="UpdateNews2" />
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Resources;