const fs = require("fs").promises;
//const fs = require("fs"); 
const { config } = require("../appModules/rating")
const { getRandomGame } = require("../appModules/api");

async function gameRouteController(res) {
   try {
      const ratingFile = await fs.readFile(config.PATH_TO_RATING_FILE);
      const data = JSON.parse(ratingFile);
      // const game = data[0];
      const game = getRandomGame(data); // Получаем случайную игру
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(game));
   } catch (error) {
      res.statusCode = 500;
      res.end("Internal Server Error");
   }
}
module.exports = gameRouteController; 