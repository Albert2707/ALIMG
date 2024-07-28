import { Request, Response } from "express";
export const accessKey = (req: Request, res: Response, next: any) => {
  try {
    const { access_key } = req.headers;
    if (!access_key) {
      return res.status(403).json({ msg: "You must provide an access key" });
    } else if (access_key.length < 40) {
      return res
        .status(400)
        .json({ msg: "You must provide a valid access key" });
    }
    next();
  } catch {
    res.status(500).json({ msg: "Something went wrong" });
  }
};
