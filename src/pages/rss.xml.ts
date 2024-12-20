import rss from "@astrojs/rss";
import { HOME } from "src/consts.ts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: [],
  });
}
