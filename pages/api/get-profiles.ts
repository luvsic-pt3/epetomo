import { NextApiHandler } from "next"
import { query } from "../../lib/db"

const handler: NextApiHandler = async (req, res) => {
  try {
    const results = await query(`
      SELECT * FROM profiles
      ORDER BY id DESC
      LIMIT 30
  `)
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
