import { NextApiHandler } from "next"
import Filter from "bad-words"
import { query } from "../../lib/db"

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
  const {
    name,
    sex,
    age,
    address,
    twitter_id,
    platform,
    playstyle,
    voicechat,
    time_to_play,
    purpose,
    favorite_weapon,
    favorite_legend,
    highest_damage,
    kill_per_death,
    rank,
    description,
  } = req.body
  try {
    console.log(req.body)
    const results = await query(
      `
      INSERT INTO profiles (
          name,
          sex,
          age,
          address,
          twitter_id,
          platform,
          playstyle,
          voicechat,
          time_to_play,
          purpose,
          favorite_weapon,
          favorite_legend,
          highest_damage,
          kill_per_death,
          rank,
          description
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        name,
        sex,
        age,
        address,
        twitter_id,
        platform,
        playstyle,
        voicechat,
        time_to_play,
        purpose,
        favorite_weapon,
        favorite_legend,
        highest_damage,
        kill_per_death,
        rank,
        description,
      ],
    )
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
