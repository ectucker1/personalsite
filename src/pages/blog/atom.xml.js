import { Feed } from "feed";
import { getCollection } from "astro:content";
import { postUrl } from "@data/post";

export async function GET(context) {
  const site = context.site;
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const feedUrl = new URL("/blog/atom.xml", site).toString();

  const feed = new Feed({
    title: "ectcetera",
    author: {
      name: "Ella Tucker",
      link: "https://ectcetera.net",
    },
    description: "General-purpose tinkering.",
    id: feedUrl,
    link: site.toString(),
    language: "en-us",
    feedLinks: {
      atom: feedUrl,
    },
    updated: posts.length ? posts[0].data.date : undefined,
  });

  for (const post of posts) {
    const link = new URL(postUrl(post), site).toString();
    feed.addItem({
      title: post.data.title,
      id: link,
      link,
      description: post.data.tagline,
      date: post.data.date,
    });
  }

  return new Response(feed.atom1(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
