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

// pageSize = 9999 is a hack to make all the articles come in descending order by date.
// Ignore pagination until later
export async function listArticles(pageSize: number = 9999) {
  const result = await client.queries.articleConnection({
    sort: 'date',
    last: pageSize,
  });
  return (result.data.articleConnection.edges ?? []).flatMap((edge) =>
    edge?.node ? [edge.node] : [],
  );
}

// default pageSize to 3 since we only use this on small Article Preview
// components
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

export type ArticleGridBlock = Extract<
  PageBlock,
  { __typename: 'PageBlocksArticleGrid' }
>;
export type ArticleStripBlock = Extract<
  PageBlock,
  { __typename: 'PageBlocksArticleStrip' }
>;
export type ContactFormBlock = Extract<
  PageBlock,
  { __typename: 'PageBlocksContactForm' }
>;
export type ContentBlock = Extract<
  PageBlock,
  { __typename: 'PageBlocksContent' }
>;
export type CtaBlock = Extract<PageBlock, { __typename: 'PageBlocksCta' }>;
export type DividerBlock = Extract<
  PageBlock,
  { __typename: 'PageBlocksDivider' }
>;
export type HeroBlock = Extract<PageBlock, { __typename: 'PageBlocksHero' }>;
export type LargeArticlePreviewBlock = Extract<
  PageBlock,
  { __typename: 'PageBlocksLargeArticlePreview' }
>;
export type SocialActionsBlock = Extract<
  PageBlock,
  { __typename: 'PageBlocksSocialActions' }
>;

export type CmsConfigNav = NonNullable<NonNullable<CmsConfig['nav']>[number]>;
export type CmsConfigSocialLink = NonNullable<
  NonNullable<CmsConfig['socialLinks']>[number]
>;
export type CmsConfigSeo = NonNullable<CmsConfig['seo']>;

export type SocialAction = NonNullable<
  NonNullable<SocialActionsBlock['actions']>[number]
>;
export type TitleActionField = NonNullable<ArticleStripBlock['titleAction']>;

/** Tina rich-text bodies are typed as `any` in the generated client; this is what `<TinaMarkdown>` expects. */
export type RichText = TinaRichTextContent;
