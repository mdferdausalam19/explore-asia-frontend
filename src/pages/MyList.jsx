import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyList = () => {
  const { user, loading } = useAuth();
  const [touristSpot, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user-tourist-spots?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Tourist Spot",
      text: "Are you sure you want to delete this spot?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tourist-spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remainingTouristSpot = touristSpot.filter(
                (spot) => spot._id !== id
              );
              setTouristSpots(remainingTouristSpot);
              Swal.fire({
                title: "Deleted!",
                text: "Tourist spot has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="mb-10">
      <div className="text-center mt-5 mb-5 space-y-4">
        <h1 className="text-2xl font-bold">My Tourist Spots</h1>
        <p className="text-gray-600">
          Here are the tourist spots you have added. You can update or delete
          them.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Average Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {touristSpot.map((spot, index) => (
              <tr key={spot._id}>
                <th>{index + 1}</th>
                <td>{spot?.touristsSpotName}</td>
                <td>{spot?.location}</td>
                <td>{spot?.averageCost}</td>
                <td className="space-y-2">
                  <Link
                    to={`/update-tourist-spot/${spot._id}`}
                    className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(spot._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
