import { GET_MASTERDATA_DETAILS } from "../actions/masterDataActions";

const initialState = {
    MasterData: {}
}

const MasterDataReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_MASTERDATA_DETAILS:
            return {
                ...state,
                MasterData: action.payload,
            };
        default:
            return state;
    }
};
export default MasterDataReducer;
