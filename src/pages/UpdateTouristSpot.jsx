import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateTouristSpot = () => {
  const { id } = useParams();
  const [touristSpot, setTouristSpot] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    fetch(`http://localhost:5000/tourist-spots/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTouristSpot(data);
        reset({
          imageURL: data?.imageURL,
          touristsSpotName: data?.touristsSpotName,
          countryName: data?.countryName,
          location: data?.location,
          description: data?.description,
          averageCost: data?.averageCost,
          seasonality: data?.seasonality,
          travelTime: data?.travelTime,
          totalVisitorsPerYear: data?.totalVisitorsPerYear,
        });
      });
  }, []);

  const handleUpdateTouristSpot = (data) => {
    const touristSpotInfo = {
      imageURL: data.imageURL,
      touristsSpotName: data.touristsSpotName,
      countryName: data.countryName,
      location: data.location,
      description: data.description,
      averageCost: data.averageCost,
      seasonality: data.seasonality,
      travelTime: data.travelTime,
      totalVisitorsPerYear: data.totalVisitorsPerYear,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "This action will update the tourist spot details. Do you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tourist-spots/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(touristSpotInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              reset(touristSpotInfo);
              Swal.fire({
                title: "Update Successful!",
                text: "The tourist spot details have been updated successfully.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="mt-5 md:mt-10 mb-10">
        <div className="text-center ">
          <h1 className="text-4xl lg:text-5xl font-bold mt-5 mb-3">
            Update Tourist Spot
          </h1>
          <p className="max-w-2xl mx-auto">
            Edit the details of your favorite tourist spot using the form below.
            Make changes to the information such as location, travel time, or
            visitor statistics and click 'Update' to save your changes.
          </p>
        </div>
        <div className="card max-w-2xl border bg-base-100 shrink-0 shadow-2xl mx-auto mt-7">
          <form
            onSubmit={handleSubmit(handleUpdateTouristSpot)}
            className="card-body"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Image URL</span>
                </label>
                <input
                  {...register("imageURL")}
                  type="text"
                  placeholder="Paste the image URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">
                    Tourist Spot Name
                  </span>
                </label>
                <input
                  {...register("touristsSpotName", { required: true })}
                  type="text"
                  placeholder="Enter the tourist spot name"
                  className="input input-bordered"
                />
                {errors.touristsSpotName && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Country Name</span>
                </label>
                <input
                  {...register("countryName", { required: true })}
                  type="text"
                  placeholder="Enter the country name"
                  className="input input-bordered"
                />
                {errors.countryName && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Location</span>
                </label>
                <input
                  {...register("location", { required: true })}
                  type="text"
                  placeholder="Enter the location"
                  className="input input-bordered"
                />
                {errors.location && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control col-span-1 md:col-span-2">
                <label className="label">
                  <span className="label-text text-base">
                    Short Description
                  </span>
                </label>
                <textarea
                  {...register("description", { required: true })}
                  type="text"
                  placeholder="Write a short description"
                  className="textarea textarea-bordered"
                />
                {errors.description && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Average Cost</span>
                </label>
                <input
                  {...register("averageCost", { required: true })}
                  type="text"
                  placeholder="Enter average cost (e.g., $500)"
                  className="input input-bordered"
                />
                {errors.averageCost && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Seasonality</span>
                </label>
                <input
                  {...register("seasonality", { required: true })}
                  type="text"
                  placeholder="e.g., Summer, Winter"
                  className="input input-bordered"
                />
                {errors.seasonality && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Travel Time</span>
                </label>
                <input
                  {...register("travelTime", { required: true })}
                  type="text"
                  placeholder="e.g., 7 days"
                  className="input input-bordered"
                />
                {errors.travelTime && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">
                    Total Visitors per Year
                  </span>
                </label>
                <input
                  {...register("totalVisitorsPerYear", { required: true })}
                  type="text"
                  placeholder="Enter total visitors (e.g., 10000)"
                  className="input input-bordered"
                />
                {errors.totalVisitorsPerYear && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-base-300">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTouristSpot;
