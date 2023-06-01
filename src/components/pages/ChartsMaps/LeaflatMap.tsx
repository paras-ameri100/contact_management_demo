import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'

//delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

interface Data {
  countryInfo: {
    lat: number,
    long: number,
  },
  active: number,
  country: string,
  recovered: number,
  deaths: number
}

export default function LeaflatMap() {

  const { data, isLoading } = useQuery(["world"], () => {
    return Axios.get('https://disease.sh/v3/covid-19/countries').then(res => res.data);
  });

  return (
    <>
      <h3 className='mb-3 text-xl font-semibold'>Country wise Covid data</h3>
      {!isLoading &&
      <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          data?.map((item:Data, index:number) => (
            <Marker key={index} position={[item.countryInfo.lat, item.countryInfo.long]}>
              <Popup>
                <span><strong>Country Name:</strong> {item.country}</span> <br />
                <span><strong>Total Active Cases:</strong> {item.active}</span><br />
                <span><strong>Total Recovered Cases:</strong> {item.recovered}</span><br />
                <span><strong>Total Deaths:</strong> {item.deaths}</span>
              </Popup>
            </Marker>
          ))

        }
      </MapContainer>
      }
    </>
  )
}

