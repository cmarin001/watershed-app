import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useRef } from 'react';
import type L from 'leaflet';
import './styles.css';

const DEFAULT_CENTER: L.LatLngTuple = [4.65, -74.1];
const DEFAULT_ZOOM = 10;

interface IWatershedMap {
  onShapeComplete: (geo: GeoJSON.Feature) => void;
}

const WatershedMap = (props: IWatershedMap) => {
  const { onShapeComplete } = props;

  const fgRef = useRef<L.FeatureGroup>(null);

  const handleCreated = (e: L.DrawEvents.Created) => {
    const geo = e.layer.toGeoJSON();
    onShapeComplete(geo);
  };

  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      className="map-container"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FeatureGroup ref={fgRef}>
        <EditControl
          position="topright"
          draw={{
            marker: true,
            polygon: true,
            rectangle: true,
            circle: false,
            polyline: false,
            circlemarker: false,
          }}
          onCreated={handleCreated}
        />
      </FeatureGroup>
    </MapContainer>
  );
};

export {WatershedMap};
