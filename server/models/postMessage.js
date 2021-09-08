import mongoose from 'mongoose'
//import '../models/server/frontEnd/client/src/ReportPage/ReportPage.js';
import { useState } from 'react';

/**const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

 const emailSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
  }),
    
const alternateSchema = new Schema({
  email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  }
})*/

//const dateO = dateOccured.ToString();

const pcspSchema = mongoose.Schema ({

    name: String,
    organization: String,
    address: String,
    primaryContact: Number,
    secondaryContact: Number,
    email: String,
    alternativeEmail: String,
   //email: emailSchema,
    //alternativeEmail: alternateSchema,
    
    //What Occured
      lossOfService: Boolean,
      accessAndComplianceViolations: Boolean,
		  systemAndSoftwareMalfunction: Boolean,
		  systemOverload: Boolean,
		  physicalSecurityBreach: Boolean,
		  uncontrolledSystemChanges: Boolean,
		  intrusionAttempt: Boolean,
      others1Check: Boolean,
      others1Text: String,
      
      //HOW OCCURED
		  fraudHacking: Boolean,
		  physicalDamage: Boolean,
		  userError: Boolean,
		  hardwareFailure: Boolean,
	  	softwareFailure: Boolean,
	  	others2Check: Boolean,
	  	others2Text: String, 
 
      //WHY OCCURED
      deliberateIntentional: Boolean,
      others3Check: Boolean,
      others3Text: String,
      actualAttack: Boolean,
      accidental: Boolean,

      briefSummary: String,

      //Component Affected Section
		  peopleOrg: Boolean,
		  hardware: Boolean,
		  software: Boolean,
	  	resourcesServices: Boolean,
	  	information: Boolean,
	  	others4Check: Boolean,
		  others4Text: String,    
 
      //Adverse Business Impacts
	  	financialLoss: Boolean,
	  	personalInformation: Boolean,
	  	lossOfReputation: Boolean,
	  	legalAndRegulatory: Boolean,
	  	disruptionToBusiness: Boolean,
	  	commercialAndEcons: Boolean,
	  	others5Check: Boolean,
	  	others5Text: String,  

      //Vulnerabilities Identified
      informationVulnerability: Boolean,
      people: Boolean,
      physical: Boolean,
      sofwareVulnerability: Boolean,
      reputationAndImage: Boolean,
      processesProcedures: Boolean,
      servicesVulnerability: Boolean,
      others6Check: Boolean,
      others6Text: String,   

      dateOccured: String,
      dateDiscovered: String,
      timeOccured: String,
      timeDiscovered: String,

      radButtonYes: Boolean,
      radButtonNo: Boolean,

      selectedFile: String,

      dateEnded: String,
      timeEnded: String, 
});



const PostMessage = mongoose.model('ReportPage', pcspSchema);

export default PostMessage;
