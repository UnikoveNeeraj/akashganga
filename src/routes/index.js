import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import Dashboard from "../containers/autherFlow/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { PATH } from "./path";
import {
  protectedRouteNavigators,
  publicRouteNavigators,
  allUserRouteNavigators,
} from "./routeNavigator";
import Header from "../layout/header";
import { getAllMasterData } from "../store/apiCalls/fetchmaster";
import { FetchMasterData } from "../fetchMasterData";
import { GET_MASTERDATA_DETAILS } from "../store/actions/masterDataActions";

function ProtectedRoute(props) {
  const { isLoggedIn } = props;
  return isLoggedIn ? (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to={PATH.HOMEPAGE} />
  );
}

function PublicRoute(props) {
  const { isLoggedIn, isSetupProfile } = props;
  return isLoggedIn ? (
    <Navigate
      to={isSetupProfile == true ? PATH.DASHBOARD.DASHBOARD : PATH.PERSONAL_DETAILS}
      state={{ openSuccessLoginModal: true }}
    />
  ) : (
    <Outlet />
  );
}

function CustomRoutes() {
  const dispatch = useDispatch();
  const sucessHandler = (fetchedData) => {
    dispatch({
      type: GET_MASTERDATA_DETAILS,
      payload: fetchedData?.data,
    });
  };
  const fetchdata = async () => {
    return getAllMasterData();
  };
  FetchMasterData(fetchdata, sucessHandler);

  const isLoggedIn = useSelector(
    (state) => state?.LoginReducer?.userLoginDetails?.token ?? null
  );

  const isSetupProfile = useSelector(
    (state) => state?.LoginReducer?.user?.publishProfile ?? null
  );
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route element={<PublicRoute isLoggedIn={isLoggedIn} isSetupProfile={isSetupProfile} />}>
            {publicRouteNavigators.map((prop) => {
              return (
                <Route
                  path={prop.path}
                  name={prop.name}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  element={
                    <prop.PropComponent
                      {...(prop?.props ?? <LinkedInCallback />)}
                    />
                  }
                  key={prop.name}
                  exact
                />
              );
            })}
          </Route>
          <Route
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                isSetupProfile={isSetupProfile}
              />
            }
          >
            {protectedRouteNavigators.map((prop) => {
              return (
                <Route
                  path={prop.path}
                  name={prop.name}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  element={<div className="inner-pages"><prop.PropComponent {...prop?.props} /></div>}
                  key={prop.name}
                  exact
                />
              );
            })}
          </Route>
          {allUserRouteNavigators.map((prop) => {
            return (
              <Route
                path={prop.path}
                name={prop.name}
                // eslint-disable-next-line react/jsx-props-no-spreading
                element={<div className="inner-pages"><prop.PropComponent {...prop?.props} /></div>}
                key={prop.name}
                exact
              />
            );
          })}

          {/* <Route path={PATH.AUTHOR_FLOW_DASHBOARD} element={<Dashboard />} /> */}

          <Route exact path="/linkedin" element={<LinkedInCallback />} />
          {/* <Navigate to={PATH.DEFAULT}/> */}
          {/* <Route path={PATH.DEFAULT} element={<Dashboard/>} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default CustomRoutes;
