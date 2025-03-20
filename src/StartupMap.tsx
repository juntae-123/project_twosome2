import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.5665,
  lng: 126.978,
};

const StartupMap: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const querySnapshot = await getDocs(collection(db, "startupLocations"));
      const fetchedLocations = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Location[];
      setLocations(fetchedLocations);
    };

    fetchLocations();
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default StartupMap;
