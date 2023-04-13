import { BASE_URL } from "../config";

export const fieldType = { tel: 10, otp: 1, pin: 6 };
export const titleOptions = ["Dr.", "Mr.", "Mrs.", "Ms."];
export const titleOptionsNew = [{key:"Dr.",value:"Dr."}, {key:"Mr.",value:"Mr."}, {key:"Mrs.", value:'Mrs.'}, {key:"Ms.",value:'Ms.'},{key:"Prof.",value:'Professor'}];

export const feedbackTextValues = {
  1: "Oh no! You are upset. Sorry to hear this. Please help us fix it",
  2: "So sorry to know that you are not pleased. Tell us why",
  3: "We are sorry you're not completely happy. How can we help?",
  4: "You are happy and we are smiling. Tell us what we did right!",
  5: "YAY!! This is what we live for. Tell us what delighted you!"
};
export const phoneField = "phoneNumber";
export const universitySchoolCompanyName = [
  "Stanford",
  "MIT",
  "Boston University",
  "Lancaster University",
];
export const stream = ["Subject", "Science", "Arts", "Business Studies"];
export const specialization = [
  "Select Specialization Field",
  "Human Resource",
  "Marketing",
  "Finance",
];
export const qualification = [
  "Qualification/Level",
  "Graduation",
  "Post Graduation",
];
export const workCategories = ["Select Category", "Dean"];
export const TypeOfArticle = [
  "Select Type Of Article",
  "Review Article",
  "Submit Article",
  "Edit Article",
];
export const RedirectURI = `http://localhost:8989/linkedin`;
export const affiliatedDepartments = ["Affiliated Department", "Dummy"];
export  const splitName=(fullName)=>{
  const [first] = fullName.split(' ')
  return first
}
export const profileIMG = (url = "") => {
  const imageName = url ? url.split("/").pop() : "";
  const imgURL = url && imageName ? `${BASE_URL}static/${imageName}` : "";
  return imgURL;
};
export const article = [
  {
    id: 1,
    heading: "Introduction",
    data: "",
  },
  {
    id: 2,
    heading: "Background",
    data: "",
  },
  {
    id: 3,
    heading: "Methodology",
    data: "",
  },
  {
    id: 4,
    heading: "Results",
    data: "",
  },
  {
    id: 5,
    heading: "Discussion",
    data: "",
  },
  {
    id: 6,
    heading: "Conclusion",
    data: "",
  },
  {
    id: 7,
    heading: "References",
    data: "",
  },
];

export const contactTitleOptions = [
  { key: "Title", value: "" },
  { key: "Dr.", value: "Dr" },
  { key: "Prof.", value: "Prof" },
  { key: "Mr.", value: "Mr" },
  { key: "Ms.", value: "Ms" },
  { key: "Mrs.", value: "Mrs" },
]

export const codeOptions = [
  {key: 'Code', value: ''},
  { key: '+91', value: '91'}
]

export const identityOptions = [
  { key: "How do you identify yourself?*", value: "" },
  { key: "Researcher", value: "Researchers" },
  { key: "Funder", value: "Funder" },
  { key: "Research Institution", value: "Research Institute" },
  { key: "Society", value: "Society" },
  { key: "Author", value: "Author" },
  { key: "Vendor", value: "Vendor" },
  { key: "Corporate", value: "Corporate" },
  { key: "Management", value: "Management" },
  { key: "Others", value: "Others" },
]

export const draftArticle = ['TITLE', 'ARTICLE TYPE', 'CREATED ON', 'LAST EDITED', 'STATUS', 'ACTIONS'];
export const underReviewArticle = ['TITLE', 'ARTICLE TYPE', 'SUBMITTED', 'STATUS'];
export const approvedArticle = ['TITLE', 'ARTICLE TYPE', 'APPROVED', 'ACTIONS'];
export const rejectedArticle = ['TITLE', 'ARTICLE TYPE', 'REJECTED', 'ACTIONS'];
export const publishedArticle = ['TITLE', 'ARTICLE TYPE', 'PUBLISHED', 'ACTIONS'];
