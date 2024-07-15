/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { useCities } from '../../contexts/CitiesProvider'
import Button from './../Button';
import useGoelocation from '../../hooks/useGeolocation';
import { useURLLocation } from '../../hooks/useURLLocation'

function Map() {
    const [mapPostion, setMapPostion] = useState([30, 31])
    const { cities } = useCities()
    const { position: { lat: geoLat, lng: geoLng }, isLoading: geoIsLoading, getPosition } = useGoelocation()
    const [lat, lng] = useURLLocation();

    useEffect(() => {
        if (lat && lng)
            setMapPostion([lat, lng])

    }, [lat, lng])

    const navigate = useNavigate()
    useEffect(() => {
        if (geoLat && geoLng) {
            setMapPostion([geoLat, geoLng])
            navigate(`form?lat=${geoLat}&lng=${geoLng}`)
        }

    }, [geoLat, geoLng])
    return (
        <div className={styles.mapContainer}>
            <MapContainer className={styles.map} center={mapPostion} zoom={6} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) =>
                    <Marker position={city.position} key={city.id}>
                        <Popup>
                            {city.emoji}  {city.cityName}
                        </Popup>
                    </Marker>
                )}
                <ChangeCenter postion={mapPostion} />
                <DetectClick />
            </MapContainer>
            {geoLat === undefined ?
                <Button type='position' onClick={() => getPosition()} >{geoIsLoading ? "loading..." : "use your postion"}</Button>
                : null
            }
        </div>
    )
}

function ChangeCenter({ postion }) {
    const map = useMap()
    map.setView(postion)
    return null
}

function DetectClick() {
    const navigate = useNavigate()

    useMapEvents({
        click: (e) => {
            console.log(e)
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
        }
    })


}
export default Map
