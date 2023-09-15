import gamesRepository from "../repository/games-repository";
import { CreateGame, Game } from "./../protocols/game-protocol";

async function getGames() {
  return await gamesRepository.getGames();
}

async function createGame(game: CreateGame) {
  if (gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;