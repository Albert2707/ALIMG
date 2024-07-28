import { Request, Response } from "express";
import { unsplash } from "../util/unplash";

export const Get = (req: Request, res: Response) => {
  try {
    const key = req.headers.access_key as string;
    const uns = unsplash(key);
    uns.photos
      .get({ photoId: "" })
      .then((result) => {
        return res.json(result.response);
      })
      .catch((err) => {
        return res.status(500).json({ msg: err.message });
      });
  } catch {
    return res.status(500).json({ msg: "Something went wrong" });
  }
};
