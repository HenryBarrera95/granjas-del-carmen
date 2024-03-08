import { gql } from "@apollo/client";

export const AllRabbitsQuery = gql`
  query {
    Rabbits {
      id
      name
      image
      gender
      createdBy {
        id
      }
    }
  }
`;
