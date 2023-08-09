// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default function caseFlipperAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end("Not Found!");
    return;
  }
  const { word } = req.body;

  const newLetters = [...word]
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");
  console.log(newLetters);
  res.status(200).json({ word: newLetters });
}
