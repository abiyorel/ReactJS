import React from "react";
import useGetCharacters from "./Query/useGetCharacters";
import { Link } from "react-router-dom";
import styles from "./Characters.module.scss";

const CharactersList = () => {
  const { loading, error, data, fetchMore } = useGetCharacters(1);
  console.log({ loading, error, data, fetchMore });

  const prevPage = () => {
    fetchMore({
      variables: { page: data.characters.info.prev },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  const nextPage = () => {
    fetchMore({
      variables: { page: data.characters.info.next },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

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
        <div className="row mt-4">
          <div className="ubuntu h1 text-center text-secondary mb-4">
            Characters List
          </div>
          {data.characters.results.map((character) => {
            return (
              <div key={character.id} className="col-3 mb-5 position-relative">
                <Link
                  to={`/${character.id}`}
                  style={{ textDecoration: "none" }}
                  className="text-secondary"
                >
                  <div className={styles.cards}>
                    <img
                      src={character.image}
                      alt={character.id}
                      className="img-fluid rounded"
                    />
                    <div style={{ padding: "10px" }} className="content">
                      <div className="fs-4 fw-bold text-center mb-1">
                        {character.name}
                      </div>
                      <div className="fs-6 text-info">Last Location :</div>
                      <div className="fs-5 text-secondary">
                        {character.location.name}
                      </div>
                    </div>
                  </div>
                </Link>
                {(() => {
                  if (character.status === "Alive") {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-success text-uppercase`}
                      >
                        {character.status}
                      </div>
                    );
                  } else if (character.status === "Dead") {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-danger text-uppercase`}
                      >
                        {character.status}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className={`${styles.badge} position-absolute badge bg-secondary text-uppercase`}
                      >
                        {character.status}
                      </div>
                    );
                  }
                })()}
              </div>
            );
          })}
          <div className="container d-flex justify-content-center gap-4 mb-5">
            <button
              disabled={data.characters.info.next > 2 ? false : true}
              onClick={prevPage}
              className="btn btn-outline-secondary text-info"
            >
              Prev
            </button>
            <button
              disabled={data.characters.info.next < 42 ? false : true}
              onClick={nextPage}
              className="btn btn-outline-secondary text-info"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
};

export default CharactersList;
