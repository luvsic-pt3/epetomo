import { NextApiHandler } from "next"
import Filter from "bad-words"
import { query } from "../../lib/db"

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
  const {
    id,
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
    if (!id || !name || !sex) {
      return res
        .status(400)
        .json({ message: "`id`,`name`, and `sex` are all required" })
    }

    const results = await query(
      `
      UPDATE profiles
SET name = ?, sex = ?, age = ?,address = ? ,twitter_id = ?,platform = ?,playstyle=?,voicechat = ?  ,time_to_play=?,purpose=?,favorite_weapon = ? ,favorite_legend=?,highest_damage = ? ,kill_per_death = ? ,rank = ? ,description = ?
      WHERE id = ?
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
        id,
      ],
    )

    return res.json(results)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e.message })
  }
}

export default handler
