import React, { useState, useRef, } from 'react';

//Material UI Dependencies
import { TextField, Container, Checkbox, FormControlLabel, Grid, RadioGroup, Radio, Tooltip, Zoom, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
//Date and Time Picker from Material UI Dependencies
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';

//Design from styles.js
import useStyles from './styles';
import { Button, FormLabel } from 'react-bootstrap';

//Backend Stuff
import { useDispatch } from 'react-redux';
import { createPost } from '../../Actions/posts';
import axios from 'axios';

// import FileBase from 'react-file-base64';
import FileBase from 'react-file-base64';

//ReCaptcha
import Recaptcha from 'react-recaptcha';

//Tooltip Customization
const LightTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.common.white,
		color: 'rgba(0, 0, 0, 0.87)',
		boxShadow: theme.shadows[1],
		fontSize: 11,
	},
	arrow: {
		color: theme.palette.common.white,
		"&:before": {
			border: "1px solid #E6E8ED",
		},
	},
}))(Tooltip);

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});



const Form = () => {
	const [open, setOpen] = useState(false)

	const [isVerified, setVerified] = useState(false)

	//Recaptcha function
	const callback = () => {
		console.log('captcha loaded sucessfully');
	}

	const verifyCallback = function (response) {
		
		//res = response.toString();
		if(response != null) {
			console.log(response)
			setVerified({ isVerified: true })
		}
	}

	const handleClickOpen = (e) => {
		if(isVerified === false) {
			alert('Please verify that you are a human!');
			e.preventDefault();
		} 
		else {	
			setOpen(true);
			e.preventDefault();
		}
	};

	const handleClose = (e) => {
		setOpen(false);
		e.preventDefault();
	};
	//ITO NA YUNG BAGONG HANDLE SUBMIT 
	const handleSubmit = (e) => {

		setOpen(false);
		e.preventDefault();
		window.location.reload();
		dispatch(createPost(postData));
	};

	//useState 
	const [postData, setPostData] = useState({
		//REPORTING PERSON DETAILS (textBox)
		name: '',
		organization: '',
		address: '',
		primaryContact: '',
		email: '',
		secondaryContact: '',
		alternativeEmail: '',

		//WHAT OCCURED SECTION
		lossOfService: false,
		accessAndComplianceViolations: false,
		systemAndSoftwareMalfunction: false,
		systemOverload: false,
		physicalSecurityBreach: false,
		uncontrolledSystemChanges: false,
		intrusionAttempt: false,
		others1Check: false,
		others1Text: "",

		//HOW OCCURED
		fraudHacking: false,
		physicalDamage: false,
		userError: false,
		hardwareFailure: false,
		softwareFailure: false,
		others2Check: false,
		others2Text: "",

		//WHY OCCURED
		deliberateIntentional: false,
		others3Check: false,
		others3Text: "",
		actualAttack: false,
		accidental: false,

		briefSummary: "",

		//Component Affected Section
		peopleOrg: false,
		hardware: false,
		software: false,
		resourcesServices: false,
		information: false,
		others4Check: false,
		others4Text: "",

		//Adverse Business Impacts
		financialLoss: false,
		personalInformation: false,
		lossOfReputation: false,
		legalAndRegulatory: false,
		disruptionToBusiness: false,
		commercialAndEcons: false,
		others5Check: false,
		others5Text: "",

		//Vulnerabilities Identified
		informationVulnerability: false,
		people: false,
		physical: false,
		sofwareVulnerability: false,
		reputationAndImage: false,
		processesProcedures: false,
		servicesVulnerability: false,
		others6Check: false,
		others6Text: "",

		dateOccured: null,
		timeOccured: null,
		dateDiscovered: null,
		timeDiscovered: null,


		radButtonYes: false,
		radButtonNo: false,

		dateEnded: null,
		timeEnded: null,

		selectedFile: "",

		//Others Text Field disabled Property
		others1Disabled: true,
		others2Disabled: true,
		others3Disabled: true,
		others4Disabled: true,
		others5Disabled: true,
		others6Disabled: true,
		//Date and Time Picker disabled Property
		dateAndTimeDisabled: true,
	})

	//Needed for styles.js
	const classes = useStyles();

	//Backend Stuff
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setPostData({ ...postData, [e.target.name]: e.target.value });

		//enable or disabled others components
		if ([e.target.name] == 'others1Check') {
			setPostData({ ...postData, others1Disabled: !postData.others1Disabled })
		} else if ([e.target.name] == 'others2Check') {
			setPostData({ ...postData, others2Disabled: !postData.others2Disabled })
		} else if ([e.target.name] == 'others3Check') {
			setPostData({ ...postData, others3Disabled: !postData.others3Disabled })
		} else if ([e.target.name] == 'others4Check') {
			setPostData({ ...postData, others4Disabled: !postData.others4Disabled })
		} else if ([e.target.name] == 'others5Check') {
			setPostData({ ...postData, others5Disabled: !postData.others5Disabled })
		} else if([e.target.name] == 'others6Check'){
			setPostData({ ...postData, others6Disabled: !postData.others6Disabled })
		} else {
			setPostData({...postData, dateAndTimeDisabled: !postData.dateAndTimeDisabled})
		}
	}

	// DITO ILALAGAY YUNG IDADAGDAG NA FORMS (change value to {postData.name})
	return (

		<form className={`${classes.root} ${classes.form}`} onSubmit={handleClickOpen} >

			{/* Title Card */}
			<div class="card-body" className={classes.titleCardBackground}>
				<Container className={classes.titleCard}>
					<h5>Reporting Person Details</h5>
				</Container>
			</div><br />

			{/* Reporting Person Details Input Fields */}
			<Container>

				<Grid container spacing={2}>

					<Grid item xs={12}>

						<TextField
							size="small"
							name="name"
							variant="outlined"
							label="Name"
							placeholder="Pangalan"
							fullWidth
							required
							value={postData.name}
							onChange={(e) => setPostData({ ...postData, name: e.target.value })}
						/>

					</Grid>

					<Grid item xs={12}>

						<TextField
							size="small"
							name="organization"
							variant="outlined"
							label="Organization"
							placeholder="Organisasyon"
							value={postData.organization}
							fullWidth
							onChange={(e) => setPostData({ ...postData, organization: e.target.value })}
						/>

					</Grid>

					<Grid item xs={12}>

						<TextField

							size="small"
							name="address"
							variant="outlined"
							label="Address"
							placeholder="Tirahan"
							value={postData.address}
							fullWidth
							onChange={(e) => setPostData({ ...postData, address: e.target.value })}
						/>

					</Grid>

					<Grid item xs={6}>

						<TextField
							size="small"
							name="primaryContact"
							variant="outlined"
							label="Primary Contact No."
							placeholder="Pangunahing Numerong Matatawagan"
							value={postData.primaryContact}
							fullWidth
							required
							onChange={(e) => setPostData({ ...postData, primaryContact: e.target.value })}
						/>

					</Grid>

					<Grid item xs={6}>

						<TextField
							size="small"
							name="email"
							variant="outlined"
							label="Email Address"
							placeholder="Email Address"
							value={postData.email}
							fullWidth
							required
							onChange={(e) => setPostData({ ...postData, email: e.target.value })}
						/>

					</Grid>

					<Grid item xs={6}>

						<TextField
							size="small"
							name="secondaryContact"
							variant="outlined"
							label="Secondary Contact No."
							placeholder="Pangalawang Numerong Matatawagan"
							value={postData.secondaryContact}
							fullWidth
							onChange={(e) => setPostData({ ...postData, secondaryContact: e.target.value })}
						/>

					</Grid>

					<Grid item xs={6}>

						<TextField
							size="small"
							name="alternativeEmail"
							variant="outlined"
							label="Alternative Email Address"
							placeholder="Alternatibong Email Address"
							value={postData.alternativeEmail}
							fullWidth
							onChange={(e) => setPostData({ ...postData, alternativeEmail: e.target.value })}
						/>

					</Grid>

				</Grid>

			</Container>

			<div class="card-body" className={classes.titleCardBackground}>
				<Container className={classes.titleCard}>
					<h5>Information Security Event Description</h5>
				</Container>
			</div><br />

			<Container classname={classes.reportForm}>
				{/* CHECKBOX SECTION */}
				{/* Title Card */}

				<h5 className={classes.reportForm}>Description of the Event</h5><br />
				<h6 className={classes.reportForm}>What Occured? <span className={classes.italic}>(Anong nangyari?)</span></h6>


				<Grid container className={classes.reportForm}>
					<Grid item xs={6} >
						<LightTooltip title="Definition: Temporary loss of network connectivity or services within the data or computer system."
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="lossOfService"
								value={postData.lossOfService}
								onChange={(e) => setPostData({ ...postData, lossOfService: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Loss of Service"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Kawalan ng Serbisyo)</span>
					</Grid>


					<Grid item xs={6}>
						<LightTooltip title="Definition: An inability of a program and/or an equipment to process that results to failures "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="systemAndSoftwareMalfunction"
								value={postData.systemAndSoftwareMalfunction}
								onChange={(e) => setPostData({ ...postData, systemMalfunction: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="System/Software Malfunction"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pinsala sa Sistema o Software)</span>
					</Grid>

					<Grid item xs={6}>
						<LightTooltip title="Definition: A violation of rules/policies"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="accessAndComplianceViolation"
								value={postData.accessAndComplianceViolations}
								onChange={(e) => setPostData({ ...postData, accessViolation: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Access and Compliance Violations"
								labelPlacement="end"
							/>
							</LightTooltip>
							<span className={classes.italic}>(Paglabag sa Katuparan at Access)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Overloading of data resulting to crash, inaccessibility, and failure"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="systemOverload"
								value={postData.systemOverload}
								onChange={(e) => setPostData({ ...postData, systemOverload: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="System Overload"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Labis na Karga ng Sistema)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Unauthorized access to sensitive documents and computer files causing hacks and theft of sensitive information"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="physicalSecurityBreach"
								value={postData.physicalSecurityBreach}
								onChange={(e) => setPostData({ ...postData, physicalSecurityBreach: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Physical/Security Breach"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Paglabag sa Pisikal na Seguridad)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Unauthorized and unwanted changes resulting to abnormal behaviors and failures"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="uncontrolledSystemChanges"
								value={postData.uncontrolledSystemChanges}
								onChange={(e) => setPostData({ ...postData, uncontrolledSystemChanges: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Uncontrolled System Changes"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Di Inaasahang Pagbabago sa Sistema)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Threatening the security or functionality of the application, host, or network caused by intrusion or cyber attack."
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="intrusionAttempt"
								value={postData.intrusionAttempt}
								onChange={(e) => setPostData({ ...postData, intrusionAttempt: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Intrusion Attempt"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Tangkang Intrusyon)</span>
					</Grid>
					<Grid item xs={6}>
						<div>

							<FormControlLabel for="checkBox"

								name="others1Check"
								value={postData.others1Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"

								
							/>
							<span className={classes.italic}>(Iba pang Dahilan)</span>
							<TextField
								id="others1Text"
								name="others1Text"
								value={postData.others1Text}
								onChange={(e) => setPostData({ ...postData, others1Text: e.target.value })}
								disabled={postData.others1Disabled}
							/>


						</div>
						
					</Grid>
				</Grid>

				<br /><h6 className={classes.reportForm}>How it Occured? <span className={classes.italic}>(Paano nangyari?)</span></h6>



				{/* How Occured */}
				<Grid container className={classes.reportForm}>
					<Grid item xs={6}>
						<LightTooltip title="Definition: An attempt to exploit a computer system intended to cause financial or personal gain."
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="fraudHacking"
								value={postData.fraudHacking}
								onChange={(e) => setPostData({ ...postData, fraud: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Fraud / Hacking"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pandaraya o Paghack)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Any tangible injury to a property"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="physicalDamage"
								value={postData.physicalDamage}
								onChange={(e) => setPostData({ ...postData, sabotagePhysicalDamage: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Physical Damage"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pisikal na Pinsala)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Error made by the human user of a complex system."
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="userError"
								value={postData.userError}
								onChange={(e) => setPostData({ ...postData, userError: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="User Error"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pagkakamali ng Gumagamit)</span>
					</Grid>

					<Grid item xs={6}>
						<LightTooltip title="Definition: Malfunction within the electronic circuits or components (disks, tapes) of a computer system."
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="hardwareFailure"
								value={postData.hardwareFailure}
								onChange={(e) => setPostData({ ...postData, hardwareFailure: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Hardware Failure"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pagpalpak ng Hardware)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: When the user perceives that the applications used has failed to deliver the expected result."
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="softwareFailure"
								value={postData.softwareFailure}
								onChange={(e) => setPostData({ ...postData, softwareFailure: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Software Failure"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pagpalpak ng Software)</span>
					</Grid>
					<Grid item xs={6}>
						<div>
							<FormControlLabel
								name="others2Check"
								value={postData.others2Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"
							/>
							<span className={classes.italic}>(Iba pang Dahilan)</span>
							<TextField
								name="others2Text"
								value={postData.others2Text}
								onChange={(e) => setPostData({ ...postData, others2Text: e.target.value })}
								disabled={postData.others2Disabled}
							/>
						</div>
						

					</Grid>
				</Grid>



				{/* Why Occured Section */}
				<br /><h6 className={classes.reportForm}>Why it Occured ? <span className={classes.italic}>(Bakit nangyari?)</span></h6>


				<Grid container className={classes.reportForm}>
					<Grid item xs={6}>
						<LightTooltip title="Definition: There is a clear reason for the attack."
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="deliberateIntentional"
								value={postData.deliberateIntentional}
								onChange={(e) => setPostData({ ...postData, deliberateIntentional: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Deliberate or Intentional"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Sinadya)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: The intent is to cause damage or harm to people or system."
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="actualAttack"
								value={postData.actualAttack}
								onChange={(e) => setPostData({ ...postData, actualAttack: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Actual Attack"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Aktwal na Pag-atake)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: The damage occured unexpected, unintentional, and purely by chance."
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="accidental"
								value={postData.accidental}
								onChange={(e) => setPostData({ ...postData, accidental: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Accidental"
								labelPlacement="end"
							/></LightTooltip>
						<span className={classes.italic}>(Di Sinasadya)</span>
					</Grid>
					<Grid item xs={6}>
						<div>
							<FormControlLabel
								name="others3Check"
								value={postData.others3Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"
							/>
							<span className={classes.italic}>(Iba pang Dahilan)</span>
							<TextField
								name="others3Text"
								value={postData.others3Text}
								onChange={(e) => setPostData({ ...postData, others3Text: e.target.value })}
								disabled={postData.others3Disabled}
							/>
						</div>
						
					</Grid>
				</Grid>

				<br />
				<h6 className={classes.reportForm}>Components Affected Sections <span className={classes.italic}>(Seksyon ng mga Apektadong Bahagi)</span></h6>



				{/* Components Affected */}
				<Grid container className={classes.reportForm}>
					<Grid item xs={6}>
						<LightTooltip title="Definition: A person or a body of person with a particular purpose or business"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="peopleOrg"
								value={postData.peopleOrg}
								onChange={(e) => setPostData({ ...postData, peopleOrg: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="People/Organization"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Mga Tao o Organisasyon)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Facts provided by something or someone "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="information"
								value={postData.information}
								onChange={(e) => setPostData({ ...postData, information: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Information"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Impormasyon)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Materials used to run a specific component (machinery, wirings, equipments, tools, etc.)"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel

								name="hardware"
								value={postData.hardware}
								onChange={(e) => setPostData({ ...postData, hardware: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Hardware"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pisikal na Kagamitan)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Programs and other operating systems equipped to operate a computer"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="software"
								value={postData.software}
								onChange={(e) => setPostData({ ...postData, software: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Software"
								labelPlacement="end"
							/>
						</LightTooltip>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: The methods and services provided by your application or computer "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="resourcesServices"
								value={postData.resourcesServices}
								onChange={(e) => setPostData({ ...postData, resources: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Resources and Services"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Serbisyo at mga Mapagkukunan)</span>
					</Grid>
					<Grid item xs={6}>

						<div>
							<FormControlLabel
								name="others4Check"
								value={postData.others4Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Other"
								labelPlacement="end"
							/>	
							<span className={classes.italic}>(Iba pang Dahilan)</span>
							<TextField
								name="others4Text"
								value={postData.others4Text}
								onChange={(e) => setPostData({ ...postData, others4Text: e.target.value })}
								disabled={postData.others4Disabled}
							/>
						</div>
					
					</Grid>
				</Grid>

				{/* Adverse Business Impacts */}
				<br /><h6 className={classes.reportForm}>Adverse Business Impacts <span className={classes.italic}>(Masamang Epekto sa Negosyo)</span></h6>

				{/* Components Affected */}
				<Grid container className={classes.reportForm}>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Basically, this is a loss of money due to failures or the incident"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="financialLoss"
								value={postData.financialLoss}
								onChange={(e) => setPostData({ ...postData, financialLoss: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Financial Loss"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Kawalang Pinansal)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Recorded individual identity "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="personalInformation"
								value={postData.personalInformation}
								onChange={(e) => setPostData({ ...postData, personalInformation: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Personal Information"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Personal na Impormasyon)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Affection of normal operations due to the failures caused by the cyber incident"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="disruptionToBusiness"
								value={postData.disruptionToBusiness}
								onChange={(e) => setPostData({ ...postData, disruptionToBusiness: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Disruption to Business Operations"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pagkasira sa Operasyon ng Negosyo)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: A loss trust and perception towards the affected"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="lossOfReputation"
								value={postData.lossOfReputation}
								onChange={(e) => setPostData({ ...postData, lossOfReputation: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Loss of Reputation"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pagkawala ng Reputasyon o Dangal)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Required lawful regulations and policies applied to a project, services and/or performance "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="legalAndRegulatory"
								value={postData.legalAndRegulatory}
								onChange={(e) => setPostData({ ...postData, legalAndRegulatory: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Legal and Regulatory Obligations"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Legal at Regulasyong Tungkulin)</span>
					</Grid>
					<Grid item xs={6}>
						<div>
							<FormControlLabel
								name="others5Check"
								value={postData.others5Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"
							/>
							<span className={classes.italic}>(Iba pang Dahilan)</span>
							<TextField
								name="others5Text"
								value={postData.others5Text}
								onChange={(e) => setPostData({ ...postData, others5Text: e.target.value })}
								disabled={postData.others5Disabled}
								multiline
							/>
						</div>	
					</Grid>
				</Grid>

				<br /><h6 className={classes.reportForm}>Vulnerabilities Identified <span className={classes.italic}>(Mga Kahinaang Natukoy)</span></h6>

				{/* Vulnerabilities Identified */}
				<Grid container className={classes.reportForm}>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Personal, business, and other sensitive information were leaked"
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="informationVulnerability"
								value={postData.informationVulnerability}
								onChange={(e) => setPostData({ ...postData, informationVulnerability: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Information"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Impormasyon)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Personal or componay reputation is in danger "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="reputationAndImage"
								value={postData.reputationAndImage}
								onChange={(e) => setPostData({ ...postData, reputationAndImage: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Reputation and Image"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Dignidad at Imahe)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Employee, customer, or business owner's life is in danger "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="people"
								value={postData.people}
								onChange={(e) => setPostData({ ...postData, people: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="People"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Mga Tao)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Systematic vulnerabilities among the company "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="processesProcedures"
								value={postData.processesProcedures}
								onChange={(e) => setPostData({ ...postData, processesProcedures: e.target.checked})}
								control={<Checkbox color="primary" />}
								label="Processes and Guidelines"
								labelPlacement="end"
								
							/>
						</LightTooltip>
						<span className={classes.italic}>(Mga Proseso at Gabay)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Tangible assets are in danger "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="physical"
								value={postData.physical}
								onChange={(e) => setPostData({ ...postData, physical: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Physical (e.g. Hardware)"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Pisikal)</span>
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Business services might be halted "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel 
								name="servicesVulnerability"
								value={postData.servicesVulnerability}
								onChange={(e) => setPostData({ ...postData, servicesVulnerability: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Services"
								labelPlacement="end"
							/>
						</LightTooltip>
						<span className={classes.italic}>(Serbisyo)</span>						
					</Grid>
					<Grid item xs={6}>
						<LightTooltip title="Definition: Software applications might be vulnerable to hacking "
							placement="right" arrow interactive TransitionComponent={Zoom}>
							<FormControlLabel
								name="software"
								value={postData.software}
								onChange={(e) => setPostData({ ...postData, software: e.target.checked })}
								control={<Checkbox color="primary" />}
								label="Software (e.g. computer program)"
								labelPlacement="end"
							/>
						</LightTooltip>
					</Grid>
					<Grid item xs={6}>
						<div>
							<FormControlLabel
								name="others6Check"
								value={postData.others5Check}
								onChange={handleChange}
								control={<Checkbox color="primary" />}
								label="Others"
								labelPlacement="end"
							/>
							<span className={classes.italic}>(Iba pang Dahilan)</span>
							<TextField
								name="others6Text"
								value={postData.others6Text}
								onChange={(e) => setPostData({ ...postData, others6Text: e.target.value })}
								disabled={postData.others6Disabled}
							/>
						</div>
						
					</Grid>
				</Grid>
			</Container>

			{/* Information Security Event Details */}
			<div class="card-body" className={classes.titleCardBackground}>
				<Container className={classes.titleCard}>
					<h5>Information Security Event Details</h5>
				</Container>
			</div>

			<Container classname={classes.reportForm}>

				{/* Date and Time Pickers */}
				<Grid container>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid item xs={6}>
							<br /><h6>Date the Event Occured <span className={classes.italic}>(Petsa kung Kailan Nangyari)</span></h6>

							<DatePicker
								margin="normal"
								name="dateOccured"
								label="Enter Date"
								format="MM/dd/yyyy"
								value={postData.dateOccured}
								maxDate={new Date()}
								onChange={date => setPostData({ ...postData, dateOccured: date.toString() })}

							/>
						</Grid>

						<Grid item xs={6}>
							<br /><h6>Time the Event Occured <span className={classes.italic}>(Oras kung Kailan Nangyari)</span></h6>

							<TimePicker
								margin="normal"
								name="timeOccured"
								label="Enter Time"
								value={postData.timeOccured}
								maxDate={new Date()}
								onChange={time => setPostData({ ...postData, timeOccured: time.toString() })}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
				</Grid>

				<Grid container>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid item xs={6}>
							<br /><h6>Date the Event Discovered <span className={classes.italic}>(Petsa kung Kailan Nalaman)</span></h6>

							<DatePicker
								margin="normal"
								name="dateDiscovered"
								label="Enter Date"
								format="MM/dd/yyyy"
								value={postData.dateDiscovered}
								maxDate={new Date()}
								onChange={date => setPostData({ ...postData, dateDiscovered: date.toString() })}
							/>
						</Grid>

						<Grid item xs={6}>
							<br /><h6>Time the Event Discovered <span className={classes.italic}> (Oras kung Kailan Nalaman)</span></h6>

							<TimePicker
								margin="normal"
								name="timeDiscovered"
								label="Enter Time"
								value={postData.timeDiscovered}
								maxDate={new Date()}
								onChange={time => setPostData({ ...postData, timeDiscovered: time.toString() })}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<div>
							<br /><h6>Is the event over? <span className={classes.italic}>Tapos na ba ang pangyayari?</span></h6>

							<div>
								<RadioGroup row>
									<FormControlLabel
										name="radButtonYes"
										control={<Radio color="primary" />}
										value="yes"
										onChange={(e) => setPostData({ ...postData, dateAndTimeDisabled: false })}
										label="Yes"
									/>
									<FormControlLabel
										name="radButtonNo"
										control={<Radio color="primary" />}
										label="No"
										value="no"
										onChange={(e) => setPostData({ ...postData, dateAndTimeDisabled: true })}
									/>
								</RadioGroup>

							</div>

						</div>

					</Grid>

				</Grid>

				<Grid container>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid item xs={6}>
							<br /><h6>Date the Event Ended <span className={classes.italic}>(Petsa kung Kailan Natapos)</span></h6>

							<DatePicker
								margin="normal"
								name="dateEnded"
								label="Enter Date"
								format="MM/dd/yyyy"
								value={postData.dateEnded}
								maxDate={new Date()}
								onChange={date => setPostData({ ...postData, dateEnded: date.toString() })}
								disabled={postData.dateAndTimeDisabled}
							/>
						</Grid>

						<Grid item xs={6}>
							<br /><h6>Time the Event Ended <span className={classes.italic}>(Oras kung Kailan Natapos)</span></h6>
							<TimePicker
								margin="normal"
								name="timeEnded"
								label="Enter Time"
								value={postData.timeEnded}
								maxDate={new Date()}
								onChange={time => setPostData({ ...postData, timeEnded: time.toString() })}
								disabled={postData.dateAndTimeDisabled}
							/>
						</Grid>
					</MuiPickersUtilsProvider>
				</Grid><br />

				<h6>Brief Summary Report <span className={classes.italic}>(Maikling Buod ng Ulat)</span></h6>

				{/* Summary Report */}
				<Grid container>
					<Grid item xs={8}>
						<TextField
							minRow="3"
							name="briefSummary"
							label="Write here"
							value={postData.briefSummary}
							onChange={(e) => setPostData({ ...postData, briefSummary: e.target.value })}
							variant="outlined"
							fullWidth
							multiline
							size="large"
						/>

					</Grid>

				</Grid>

				{/**Backend working uploading ng files png jpeg pdf word by using base64 to png/pdf/etc*/}
				<div className={classes.fileInput}>
					<h6>Please upload documents about the incident (Max upload size of 500KB)<span className={classes.italic}> (Mangyaring mag-upload ng iyong dokumento patungkol sa insidenteng naganap)</span></h6>

					<FileBase type="file" multiple={false}
						onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

				
				{/*Recaptcha */}
				<Recaptcha
					sitekey="6LfGXlYcAAAAAJsC6y6p1bHZscXoynk5-tu2R81Y"
    				render="explicit"
    				onloadCallback={callback}
					verifyCallback={verifyCallback}
  				/>

				{/* Submit Button */}
				<div>
					<button className={classes.submitButton}> Submit</button>


					{/* Submission Confirmation Dialog */}
					<Dialog
						open={open}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby="alert-dialog-slide-title"
						aria-describedby="alert-dialog-slide-description"
					>
						<DialogTitle id="alert-dialog-slide-title">{"Are you sure you want to Submit?"}</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-slide-description">
								Make sure that all of the information above are correct.
                            </DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button color="primary" onClick={handleClose}>
								No, I want to check again
                            </Button>
							<Button onClick={handleSubmit} color="primary" href="./report">
								Yes, I want to submit the report
                            </Button>
						</DialogActions>
					</Dialog>
					</div>
			</Container>
		</form>
	);
}

export default Form;
