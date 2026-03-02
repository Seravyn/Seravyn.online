let onlinePlayers = {};

export default function handler(req, res) {
  const now = Date.now();

  const { user, room } = req.query;
  if (user) {
    onlinePlayers[user] = { timestamp: now, room: room || "Unknown" };
  }

  if (req.method === "GET") {
    const active = Object.entries(onlinePlayers)
      .filter(([_, v]) => now - v.timestamp < 30 * 1000)
      .map(([u, v]) => ({ user: u, room: v.room }));

    return res.status(200).json({ active });
  }

  res.status(405).json({ error: "Method not allowed" });
}
