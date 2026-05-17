import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { postUrl } from "@data/post";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "ectcetera",
    description: "Experiments in gamedev and more.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.tagline,
      link: postUrl(post),
    })),
    customData: `<language>en-us</language>`,
  });
}
