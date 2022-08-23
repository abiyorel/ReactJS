// import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS_LIST = gql`
  query getCharactersList($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        name
        status
        image
        location {
          id
          name
        }
      }
    }
  }
`;

const useGetCharacters = (page) => {
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS_LIST, {
    variables: { page },
  });
  return { loading, error, data, fetchMore };
};

export default useGetCharacters;
