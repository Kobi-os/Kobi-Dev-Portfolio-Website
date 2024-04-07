import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import mapdata from '../assets/features';
import {geoCentroid} from "d3-geo";

const Map = () => {
  return (
    <ComposableMap
    projection='geoMercator'
    projectionConfig={{
      scale: 3500,
      center: [19, 52],
    }}
    fill='black'
    stroke='white'
    stroke-width={3}
    >
<Geographies geography={mapdata.data}>
        {(geographies) => {
          return (
            <>
              {geographies.geographies.map((geo) => {
                return <Geography key={geo.rsmKey} geography={geo} />;
              })}

              {geographies.geographies.map((geo) => {
                const provinceCenter = geoCentroid(geo);
                return (
                  <Marker key={geo.rsmKey} coordinates={provinceCenter}>
                  <text
                      style={{
                         fill: 'white',
                         strokeWidth: 0 
                        }}
                        textAnchor='middle'
                        >
                        {geo.properties.VARNAME_1}
                  </text>
               </Marker>
                );
              })}
            </>
          );
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;