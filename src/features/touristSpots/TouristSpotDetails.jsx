import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../auth/useAuth";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
const TouristSpotDetails = () => {
  const { loading } = useAuth();
  const [touristSpot, setTouristSpot] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://explore-asia-backend.vercel.app/tourist-spots/${id}`)
      .then((res) => res.json())
      .then((data) => setTouristSpot(data));
  }, []);
  const {
    imageURL,
    touristsSpotName,
    countryName,
    location,
    description,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
  } = touristSpot;
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <div className="mt-10 mb-10">
        <div className="card border bg-base-100 shadow-xl md:flex-row p-5 gap-4">
          <div className="md:w-1/2">
            <figure className="p-1">
              <img
                src={imageURL ? imageURL : "/imageNotFound.jpg"}
                className="rounded-xl object-cover"
              />
            </figure>
          </div>
          <div className="md:w-1/2">
            <h2 className="card-title">{touristsSpotName}</h2>
            <p>
              <span className="font-semibold">Country:</span> {countryName}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p>
              <span className="font-semibold">Description:</span> {description}
            </p>
            <p>
              <span className="font-semibold">Average Cost:</span> {averageCost}
            </p>
            <p>
              <span className="font-semibold">Seasonality:</span> {seasonality}
            </p>
            <p>
              <span className="font-semibold">Travel Time:</span> {travelTime}
            </p>
            <p>
              <span className="font-semibold">Total Visitors Per Year:</span>{" "}
              {totalVisitorsPerYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotDetails;
