import { Link } from "react-router";

const TouristSpotCard = ({ touristSpot }) => {
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

  return (
    <div>
      <div className="card bg-base-100 shadow-xl border h-[500px]">
        <figure className="px-5 pt-5 h-[300px]">
          <img
            src={imageURL ? imageURL : "/imageNotFound.jpg"}
            className="rounded-xl object-cover w-full h-full"
          />
        </figure>
        <div className="card-body ">
          <div className="flex-grow">
            <h2 className="card-title">{touristsSpotName}</h2>
            <div className="mt-5 mb-5">
              <p>
                <span className="font-semibold">Country:</span> {countryName}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {location}
              </p>
              <p>
                <span className="font-semibold">Average Cost:</span>{" "}
                {averageCost} per day
              </p>
              <p>
                <span className="font-semibold">Visitors Per Year:</span>{" "}
                {totalVisitorsPerYear}
              </p>
            </div>
          </div>

          <div className="card-actions flex justify-center">
            <Link to={`/tourist-spots/${touristSpot._id}`} className="btn">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotCard;
