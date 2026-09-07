// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import type { TinaRichTextContent } from '@tinacms/astro';
import { requestWithMetadata } from '@tinacms/astro/data';
import client from '../../../tina/__generated__/client';

export const getArticle = (slug: string) =>
  requestWithMetadata(client.queries.article({ relativePath: `${slug}.md` }), {
    priority: 'primary',
  });

export const getAuthor = (slug: string) =>
  requestWithMetadata(client.queries.author({ relativePath: `${slug}.json` }), {
    priority: 'primary',
  });

export type CmsArticle = Awaited<
  ReturnType<typeof getArticle>
>['data']['article'];
export type CmsAuthor = Awaited<ReturnType<typeof getAuthor>>['data']['author'];

export async function listArticles() {
  const result = await client.queries.articleConnection({
    sort: 'date',
    last: 9999, // hack to make all the articles come in reverse. Ignore page size until later
  });
  return (result.data.articleConnection.edges ?? []).flatMap((edge) =>
    edge?.node ? [edge.node] : [],
  );
}

export async function listFeaturedArticles(pageSize: number = 3) {
  const result = await client.queries.articleConnection({
    filter: { featured: { eq: true } },
    sort: 'date',
    last: pageSize,
  });
  return (result.data.articleConnection.edges ?? []).flatMap((edge) =>
    edge?.node ? [edge.node] : [],
  );
}

export async function listAuthors() {
  const result = await client.queries.authorConnection({
    sort: 'name',
  });
  return (result.data.authorConnection.edges ?? []).flatMap((edge) =>
    edge?.node ? [edge.node] : [],
  );
}

/** Tina rich-text bodies are typed as `any` in the generated client; this is what `<TinaMarkdown>` expects. */
export type RichText = TinaRichTextContent;
