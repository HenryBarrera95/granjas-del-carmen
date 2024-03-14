import { Gender } from "../prisma/generated/client";

export const rabbits = [
  {
    name: "Rabbit 1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/800px-Oryctolagus_cuniculus_Rcdo.jpg",
    birthDate: new Date(),
    gender: Gender.FEMALE,
  },
  {
    name: "Rabbit 2",
    image:
      "https://www.dispatch.com/gcdn/presto/2022/07/26/NCOD/7505d72e-204d-4824-a234-81d499f9c68b-A_young_eastern_cottontail_in_the_writers_Worthington_backyard._Jim_McCormac.jpg?width=660&height=443&fit=crop&format=pjpg&auto=webp",
    birthDate: new Date(),
    gender: Gender.MALE,
  },
  {
    name: "Rabbit 3",
    image:
      "https://cdn.britannica.com/20/194520-050-DCAE62F1/New-World-Sylvilagus-cottontail-rabbits.jpg",
    birthDate: new Date(),
    gender: Gender.FEMALE,
  },
];
