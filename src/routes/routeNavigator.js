import Login from "../containers/autherFlow/login";
import RichTextEditor from "../components/common/RichTextEditor";
import SunRichTextEditor from "../components/common/SunRichTextEditor";
import ForgotPassword from "../containers/autherFlow/forgotpassword";
import MobileLogin from "../containers/autherFlow/mobileLogin";
import Registration from "../containers/autherFlow/registration";
import ResetPassword from "../containers/autherFlow/resetpassword";
import VerifyOtp from "../containers/autherFlow/verifyotp";
import { PATH } from "./path";
import PersonalDetails from "../containers/autherFlow/personalDetails/PersonalDetails";
import PaymentDetails from "../containers/autherFlow/paymentDetails/PaymentDetails";
import PeDashboard from "../containers/autherFlow/pedashboard";
import PrDashboard from "../containers/autherFlow/prdashboard";
import reviewerDetails from "../containers/autherFlow/reviewerDetails";
import myServices from "../containers/autherFlow/myServices";
import mudraKosh from "../containers/autherFlow/mudraKosh";
import redingListing from "../containers/autherFlow/readingListing";
import peerArticleAuthor from "../containers/autherFlow/peerArticleAuthor";

/* eslint-disable */
import MyProfile from "../containers/autherFlow/myProfile/MyProfile";
import MyProfileEdit from "../containers/autherFlow/myProfile/Edit";
import SubmitArticle from "../containers/autherFlow/submitArticle";
import VerifyEmail from "../containers/autherFlow/verifyEmail";
import PreviewProfile from "../containers/autherFlow/previewProfile";
import HomePage from "../containers/Homepage";
import About from "../containers/About";
import ContactUs from "../containers/ContactUs";
import ResourceCenter from "../containers/ResourceCenter";
import PlayList from "../containers/PlayList";
import Error from "../containers/Error";
import PPT from "../containers/PPT";
import FAQ from "../containers/FAQ";
import Cookie from "../containers/Cookie";
import Counsil from "../containers/Council";
import Advisory from "../containers/Advisory";
import WIP from "../containers/WIP";
import WIPAkashganga from "../containers/WIPAkashganga"
import Video from "../containers/Videos";
import MemberDetails from "../containers/MemberDetails";
import PrivacyPolciy from "../containers/PrivacyPolicy";
import Terms from "../containers/Terms";
import Teams from "../containers/Teams";
import FounderDetails from "../containers/FounderDetails";
import JagdishSeth from "../containers/MemberDetails/jagdishSeth";
import AmitabhRajan from "../containers/MemberDetails/AmitabhRajan";
import ProfGaur from "../containers/MemberDetails/ProfGaur";
import RajivBhatia from "../containers/MemberDetails/RajivBhatia";
import Mitra from "../containers/MemberDetails/BhimaryaMatri";
import HarivashChaturvedi from "../containers/MemberDetails/HarivanshChaturvedi";
import Suchira from "../containers/MemberDetails/Suchira";
import AnmolPandit from "../containers/MemberDetails/AnmolPandit";
import Asha from "../containers/MemberDetails/Asha";
import BharatWaklu from "../containers/MemberDetails/BharatWaklu";
import Nandini from "../containers/MemberDetails/Nandini";
import RishiKapal from "../containers/MemberDetails/RishiKapal";
import SadhanaRaut from "../containers/MemberDetails/SadhanaRaut";
import SanjayShrivastava from "../containers/MemberDetails/SanjayShrivastava";
import SubirVerma from "../containers/MemberDetails/SubirVerma";
import SidMitra from "../containers/MemberDetails/SidMitra";
import PritamSingh from "../containers/MemberDetails/PritamSingh";
import Kumaraswamy from "../containers/MemberDetails/Kumaraswamy";
import SripanaBasu from "../containers/MemberDetails/SripanaBasu";
import Sam from "../containers/MemberDetails/Sam";
import NeerajKapoor from "../containers/MemberDetails/NeerajKapoor";
import RupamanjariGhosh from "../containers/MemberDetails/RupamanjariGhosh";
import AnkurSegon from "../containers/MemberDetails/AnkurSegon";
import RajivSingla from "../containers/MemberDetails/RajivSingla";
import DashboardHome from "../containers/Dashboard/Home";
import PublishingEditor from "../containers/Dashboard/PublishingEditor";
import PeerReviewer from "../containers/Dashboard/PeerReviewer";
import ViewArticle from "../containers/Dashboard/PublishingEditor/ViewArticle";
import Dashboard from "../containers/autherFlow/dashboard";
import AddArticle from "../containers/Dashboard/AddArticle";
import EditArticle from "../containers/Dashboard/EditArticle";
import ViewReport from "../containers/Dashboard/Article/ViewReport";
import MyArticle from "../containers/Dashboard/MyArticle";

export const publicRouteNavigators = [
    {
        name: "login",
        path: PATH.LOGIN,
        PropComponent: Login,
    },
    {
        name: "Editor",
        path: PATH.EDITOR,
        PropComponent: RichTextEditor,
    },
    {
        name: "forgotPassword",
        path: PATH.FORGOTPASSWORD,
        PropComponent: ForgotPassword,
    },
    {
        name: "mobileLogin",
        path: PATH.MOBILELOGIN,
        PropComponent: MobileLogin,
    },
    {
        name: "registration",
        path: PATH.REGISTRATION,
        PropComponent: Registration,
    },
    {
        name: "reset-password",
        path: PATH.RESETPASSWORD,
        PropComponent: ResetPassword,
    },
    {
        name: "verifyOtp",
        path: PATH.VERIFYOTP,
        PropComponent: VerifyOtp,
    },
    {
        name: "verifyEmail",
        path: PATH.VERIFYEMAIL,
        PropComponent: VerifyEmail,
    },
];

export const protectedRouteNavigators = [
    {
        name: "personalDetails",
        path: PATH.PERSONAL_DETAILS,
        PropComponent: PersonalDetails,
    },
    {
        name: "paymentDetails",
        path: PATH.PAYMENT_DETAILS,
        PropComponent: PaymentDetails,
    },
    {
        name: "dashboard",
        path: PATH.DASHBOARD.DASHBOARD,
        PropComponent: Dashboard
    },
    {
        name: "submitArticle",
        path: PATH.DASHBOARD.SUBMIT_ARTICLE,
        PropComponent: AddArticle,
    },
    {
        name: "editArticle",
        path: PATH.DASHBOARD.EDIT_ARTICLE,
        PropComponent: EditArticle,
    },
    {
        name: "myArticle",
        path: PATH.DASHBOARD.MY_ARTICLE_DRAFT,
        PropComponent: MyArticle,
    },
    {
        name: "myArticle",
        path: PATH.DASHBOARD.MY_ARTICLE_UNDER_REVIEW,
        PropComponent: MyArticle,
    },
    {
        name: "myArticle",
        path: PATH.DASHBOARD.MY_ARTICLE_APPROVED,
        PropComponent: MyArticle,
    },
    {
        name: "myArticle",
        path: PATH.DASHBOARD.MY_ARTICLE_REJECTED,
        PropComponent: MyArticle,
    },
    {
        name: "myArticle",
        path: PATH.DASHBOARD.MY_ARTICLE_PUBLISHED,
        PropComponent: MyArticle,
    },
    {
        name: "viewReport",
        path: PATH.DASHBOARD.ARTICLE.VIEW_REPORT,
        PropComponent: ViewReport,
    },
    {
        name: "peerReviewer",
        path: PATH.DASHBOARD.PEER_REVIEWER,
        PropComponent: PrDashboard,
    },
    {
        name: "publishingEditor",
        path: PATH.DASHBOARD.PUBLISHING_EDITOR,
        PropComponent: PeDashboard,
    },
    // {
    //     name: "authorDashboard",
    //     path: PATH.AUTHORDASHBOARD,
    //     PropComponent: AuthorDashboard,
    // },
    {
        name: "myservices",
        path: PATH.MYSERVICES,
        PropComponent: myServices,
    },{
        name: "articleAuthor",
        path: PATH.ARTICLEAUTHOR,
        PropComponent: peerArticleAuthor,
    },
    {
        name: "mudraKosh",
        path: PATH.MUDRAKOSH,
        PropComponent: mudraKosh,
    },
    {
        name: "redingListing",
        path: PATH.READINGLISTING,
        PropComponent: redingListing,
    },
    {
        name: "myProfile",
        path: PATH.MYPROFILE,
        PropComponent: MyProfile,
    },
    {
        name: "editProfile",
        path: PATH.EDITPROFILE,
        PropComponent: MyProfileEdit
    },
    {
        name: "submitArticle",
        path: PATH.SUBMITARTICLE,
        PropComponent: SubmitArticle,
        props: { mode: 'show' }
    },
    {
        name: "editArticle",
        path: PATH.EDITARTICLE,
        PropComponent: SubmitArticle,
        props: { mode: 'edit' }

    },
    {
        name: "previewProfile",
        path: PATH.PREVIEWPROFILE,
        PropComponent: PreviewProfile
    },
    {
        name: "sun-editor",
        path: PATH.SUNEDITOR,
        PropComponent: SunRichTextEditor
    }
];


export const allUserRouteNavigators = [
    {
        name: "home",
        path: PATH.HOMEPAGE,
        PropComponent: HomePage,
    },
    {
        name: "teams",
        path: PATH.TEAMS,
        PropComponent: Teams,
    },
    {
        name: "founder-details",
        path: PATH.FOUNDER_DETAILS,
        PropComponent: FounderDetails,
    },
    {
        name: "terms",
        path: PATH.TERMS,
        PropComponent: Terms,
    },
    {
        name: "privacy-policy",
        path: PATH.PRIVACY_POLICY,
        PropComponent: PrivacyPolciy,
    },
    {
        name: "member-details",
        path: PATH.MEMBER_DETAILS,
        PropComponent: MemberDetails,
    },
    {
        name: "jagdish-seth",
        path: PATH.MEMBERS.JAGDISH_SETH,
        PropComponent: JagdishSeth,
    },
    {
        name: "harivansh-chaturvedi",
        path: PATH.MEMBERS.HARIVANSH_CHATURVEDI,
        PropComponent: HarivashChaturvedi,
    },
    {
        name: "amitabh-rajan",
        path: PATH.MEMBERS.AMITABH_RAJAN,
        PropComponent: AmitabhRajan,
    },
    {
        name: "prof-ramesh-gaur",
        path: PATH.MEMBERS.PROF_GAUR,
        PropComponent: ProfGaur,
    },
    {
        name: "rajiv-bhatia",
        path: PATH.MEMBERS.RAJIV_BHATIA,
        PropComponent: RajivBhatia,
    },
    {
        name: "bhimaraya-matri",
        path: PATH.MEMBERS.BHIMARYA_MATRI,
        PropComponent: Mitra,
    },
    {
        name: "suchiradipta-bhattacharjee",
        path: PATH.MEMBERS.SUCHIRA,
        PropComponent: Suchira,
    },
    {
        name: "anmol-pandit",
        path: PATH.MEMBERS.ANMOL_PANDIT,
        PropComponent: AnmolPandit,
    },
    {
        name: "asha",
        path: PATH.MEMBERS.ASHA,
        PropComponent: Asha,
    },
    {
        name: "bharat-waklu",
        path: PATH.MEMBERS.BHARAT_WAKLU,
        PropComponent: BharatWaklu,
    },
    {
        name: "nandini",
        path: PATH.MEMBERS.NANDINI,
        PropComponent: Nandini,
    },
    {
        name: "rishi-kalpal",
        path: PATH.MEMBERS.RISHI_KALPAL,
        PropComponent: RishiKapal,
    },
    {
        name: "sadhana-raut",
        path: PATH.MEMBERS.SADHANA_RAUT,
        PropComponent: SadhanaRaut,
    },
    {
        name: "sanjay-shrivastava",
        path: PATH.MEMBERS.SANJAY_SHRIVASTAVA,
        PropComponent: SanjayShrivastava,
    },
    {
        name: "subir-verma",
        path: PATH.MEMBERS.SUBIR,
        PropComponent: SubirVerma,
    },
    {
        name: "sriparna-basu",
        path: PATH.MEMBERS.SRIPANA_BASU,
        PropComponent: SripanaBasu,
    },
    {
        name: "sam",
        path: PATH.MEMBERS.SAM,
        PropComponent: Sam,
    },
    {
        name: "rupamanjari-ghosh",
        path: PATH.MEMBERS.RUPAMANJARI_GHOSH,
        PropComponent: RupamanjariGhosh,
    },
    {
        name: "ankur-segon",
        path: PATH.MEMBERS.ANKUR_SEGON,
        PropComponent: AnkurSegon,
    },
    {
        name: "rajiv-singla",
        path: PATH.MEMBERS.RAJIV_SINGLA,
        PropComponent: RajivSingla,
    },
    {
        name: "neeraj-kapoor",
        path: PATH.MEMBERS.NEERAJ_KAPOOR,
        PropComponent: NeerajKapoor,
    },
    {
        name: "kumaraswamy",
        path: PATH.MEMBERS.KUMARASWAMY,
        PropComponent: Kumaraswamy,
    },
    {
        name: "late-pritam-singh",
        path: PATH.MEMBERS.PRITAM_SINGH,
        PropComponent: PritamSingh,
    },
    {
        name: "late-sid-mitra",
        path: PATH.MEMBERS.SID_MITRA,
        PropComponent: SidMitra,
    },
    {
        name: "browse",
        path: PATH.BROWSE,
        PropComponent: Video,
    },
    {
        name: "wip-kaashi",
        path: PATH.WIP,
        PropComponent: WIP,
    },
    {
        name: "wip-akashganga",
        path: PATH.WIP_AKASHGANGA,
        PropComponent: WIPAkashganga
    },
    {
        name: "advisory",
        path: PATH.ADVISORY,
        PropComponent: Advisory,
    },
    {
        name: "contactus",
        path: PATH.CONTACT_US,
        PropComponent: ContactUs,
    },
    {
        name: "resourcecenter",
        path: PATH.RESOURCE_CENTER,
        PropComponent: ResourceCenter,
    },
    {
        name: "playlist",
        path: PATH.PLAY_LIST,
        PropComponent: PlayList,
    },
    {
        name: "404",
        path: PATH.ERROR,
        PropComponent: Error,
    },
    {
        name: "presentations",
        path: PATH.FAQ,
        PropComponent: FAQ,
    },
    {
        name: "cookie",
        path: PATH.COOKIE,
        PropComponent: Cookie,
    },
    {
        name: "Council",
        path: PATH.COUNSIL,
        PropComponent: Counsil,
    },
    {
        name: "faq",
        path: PATH.PRESENTATIONS,
        PropComponent: PPT,
    },
    {
        name: "about",
        path: PATH.ABOUT,
        PropComponent: About,
    }
]
