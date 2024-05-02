import "./types/Rabbit";
import "./types/User";
import "./types/Client";
import { builder } from "./builder";

export const schema = builder.toSchema();
