import { pokemonUrl } from "~/constants/urlConstant";
import axios from "axios";

export const API = axios.create({ baseURL: pokemonUrl });
