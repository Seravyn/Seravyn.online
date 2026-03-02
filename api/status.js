let onlinePlayers = {};

export default function handler(req, res) {
  const now = Date.now();

  if (req.method === "POST") {
    const { user } = req.body;
    if (!user) return res.status(400).json({ error: "No user provided" });

    onlinePlayers[user] = now;
    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    const active = Object.keys(onlinePlayers).filter(
      u => now - onlinePlayers[u] < 30 * 1000
    );
    return res.status(200).json({ active });
  }

  res.status(405).json({ error: "Method not allowed" });
}
