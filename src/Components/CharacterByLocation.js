import React from "react";
import { Link, useParams } from "react-router-dom";
import useLocation from "./Query/useLocation";
import styles from "./Characters.module.scss";

const CharacterByLocation = () => {
  const { id } = useParams();
  const { loading, error, data } = useLocation(id);
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
      <div className="container ubuntu">
        <div key={data.location.id} className="h1 text-secondary mb-4">
          <span className="text-info">Location Name :</span>{" "}
          {data.location.name}
        </div>
        <div className="row">
          {data.location.residents.map((resident) => {
            return (
              <div key={resident.id} className="col-3  mb-5 position-relative">
                <Link
                  to={`/${resident.id}`}
                  style={{ textDecoration: "none" }}
                  className="text-secondary"
                >
                  <div className={styles.cards}>
                    <img
                      src={resident.image}
                      alt={resident.id}
                      className="img-fluid rounded"
                    />
                    <div style={{ padding: "10px" }} className="content">
                      <div className="fs-4 fw-bold text-center mb-1">
                        {resident.name}
                      </div>
                      <div className="fs-6 text-info">Last Location :</div>
                      <div className="fs-5 text-secondary">
                        {resident.location.name}
                      </div>
                    </div>
                  </div>
                </Link>
                {(() => {
                  if (resident.status === "Alive") {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-success text-uppercase`}
                      >
                        {resident.status}
                      </div>
                    );
                  } else if (resident.status === "Dead") {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-danger text-uppercase`}
                      >
                        {resident.status}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-secondary text-uppercase`}
                      >
                        {resident.status}
                      </div>
                    );
                  }
                })()}
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default CharacterByLocation;
