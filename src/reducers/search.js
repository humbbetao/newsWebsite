// export default function search(state = [], action) {
//     switch (action.type) {
//         case 'SEARCH':
//             var searchTerm = action.searchTerm
//             const urlForSearch = (searchTerm) =>
//                 'http://content.guardianapis.com/search?show-elements=all&show-fields=all&q=' + searchTerm + '&api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f'

//             state = {
//                 response: {
//                     status: "",
//                     userTier: "",
//                     total: 0,
//                     startIndex: 0,
//                     pageSize: 0,
//                     currentPage: 0,
//                     pages: 0,
//                     orderBy: "",
//                     results: [
//                         {
//                             id: "",
//                             type: "",
//                             sectionId: "",
//                             sectionName: "",
//                             webPublicationDate: "",
//                             webTitle: "",
//                             webUrl: "",
//                             apiUrl: "",
//                             fields: {
//                                 headline: "",
//                                 standfirst: "",
//                                 trailText: "",
//                                 byline: "",
//                                 main: "",
//                                 body: "",
//                                 wordcount: "",
//                                 firstPublicationDate: "",
//                                 isInappropriateForSponsorship: "",
//                                 isPremoderated: "",
//                                 lastModified: "",
//                                 productionOffice: "",
//                                 publication: "",
//                                 shortUrl: "",
//                                 shouldHideAdverts: "",
//                                 showInRelatedContent: "",
//                                 thumbnail: "",
//                                 legallySensitive: "",
//                                 lang: "",
//                                 bodyText: "",
//                                 charCount: "",
//                                 shouldHideReaderRevenue: ""
//                             },
//                             isHosted: false
//                         }
//                     ]
//                 }
//             }

//             fetch(urlForSearch(action.searchTerm))
//                 .then(response => {
//                     if (!response.ok) {
//                         throw Error("Network request failed")
//                     }
//                     // return response
//                 })
//                 .then(res => res.json())
//                 .then(res => {
//                     return [res.response]
//                 })

//         default:
//             return action.searchTerm;
//     }

// }
