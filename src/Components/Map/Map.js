import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0bXJzdmNoIiwiYSI6ImNrNW53YWhiYzBhdGszbW1wdzlndnQ5bHQifQ.4_4_ZfVWfJB2ehd3VRilDA'

function Map () {
    let mapContainer;
    const option = {
        lng: 34.1753,
        lat: 44.4967,
        zoom: 16.45
    }

    useEffect(()=> {
        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [option.lng, option.lat],
            zoom: option.zoom
            });
    })
    
    return (
        <div className="map-wrapper">
            <div className="map" ref={el => mapContainer = el}></div>
        </div>
    )
}

export default Map