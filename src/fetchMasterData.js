import { useQuery} from 'react-query';
import { genericError } from './utils';

function FetchMasterData(fetchDetails,sucessHandler) {
    return {
        ...useQuery(
            ['FetchMasterData'], () => fetchDetails(),
            {
                keepPreviousData: true,
                onSuccess: (rData) => {
                    sucessHandler(rData)
                },
                onError: (err) => {
                    genericError(err.response.data)
                }
            },
        )
    }
}


export {
    FetchMasterData,
}
