import React from "react";
import NewsItem from "../news-item/NewsItem";

function Home( {news} ){

    const formattedNews = news.map(
        (value, index) => <NewsItem image={value.urlToImage} title={value.title} description={value.description} url={value.url} key={'home_' + index}/>
    )


    return (
        <div className="container mt-4">
            <div className="row">
                {formattedNews}
            </div>
        </div>
    )
}

export default Home;