import React, { Component } from 'react';
var state = {
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

var url = ""
const SearchNews = (url) =>



    console.log(url);
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw Error("Network request failed")
        }

        return response
    })
    .then(d => d.json())
    .then(d => {

        // console.log(d.response.results),
        // console.log(d.response.results),
        // this.setState({
        return d.response


    }, () => {

        return true
    })



export default SearchNews;
