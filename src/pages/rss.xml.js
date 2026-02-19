import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = await getCollection('essays', ({ data }) => {
    return data.draft !== true;
  });

  return rss({
    title: 'NorthWoods Sentinel',
    description: 'Essays on security, AI, and human performance by Rob Chuvala.',
    site: context.site,
    items: essays
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/essays/${post.slug}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}
