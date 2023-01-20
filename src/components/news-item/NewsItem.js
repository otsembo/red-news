import React from "react";

function NewsItem( {image, title, description, url} ){
    return(
        <div className="col-3 p-1">
            <div className="card h-100">
                <img className="card-img-top" src={image} alt="news item" />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <a target={'_blank'} className="btn btn-warning"
                    href={url}>{'VISIT PAGE'}</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;