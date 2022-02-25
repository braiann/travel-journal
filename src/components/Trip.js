import React from "react";

export default function Trip(props) {
    return (
        <section>
            <img src={props.imageUrl} height="168px" width="125px"/>
            <p className="location">{props.location.toUpperCase()} <a href={props.googleMapsUrl}>View on Google Maps</a></p>
            <h2>{props.title}</h2>
            <b>{props.startDate + " - " + props.endDate}</b>
            <p className="description">{props.description}</p>
        </section>
    )
}