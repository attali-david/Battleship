import _ from "lodash";
import { games } from "./gameloop.js";
import "./main.css";
import { events } from "./events.js";

events();
const game = games();
game.initialize();
