import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(500).json({
    status: 500,
    message: "I don't really know what to do with this URL anymore"
  });
}
