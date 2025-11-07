"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// 🧩 Importer Leaflet uniquement côté client
let L: typeof import("leaflet") | null = null;

// Chargement dynamique de React-Leaflet
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

interface MapSectionProps {
  lat: number;
  lng: number;
  address: string;
  zoom?: number;
}

export default function MapSection({
  lat,
  lng,
  address,
  zoom = 13,
}: MapSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ✅ Importer Leaflet uniquement après que le DOM existe
    import("leaflet").then((leaflet) => {
      L = leaflet;

      // Fix icônes Leaflet (uniquement côté client)
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      setIsMounted(true);
    });
  }, []);

  if (!isMounted) {
    return (
      <div className="h-96 w-full bg-gray-200 rounded-xl animate-pulse flex items-center justify-center">
        <p className="text-gray-600">Chargement de la carte...</p>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className="h-96 w-full rounded-xl overflow-hidden shadow-lg"
    >
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        key={`${lat}-${lng}`} // Force re-render si position change
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[lat, lng]}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
