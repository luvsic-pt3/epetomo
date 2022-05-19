const path = require("path")
const envPath = path.resolve(process.cwd(), ".env.local")

console.log({ envPath })

require("dotenv").config({ path: envPath })

const mysql = require("serverless-mysql")

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
  },
})

async function query(q) {
  try {
    const results = await db.query(q)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}

// Create "entries" table if doesn't exist
async function migrate() {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS profiles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name TEXT,
        sex TEXT,
        age TEXT,
        address TEXT,
        twitter_id TEXT,
        platform TEXT,
        playstyle TEXT,
        voicechat TEXT,
        time_to_play TEXT,
        purpose TEXT,
        favorite_weapon TEXT,
        favorite_legend TEXT,
        highest_damage TEXT,
        kill_per_death TEXT,
        rank TEXT,
        description TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
   `)
    console.log("migration ran successfully")
  } catch (e) {
    console.error("could not run migration, double check your credentials.", e)
    process.exit(1)
  }
}

migrate().then(() => process.exit())
