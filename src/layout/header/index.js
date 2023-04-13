import HomeHeader from "./HomeHeader";
import ProfileSetupHeader from "./ProfileSetupHeader";
import { useLocation, useParams } from "react-router-dom";

function Header() {
  const { pathname } = useLocation()
  const { id } = useParams()
  return (
    <>
      {
        ['/personaldetails', '/previewprofile', '/sun-editor', '/submitarticle', `/editarticle/${id}`].indexOf(pathname.toLocaleLowerCase()) > -1 ? <ProfileSetupHeader /> : <HomeHeader />
      }
    </>
  );
}

export default Header;
