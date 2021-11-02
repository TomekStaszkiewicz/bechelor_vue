import { Nullable } from "@/helpers/types";
import { Tile } from "@/managers/types";

export type GameData = {
  tiles: Nullable<Tile[]>;
  selectedTiles: Tile[];
  isClicked: boolean;
  clickCounter: number;
  timer: number;
  intervalId: number;
  gameFinished: boolean;
};
