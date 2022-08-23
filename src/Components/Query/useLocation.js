// import React from 'react'
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER_BY_LOCATION = gql`
  query getCharacterByLocation($id: ID!) {
    location(id: $id) {
      id
      name
      residents {
        id
        name
        status
        species
        gender
        image
        location {
          name
        }
      }
    }
  }
`;

const useLocation = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_LOCATION, {
    variables: { id },
  });

  return { loading, error, data };
};

export default useLocation;
