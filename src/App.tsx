import { useState } from 'react';
import type { Feature } from 'geojson';
import { WatershedMap } from './components/WatershedMap';
import { delineateWatershed } from './services/delineateWatershed';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import './App.css';

const App = () => {
  const [watershed, setWatershed] = useState<Feature | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleShapeComplete = async (geometry: Feature) => {
    try {
      setError(null);
      const result = await delineateWatershed(geometry);
      setWatershed(result);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : 'Unexpected error';
      setError(msg);
    }
  };

  return (
    <>
      <Header />
      <div className="main-map-container">
        <WatershedMap onShapeComplete={handleShapeComplete} />
        <Menu
          coordinates={
            watershed ? JSON.stringify(watershed.geometry.coordinates) : undefined
          }
          lookerUrl="https://lookerstudio.google.com/s/your-report-id"
          onDownloadBasin={() => {/* TODO: generar y descargar shapefile */}}
          onDownloadStats={() => {/* TODO: generar CSV/JSON */}}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {watershed && (
        <pre style={{ maxHeight: 300, overflow: 'auto' }}>
          {JSON.stringify(watershed, null, 2)}
        </pre>
      )}
    </>
  );
};

export default App;
