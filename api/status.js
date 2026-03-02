let onlinePlayers = {};

export default function handler(req, res) {
  const now = Date.now();

  if (req.method === "POST") {
    const { user, room } = req.body;
    if (!user) return res.status(400).json({ error: "No user provided" });

    onlinePlayers[user] = { timestamp: now, room: room || "Unknown" };
    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    const requester = req.query.user;
    if (!requester || !onlinePlayers[requester]) {
      return res.status(403).json({ error: "This is a API you cannot visit this locally." });
      return res.status(403).json({ error: "Error: 403" });
    }

    const active = Object.entries(onlinePlayers)
      .filter(([_, v]) => now - v.timestamp < 30 * 1000)
      .map(([u, v]) => ({ user: u, room: v.room }));

    return res.status(200).json({ active });
  }

  res.status(405).json({ error: "Method not allowed" });
}
