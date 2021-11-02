import { sortArray } from "@/helpers";
import { Nullable } from "@/helpers/types";
import { GamePhase, IGameManager, Image, Tile } from "./types";

const IMAGE_NAMES = Array(8)
  .fill(0)
  .map(
    (_, index): Image => ({
      src: `z${index + 1}.jpeg`,
      id: String(index + 1),
      key: index,
    })
  );

class GameManager implements IGameManager {
  constructor(
    public tiles: Nullable<Tile[]> = null,
    public gamePhase: GamePhase = GamePhase.BEFORE_START
  ) {}

  generateTiles(size: number): void {
    const imagePaths = IMAGE_NAMES.slice(0, size);
    const notSortedTiles = imagePaths.reduce(
      (acc: Image[], curr: Image) => [...acc, curr, curr],
      []
    );

    const newTiles = sortArray<Image>(notSortedTiles);

    this.tiles = newTiles.map((d, ind) => ({
      ...d,
      key: ind,
      isVisible: false,
    }));
  }

  compareImages(tile1: Tile, tile2: Tile): boolean {
    if (tile1.src === tile2.src) {
      tile1.isVisible = true;
      tile2.isVisible = true;
      if (this.tiles && !this.tiles.some((t) => !t.isVisible)) {
        this.gamePhase = GamePhase.FINISHED;
      }
      return true;
    }

    return false;
  }

  get isFinished(): boolean {
    return this.gamePhase === GamePhase.FINISHED;
  }
}

export default GameManager;
