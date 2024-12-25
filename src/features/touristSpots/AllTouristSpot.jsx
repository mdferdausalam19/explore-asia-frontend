import { useEffect, useState } from "react";
import TouristSpotCard from "../../components/touristSpots/TouristSpotCard";

const AllTouristSpot = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    fetch(
      `https://explore-asia-backend.vercel.app/all-tourist-spots?sort=${sortOrder}`
    )
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, [sortOrder]);
  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore All Tourist Spot
          </h2>
          <p>
            Discover popular tourist destinations added by users from around the
            world. Use the sorting options to explore spots based on your budget
            or preferences.
          </p>
        </div>
        <div className="mb-6 text-center mt-5">
          <label className="block text-gray-700 font-medium mb-2">
            Sort by Average Cost:
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-3"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {touristSpots.map((touristSpot) => (
            <TouristSpotCard
              key={touristSpot._id}
              touristSpot={touristSpot}
            ></TouristSpotCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTouristSpot;
