import { useMutation } from 'react-query';
import { getArticleById, saveArticleToDraft, updateArticle } from '../../../store/apiCalls/articles';
import { genericError } from '../../../utils';


function SaveToDraft(sucessHandler) {
    return {
        ...useMutation(saveArticleToDraft, {
            onSuccess: (data) => { sucessHandler(data) },
            onError: (errMsg) => {
                genericError(errMsg.response.data);
            },
        })
    }
}
function FetchArticleById(sucessHandler) {
    return {
        ...useMutation(getArticleById,
            {
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
function EditCurrentArticle(sucessHandler) {
    return {
        ...useMutation(updateArticle,
            {
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

// function FetchArticleById(fetchDetails,sucessHandler) {
//     return {
//         ...useQuery(
//             ['articleById'], () => fetchDetails(),
//             {
//                 keepPreviousData: true,
//                 onSuccess: (rData) => {
//                     sucessHandler(rData)
//                 },
//                 onError: (err) => {
//                     genericError(err.response.data)
//                 }
//             },
//         )
//     }
// }



export {
    SaveToDraft,
    FetchArticleById,
    EditCurrentArticle
}
