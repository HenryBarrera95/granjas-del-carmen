import { gql } from "@apollo/client";

// This is a mutation to create a new rabbit
// The mutation takes the following arguments:
// name: String
// image: String
// userId: String
// birthDate
// gender

export const CREATE_RABBIT = gql`
  mutation CreateRabbit(
    $name: String!
    $image: String!
    $userId: String!
    $gender: String!
    $birthDate: DateTime!
  ) {
    createRabbit(
      name: $name
      image: $image
      userId: $userId
      gender: $gender
      birthDate: $birthDate
    ) {
      id
      name
      createdBy {
        id
        email
      }
    }
  }
`;

// ahora tengo el error 
//message: "Variable \"$birthDate\" got invalid value \"2024-03-08T08:10\"; DateTime cannot represent an invalid date-time-string 2024-03-08T08:10."
// pero no se como solucionarlo
// la solucion es cambiar el tipo de dato de birthDate a String
