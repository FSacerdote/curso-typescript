import { db } from "../database/database-connectiom";
import { CreateGame, Game } from "../protocols/game-protocol";

async function getGames() {
  const games = await db.query<Game>("SELECT * FROM games;");
  return games.rows
}

async function createGame(game: CreateGame) {
  await db.query<CreateGame>("INSERT INTO games (title, platform) VALUES ($1, $2);", [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: CreateGame) {
  const { platform, title} = game
  const gameQuery = await db.query<Game>("SELECT * FROM games WHERE platform=$1 AND title=$2;", [platform, title])
  return gameQuery.rows[0]
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;