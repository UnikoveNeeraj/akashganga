import vikramshilaLogo from "../../assets/img/logos/vikramshilaLogo.png";
import "./Logo.scss";

export default function Logo() {
  return (
    <>
      <div className="logo_container">
        <img src={vikramshilaLogo} alt="logo" />
      </div>
    </>
  );
}
