import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoute, routeReset } from "../../module/actions";
import FormSelectRoute from "./FormSelectRoute";
import AbsentCardData from "./AbsentCardData";
import CardRequestComplete from "./CardRequestComplete";
import { drawRoute } from "./drawRoutes";
import Header from "../Header/Header";

function Map() {
    const [map, setMap] = useState(null);
    const dispatch = useDispatch();
    const { adressList, isCardAdd, selectRoute } = useSelector(state => state);
    let mapContainer;

    const option = {
        lng: 34.1753,
        lat: 44.4967,
        zoom: 16.45
    };
    const paveTheWay = coords => {
        dispatch(fetchRoute(coords));
    };
    const removeTheWay = () => {
        dispatch(routeReset({ status: false, coords: [] }));
        const layers = ["route", "start", "start-inner", "finish", "finish-inner"];
        layers.forEach(layer => {
            map.removeLayer(layer);
        });
        map.removeSource("route");
    };
    const renderForms = () => {
        if (selectRoute.status) return <CardRequestComplete submit={removeTheWay} />;
        return isCardAdd ? (
            <FormSelectRoute submit={paveTheWay} adressList={adressList} />
        ) : (
            <AbsentCardData />
        );
    };
    useEffect(() => {
        selectRoute.status && drawRoute(map, selectRoute.coords);
    }, [map, selectRoute]);
    useEffect(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiYXJ0bXJzdmNoIiwiYSI6ImNrNW53YWhiYzBhdGszbW1wdzlndnQ5bHQifQ.4_4_ZfVWfJB2ehd3VRilDA";
        const mapbox = new mapboxgl.Map({
            container: mapContainer,
            style: "mapbox://styles/mapbox/dark-v9",
            center: [option.lng, option.lat],
            zoom: option.zoom
        });
        setMap(mapbox);
    }, []);

    return (
        <>
            <Header />
            <div className="map-wrapper">
                <div className="map-route">{renderForms()}</div>
                <div className="map" ref={el => (mapContainer = el)}></div>
            </div>
        </>
    );
}

export default Map;
