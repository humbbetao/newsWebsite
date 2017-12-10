import React, { Component } from 'react';

const fetchingData = (url) => (Comp) =>
    class FetchingData extends Component {
        constructor(props) {
            super(props);
            this.state = {
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
                },
                isLoading: false,
                error: null,
            };
        }

        componentDidMount() {
            // console.log(url);
            this.setState({ isLoading: true });

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Something went wrong ...');
                    }
                    return response.json();

                })
                .then(data => this.setState({ response: data.response, isLoading: false }))
                .catch(error => this.setState({ error, isLoading: false }));
        }

        render() {
            return <Comp { ...this.props } { ...this.state } />
        }
    }

export default fetchingData;