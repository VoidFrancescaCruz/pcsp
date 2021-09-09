import React, { useState } from 'react';
import { Control, TextField, Button, Typography, Paper, Container, FormControl, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, RadioGroup, Radio, FormControlLabel, FormLabel, Grid, FormGroup } from '@material-ui/core'
import useStyles from './styles';

//Backend Stuff
import { useDispatch } from 'react-redux';
import { createPost } from '../../Actions/posts';

const ReadAndUnderstandPage = () => {

    const [postData, setPostData] = useState({
        agree: true,
        disagree: false,
        disabled: true,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.reload()
        dispatch(createPost(postData))
        // console.log(e)
    }

    const handleSubmitChange = (event) => {
        console.log(event)
        setPostData({ ...postData, [event.target.name]: event.target.checked })
        if ([event.target.name] == 'agree') {
            setPostData({ ...postData, disabled: false })
        }
        else {
            setPostData({ ...postData, disabled: true })
        }
    }


    const classes = useStyles();
    const dispatch = useDispatch();

    return (

        <div>
            <div>
                <h1 className={classes.titleCard}>Read and Understand </h1>
            </div>

            <div class="card-body" className={classes.titleCardBackground}>

                <Container className={classes.paragraph}>

                    <div class="card-body" className={classes.titleCardBackground}>
                        <Container>
                            <p>
                                According to <strong>Cybercrime Prevention Act of 2012 </strong>a.k.a. <strong>Republic Act No. 10175</strong>, accessing third party data without authorization may be unlawful under several laws in the Philippines. If the data is accessed and stored by a third party without authorization from the owner of the data, the access and storage may be considered to be an offence. Our services require access of certain user data and by agreeing with this, you have given consent to us to gain access to your data. In addition, you’ve given us the right to withdraw and cancel services and you must abide by our rules for user behavior. <br /><br />
                                <strong>For Your Information:</strong><br /><br />
                                <ul>
                                    <li>Information provided to the Philippine Cyber Security Portal is protected and secured by laws and mandate implemented by the Government, National Privacy Commission, Philippine Cyber Security Portal and  partner organizations. Information provided also is strictly prohibited to unauthorized person outside of PCSP.</li><br />
                                    <li>Information provided to the Philippine Cyber Security Portal can be relayed to law enforcement agencies for the sake of apprehending criminals and interrupting malicious activities.</li><br />
                                    <li>Information provided to the Philippine Cyber Security Portal can be provided to entities, provided that permission and consent is given by the owner of the information and the purpose of using the information is valid under implementing rules and regulations mandated by the Government, National Privacy Commission, Philippine Cyber Security Portal and partner organizations.</li>
                                </ul>
                            </p>
                        </Container>
                    </div>

                    <div className={classes.optionsWrap}>
                        <div className={classes.optionsContent}>
                            <RadioGroup className={classes.agreeDisagree}>
                                <FormControlLabel
                                    name="agree"
                                    control={<Radio color="primary" />}
                                    value="I agree"
                                    onChange={handleSubmitChange}
                                    label="I agree with the statements above"

                                />
                                <FormControlLabel
                                    name="disagree"
                                    control={<Radio color="primary" />}
                                    value="I disagree"
                                    onChange={handleSubmitChange}
                                    label="I disagree with the statements above"
                                />
                            </RadioGroup>
                        </div>
                    </div>

                </Container>

            </div>

            <div className={classes.buttonClass}>
                <Button variant="contained" disabled={postData.disabled} href="/report" className={classes.buttonBackground}>
                    Continue
                </Button>
            </div>
        </div>
    )
}

export default ReadAndUnderstandPage;