import React, { useEffect, useState } from "react";
import SourcesItem from "./SourcesItem";

const SOURCES_URL = "https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY"

export default function Sources(){

    // sources state
    const [newSources, setSources] = useState([])

    // load the sources
    useEffect(
       () => {

            fetch(SOURCES_URL)
                .then((response) => response.json())
                .then((data) => {
                    setSources(data.sources);
                })

       }, [] 
    )

    const sources = newSources.map(
        (value, index) => <SourcesItem name={value.name} description={value.description} url={value.url} key={'source_'+index}/>
    )

    return(
        <div className="container mt-4">
            <h4>NEWS SOURCES ({sources.length})</h4>
            <div className="row">
               {sources}
            </div>
        </div>
    )
}