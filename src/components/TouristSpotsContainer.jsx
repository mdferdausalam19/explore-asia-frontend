import { useEffect, useState } from "react";
import TouristSpotCard from "./TouristSpotCard";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "./LoadingSpinner";

const TouristSpotsContainer = () => {
  const { loading } = useAuth();
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tourist-spots")
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="mt-10 mb-10">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold">
          Must-Visit Destinations
        </h2>
        <p>
          Explore our curated list of breathtaking tourist spots across
          Southeast Asia, perfect for every traveler.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {touristSpots.slice(0, 12).map((touristSpot) => (
          <TouristSpotCard
            key={touristSpot._id}
            touristSpot={touristSpot}
          ></TouristSpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristSpotsContainer;
