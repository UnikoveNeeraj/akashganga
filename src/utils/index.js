import { toast } from "react-toastify";


export const handleShowPassword = (setShow, show, type) => {
  if (type) {
    return setShow({ ...show, [type]: !show[type] })
  }
  return setShow(!show);
};

export const councilMembers = ['/member-details/rishi-kalpal', '/member-details/nandini', '/member-details/suchiradipta-bhattacharjee', '/member-details/sriparna-basu', '/member-details/kumaraswamy']

export const getSpecializationOptions = (data = [], id) => {
  const record = data.find(a => a.subjectName === id)
  return record ? record.specializationId.map(a => a.specialization) : [];
}

export const validationPassword = (password) => {
  var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
}

export const validateEmail = (mail) => {
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g); // eslint-disable-line
  return regex.test(String(mail).toLowerCase());
};

export const validatePhoneNumber = (phoneNo) => {
  return phoneNo?.replace(new RegExp(/[^\d]/, "ig"), "");
};

export const getClassName = (data, field) => {
  return data[field] ? "" : "hidden";
};

export const genericError = (error) => {
  toast.error(
    error?.mesaage || error?.message || "Something went wrong. Please try again later."
  );
};
export const errorState = (error, setError) => {
  return setError(error)
}

export const checkUrl = (url) => {
  // const regexforhttp = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)
  // const regex =new RegExp(/(ftp|http|https):\/\/?www\.(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)

  // const regex =new RegExp(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/)
  // const regex =new RegExp(/(?:http[s]?\/\/)?(?:[\w\-]+(?::[\w\-]+)?@)?(?:[\w\-]+\.)+(?:[a-z]{2,4})(?::[0-9]+)?(?:\/[\w\-\.%]+)*(?:\?(?:[\w\-\.%]+=[\w\-\.%!]+&?)+)?(#\w+\-\.%!)?/)
  // return regex.test(url)&&regexforhttp.test(url)
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
   return !!pattern.test(url);
 // const regex =new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi)
  //return regex.test(url)

}

export const getSpecializationNames = (data = [], subjectId = "", ids = []) => {
  return ""
}

export const unPublishToolTip = "Please add all mandatory fields and save the data before Publishing the Profile. ";
export const tooltipMsg = () => {
  return (
    <ul>
      <h4 className="text-center">PASSWORD CRITERIA</h4>
      <li>At least 8 characters —the more characters, the better.</li>
      <li>A mixture of both uppercase and lowercase letters.</li>
      <li>A mixture of letters and numbers.</li>
      <li>Inclusion of at least one special character, e.g., ! @ # ? ]</li>
    </ul>
  )
}
const getProfileEducation = (educationData = {}) => {
  return {
    "qualification": educationData.qualification,
    "subject": educationData.subject,
    "specialization": educationData.specialization
  }
}

const getProfileAffiliations = (affiliations = []) => {
  return affiliations.map(record => {
    return {
        "order": record.order,
        "name": record.name,
        "url": record.url,
        "department": record?.department,
        "state": record.state,
        "city": record.city,
        "subject": record.subject,
        "specialization": record?.specialization,
        "pincode": record?.pincode || undefined
    }
  })
}

const getSubjectOfInterest = (subjects = []) => {
  return subjects.map(sub => {
    return {
      "interestedsubject": sub?.interestedsubject,
      "specialization": sub?.specialization
    }
  })
}

export const editProfileData = (details = {}) => {
  const { email, isSetupProfile, publishProfile, title, fullName, phoneNumber, gender, workType, Education, affiliation, subjectOfInterest, profilePicture, secondaryEmail } = details;
  return {
    "isSetupProfile": isSetupProfile,
    "publishProfile": publishProfile,
    "title": title,
    "fullName": fullName,
    "email": email,
    "secondaryEmail": secondaryEmail,
    "phoneNumber": phoneNumber,
    "gender": gender,
    "workType": workType,
    "Education": getProfileEducation(Education),
    "affiliation": {
        "affiliation_type": affiliation.affiliation_type,
        "affiliations": getProfileAffiliations(affiliation.affiliations)
    },
    "subjectOfInterest": getSubjectOfInterest(subjectOfInterest),
    "profilePicture": profilePicture
}
}

export const getQualificationWithId = (data = [], id = '') => {
  const record = data.find(a => a._id === id);
  return record ? record.qualification : "";
}

export const affiliationTitle = {
  1: "Primary Affiliation",
  2: "Secondary Affiliation",
  3: "Tertiary Affiliation"
}

export const verifyMsg=()=>{
  return (
    <div className="text-start" >To verify your affiliation, the URL of the institution<br /> needs to be verified by the system. Failing this, the<br /> registration process will not move forward.</div>
  )
}

export const affiliationFields = ['affiliatedDepartment', 'city', 'pincode', 'state', 'subject', 'universitySchoolCompany'];
const validateAffiliations = (affiliations = []) => {
  let publish = true;
  for (let i = 0; i < affiliations.length; i++) {
    if (!publish) { break; }
    let affRecord = affiliations[i]
    affRecord.affiliatedDepartment = affRecord.department ? affRecord.department : affRecord.affiliatedDepartment;
    affRecord.universitySchoolCompany = affRecord.name ? affRecord.name : affRecord.universitySchoolCompany;
    if((affRecord.heading === 'Secondary Affiliation') || (affRecord.heading === "Tertiary Affiliation") || parseInt(affRecord.order) > 1) {
      if(!affRecord.url && !affRecord.universitySchoolCompany) {
        break;
      }
    }

    let isPublishable = true;
    for (let j = 0; j < affiliationFields.length; j++) {
      if (!isPublishable) { break; }
      isPublishable = affRecord[affiliationFields[j]] ? true : false      
    }
    if(affRecord?.specialization?.length < 1) {
      isPublishable = false;
    }

    if(affRecord.url && !affRecord.verified) {
      isPublishable = false;
    }
    publish = isPublishable;
  }

  return publish;
}

const validateSubject = (subjects = []) => {
  var publish = true;
  if(subjects.length < 1) {
    publish = false;
  }

  for (let i = 0; i < subjects.length; i++) {
    if (!publish) { break; }
    let subject = subjects[i] || {};
    if(!subject?.subject || subject?.specialization?.length < 1) {
      publish = false;
    }
  }
  return publish;
}


const validateEducation = (data = {}) => {
  let publish = true;
  const { qualification, subject, specialization = []} = data;
  if(!qualification || !subject || specialization.length < 1) {
    publish = false
  }
  return publish
}

const mandatoryFields = ['email', 'phoneNumber', 'fullName', 'title', 'workType', 'profilePicture']
// const aboutMandoryFields = ['professionalSummary', 'profilePicture', 'gender']

export const shuffleArray = (array) =>  {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));                    
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

export const getUnique = (values = []) => {
  return values.filter((value, index, array) => array.indexOf(value) === index).filter(a => a !== []);
}

export const isPublishable = (data) => {
  var publish = true;
  for (let i = 0; i < mandatoryFields.length; i++) {
    if (!publish) { break; }
    publish = data[mandatoryFields[i]] ? true : false
    if(data.nationality === 'outSideIndia' && mandatoryFields[i] === 'phoneNumber') {
      publish = true
    }
  }
  if(publish) {
    publish = validateAffiliations(data.affiliations)
  }
  // if(publish) {
  //   publish = validateSubject(data.subjects)
  // }

  if(publish) {
    publish = validateEducation(data.educationSection)
  }

  return publish
}