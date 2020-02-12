import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useDispatch } from "react-redux";
import { fetchRoute } from "../module/actions";
import FormSelectRoute from "./Auxillary_components/FormSelectRoute";
import AbsentCardData from "./Auxillary_components/AbsentCardData";
import CardRequestComplete from "./Auxillary_components/CardRequestComplete";
import { drawRoute } from "./Auxillary_components/drawRoutes";
mapboxgl.accessToken =
    "pk.eyJ1IjoiYXJ0bXJzdmNoIiwiYSI6ImNrNW53YWhiYzBhdGszbW1wdzlndnQ5bHQifQ.4_4_ZfVWfJB2ehd3VRilDA";

function Map({ adressList, isCardAdd, route }) {
    const [order, setOrder] = useState(false);
    const dispatch = useDispatch();
    let mapContainer;

    const option = {
        lng: 34.1753,
        lat: 44.4967,
        zoom: 16.45
    };
    const submit = (requst, adressRequest) => {
        requst ? setOrder(true, dispatch(fetchRoute({ adressRequest }))) : setOrder(false);
    };
    const renderForms = () => {
        if (order) return <CardRequestComplete submit={submit} />;
        return isCardAdd ? (
            <FormSelectRoute submit={submit} adressList={adressList} />
        ) : (
            <AbsentCardData />
        );
    };
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: "mapbox://styles/mapbox/dark-v9",
            center: [option.lng, option.lat],
            zoom: option.zoom
        });
        map.on("load", () => {
            order && drawRoute(map, route);
        });
        return () => {
            map.remove();
        };
    }, [mapContainer, option]);

    return (
        <div className="map-wrapper">
            <div className="map-route">{renderForms()}</div>
            <div className="map" ref={el => (mapContainer = el)}></div>
        </div>
    );
}

export default Map;
