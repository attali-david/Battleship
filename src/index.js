import _ from "lodash";
import { games } from "./gameloop.js";
import "./main.css";
import { events } from "./events.js";
import { gameboards } from "./gameboard.js";
export { game };

events();

const game = games();
game.initialize();
