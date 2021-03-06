import React from 'react';
import MapContainer from './container.css';
import GmapControls from './controls';
import Async from '../util/async';
import { useGmap } from '../context/gmap';
import { useGeolocation } from '../context/geolocation';

const GmapInitializer = () => {

    const geo = useGeolocation();
    const gmap = useGmap();

    // add google api script after component load
    React.useEffect(() => {
        geo.detectUserLocation();
        gmap.init();
    }, [geo, gmap]);

    return (
        <MapContainer ref={gmap.mapRef}>
            <Async watch={gmap.google && gmap.map && (geo.userLocation || geo.error)}>
                <GmapControls />
            </Async>
        </MapContainer>
    );
}

export default GmapInitializer;
