import { useQuery, useMutation } from 'react-query';
import { getSpecialization, removeProfilePicture, updateProfileDetails, verifyUrl } from '../../../store/apiCalls/profileDetails';
function FetchProfileDetails(fetchDetails,sucessHandler,setError = () => {},formError = {}) {
    return {
        ...useQuery(
            ['profile'], () => fetchDetails(),
            {
                keepPreviousData: true,
                onSuccess: (rData) => {
                    sucessHandler(rData)
                    setError({...formError,apiErrors:''})
                },
                onError: (err) => {
                    setError({...formError,apiErrors:err.response.data.mesaage||err.response.data.message||'Something went wrong. Please try again later.'})
                }
            },
        )
    }
}

function UpdateProfile(sucessHandler,setError = () => {},formError = {}) {
    return {
        ...useMutation(updateProfileDetails, {
            onSuccess: (data) => { 
                sucessHandler(data)
                setError({...formError,apiErrors:''})
            },
            onError: (errMsg) => {
                setError({...formError,apiErrors:errMsg.response.data.mesaage||errMsg.response.data.message||'Something went wrong. Please try again later.'})

            },
        })
    }
}

function SelectSpecialization(sucessHandler,setError,formError) {
    return {
        ...useMutation(getSpecialization, {
            onSuccess: (data) => { sucessHandler(data)
                setError({...formError,apiErrors:''})
            },
            onError: (errMsg) => {
                setError({...formError,apiErrors:errMsg.response.data.mesaage||errMsg.response.data.message||'Something went wrong. Please try again later.'})
            },
        })
    }
}
function GetUrlverified(sucessHandler, setError,stateData,currentIndex) {
    return {
        ...useMutation(verifyUrl, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                const cloneWorkSection = [...stateData];
                const updateWorkSection = cloneWorkSection.map((item, index) => {
                    if (currentIndex === index) {
                        return { ...item, error: errMsg.response.data.message||'Something went wrong. Please try again later.' };
                    }
                    return item
                });
                setError(updateWorkSection);    
            },
        })
    }
}
function RemoveProfile(sucessHandler, setError,stateData,currentIndex) {
    return {
        ...useMutation(removeProfilePicture, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                const cloneWorkSection = [...stateData];
                const updateWorkSection = cloneWorkSection.map((item, index) => {
                    if (currentIndex === index) {
                        return { ...item, error: errMsg.response.data.message||'Something went wrong. Please try again later.' };
                    }
                    return item
                });
                setError(updateWorkSection);
                sucessHandler(errMsg)
            },
        })
    }
}



export {
    FetchProfileDetails,
    UpdateProfile,
    SelectSpecialization,
    GetUrlverified,
    RemoveProfile
}
