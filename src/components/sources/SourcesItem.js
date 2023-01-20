import React from "react";

export default function SourcesItem( { name, description, url } ){
    return(
        <div className="col-3 p-1">
        <div className="card h-100">
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
                <a target={'_blank'} className="mt-auto btn btn-warning"
                href={url}>{'VISIT PAGE'}</a>
            </div>
        </div>
    </div>
    )
}