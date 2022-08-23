// import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_DETAIL_CHARACTER = gql`
  query getDetailCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      location {
        id
        name
      }
    }
  }
`;

const useGetCharacter = (id) => {
  const { loading, error, data } = useQuery(GET_DETAIL_CHARACTER, {
    variables: { id },
  });
  return { loading, error, data };
};

export default useGetCharacter;
