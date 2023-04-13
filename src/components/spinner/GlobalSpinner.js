import React from "react";
import "./GlobalSpinner.scss";
import { useSelector } from "react-redux";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useIsFetching, useIsMutating } from "react-query";



function GlobalSpinner(props) {
  const isLoading = useSelector(state => state.LoaderReducer.loader);
  const isMutating = useIsMutating();
  const isFetching = useIsFetching();
  if (isLoading || isMutating) {
    return (<div className="spinner-container">
        <PropagateLoader size={30}/>
    </div>
    )
  }

}

export default GlobalSpinner;
