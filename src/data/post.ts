import { urlDate } from "./date.ts";

export const postSlug = (post) => {
    return post.id.split("/").pop() ?? post.id;
}

export const postUrl = (post) => {
    return `/blog/${urlDate(post.data.date)}/${postSlug(post)}`
}
