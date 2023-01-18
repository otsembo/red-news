import React from "react";

function NewsItem(){
    return(
        <div className="col-3 p-1">
            <div className="card">
                <img className="card-img-top" src="" alt="news item" />
                <div className="card-body">
                    <h3 className="card-title">{'HELLO NEWS'}</h3>
                    <p className="card-text">{'something random ...'}</p>
                    <a target={'_blank'} className="btn btn-warning">{'VISIT PAGE'}</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;