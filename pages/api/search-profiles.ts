import { NextApiHandler } from "next"
import { query } from "../../lib/db"

const handler: NextApiHandler = async (req, res) => {
  const { sex } = req.query
  console.log(req)
  try {
    const results = await query(
      `
      SELECT * FROM profiles
      WHERE sex = ?//, platform = ?, playstyle =? , purpose = ?, rank = ?
      ORDER BY id DESC
      LIMIT 30
  `,
      // [sex],
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
