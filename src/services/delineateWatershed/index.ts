import type { Feature } from 'geojson';

const { VITE_API_URL } = import.meta.env;

async function delineateWatershed(
  geometry: Feature,
): Promise<Feature> {
  const res = await fetch(`${VITE_API_URL}/delineate`, {
    body: JSON.stringify({ geometry }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }

  return res.json() as Promise<Feature>;
}

export { delineateWatershed };