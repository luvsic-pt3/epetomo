import { NextApiHandler } from "next"
import { query } from "../../lib/db"

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query
  try {
    if (!id) {
      return res.status(400).json({ message: "`id` required" })
    }
    if (typeof parseInt(id.toString()) !== "number") {
      return res.status(400).json({ message: "`id` must be a number" })
    }
    const results = await query(
      `
      SELECT id,           
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
      FROM profiles
      WHERE id = ?
    `,
      id,
    )

    return res.json(results[0])
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
