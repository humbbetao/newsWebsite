import React from 'react';
var apiKey = 'api-key=4e95ee67-2a00-4f2b-a66a-f5288cf2934f';

const urlForSearch = (query) =>
    'http://content.guardianapis.com/search?section=technology&order-by=relevance&use-date=last-modified&show-fields=all&q=' + query + '&' + apiKey;

const state = {
    response: {
        status: "",
        userTier: "",
        total: 0,
        startIndex: 0,
        pageSize: 0,
        currentPage: 0,
        pages: 0,
        orderBy: "",
        results: [
            {
                id: "",
                type: "",
                sectionId: "",
                sectionName: "",
                webPublicationDate: "",
                webTitle: "",
                webUrl: "",
                apiUrl: "",
                fields: {
                    headline: "",
                    standfirst: "",
                    trailText: "",
                    byline: "",
                    main: "",
                    body: "",
                    wordcount: "",
                    firstPublicationDate: "",
                    isInappropriateForSponsorship: "",
                    isPremoderated: "",
                    lastModified: "",
                    productionOffice: "",
                    publication: "",
                    shortUrl: "",
                    shouldHideAdverts: "",
                    showInRelatedContent: "",
                    thumbnail: "",
                    legallySensitive: "",
                    lang: "",
                    bodyText: "",
                    charCount: "",
                    shouldHideReaderRevenue: ""
                },
                isHosted: false
            }
        ]
    }


}

const SearchNews = (query) => (

    fetch(urlForSearch(query))
        .then(response => {
            if (!response.ok) {
                throw Error("Network request failed")
            }
            return response
        })
        .then(d => d.json())
        .then(d => {
            // return response
            state.response = d.response
        }, () => {
            state.response= true
            // this.setState({
            //     requestFailed: true
            // })
        })

);

export default SearchNews;