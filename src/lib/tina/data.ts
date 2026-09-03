// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import type { TinaRichTextContent } from '@tinacms/astro';
import { requestWithMetadata } from '@tinacms/astro/data';
import client from '../../../tina/__generated__/client';

export const getConfig = () =>
  requestWithMetadata(client.queries.config({ relativePath: 'config.json' }));

export const getArticle = (slug: string) =>
  requestWithMetadata(client.queries.article({ relativePath: `${slug}.md` }), {
    priority: 'primary',
  });

export const getAuthor = (slug: string) =>
  requestWithMetadata(client.queries.author({ relativePath: `${slug}.json` }));

export const getPage = (slug: string) =>
  requestWithMetadata(client.queries.page({ relativePath: `${slug}.mdx` }), {
    priority: 'primary',
  });

export async function listArticles() {
  const result = await client.queries.articleConnection();
  return (result.data.articleConnection.edges ?? [])
    .flatMap((edge) => (edge?.node ? [edge.node] : []))
    .sort((a, b) => {
      const ad = a.date ? new Date(a.date).valueOf() : 0;
      const bd = b.date ? new Date(b.date).valueOf() : 0;
      return bd - ad;
    });
}

export async function listFeaturedArticles() {
  const result = await client.queries.articleConnection({
    filter: { featured: { eq: true } },
  });
  return (result.data.articleConnection.edges ?? [])
    .flatMap((edge) => (edge?.node ? [edge.node] : []))
    .sort((a, b) => {
      const ad = a.date ? new Date(a.date).valueOf() : 0;
      const bd = b.date ? new Date(b.date).valueOf() : 0;
      return bd - ad;
    });
}

export async function listAuthors() {
  const result = await client.queries.authorConnection();
  return (result.data.authorConnection.edges ?? []).flatMap((edge) =>
    edge?.node ? [edge.node] : [],
  );
}

export async function listPages() {
  const result = await client.queries.pageConnection();
  return (result.data.pageConnection.edges ?? []).flatMap((edge) =>
    edge?.node ? [edge.node] : [],
  );
}

export type CmsConfig = Awaited<ReturnType<typeof getConfig>>['data']['config'];
export type CmsArticle = Awaited<
  ReturnType<typeof getArticle>
>['data']['article'];
export type CmsAuthor = Awaited<ReturnType<typeof getAuthor>>['data']['author'];
export type CmsPage = Awaited<ReturnType<typeof getPage>>['data']['page'];

export type PageBlock = NonNullable<NonNullable<CmsPage['blocks']>[number]>;
export type PageBlockTypename = PageBlock['__typename'];

export type CtaBlock = Extract<PageBlock, { __typename: 'PageBlocksCta' }>;
export type DividerBlock = Extract<
  PageBlock,
  { __typename: 'PageBlocksDivider' }
>;

export type CmsConfigNav = NonNullable<NonNullable<CmsConfig['nav']>[number]>;
export type CmsConfigSocialLink = NonNullable<
  NonNullable<CmsConfig['socialLinks']>[number]
>;
export type CmsConfigSeo = NonNullable<CmsConfig['seo']>;

/** Tina rich-text bodies are typed as `any` in the generated client; this is what `<TinaMarkdown>` expects. */
export type RichText = TinaRichTextContent;
