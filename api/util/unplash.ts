import { createApi } from "unsplash-js";

export const unsplash = (key: string) => {
  return createApi({
    accessKey: key,
  });
};
