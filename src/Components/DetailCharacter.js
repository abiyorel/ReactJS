import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetCharacter from "./Query/useGetCharacter";

const DetailCharacter = () => {
  const { id } = useParams();
  const { loading, error, data } = useGetCharacter(id);
  console.log({ loading, error, data });

  if (loading)
    return (
      <div className="ubuntu h1 text-center text-secondary mt-4">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="ubuntu h1 text-center text-secondary mt-4">
        Something went wrong...
        <h4 className="ubuntu text-center text-info">{error.message}</h4>
      </div>
    );

  if (data)
    return (
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column gap-2 ubuntu">
          <h1 className="text-center text-secondary">{data.character.name}</h1>
          <img
            src={data.character.image}
            alt={data.character.id}
            className="img-fluid rounded"
          />
          {(() => {
            if (data.character.status === "Alive") {
              return (
                <div className="badge bg-success text-uppercase fs-5">
                  {data.character.status}
                </div>
              );
            } else if (data.character.status === "Dead") {
              return (
                <div className="badge bg-danger text-uppercase fs-5">
                  {data.character.status}
                </div>
              );
            } else {
              return (
                <div className="badge bg-secondary text-uppercase fs-5">
                  {data.character.status}
                </div>
              );
            }
          })()}
          <div className="content h4">
            <div className="fs-5 text-info">
              Species :{" "}
              <span className="text-secondary">{data.character.species}</span>
            </div>
            <div className="fs-5 text-info">
              Gender :{" "}
              <span className="text-secondary">{data.character.gender}</span>
            </div>
            <div className="fs-5 mb-2 text-info">Last Location : </div>
            <Link
              to={`/location/${data.character.location.id}`}
              style={{ textDecoration: "none" }}
              className="fs-5 text-secondary"
            >
              {data.character.location.name}
            </Link>
          </div>
        </div>
      </div>
    );
};

export default DetailCharacter;
