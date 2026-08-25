// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import type { TinaRichTextContent } from '@tinacms/astro';
import { requestWithMetadata } from '@tinacms/astro/data';
import client from '../../../tina/__generated__/client';

export const getArticle = (slug: string) =>
  requestWithMetadata(client.queries.article({ relativePath: slug + '.md' }), { priority: 'primary', });

export const getAuthor = (slug: string) =>
	requestWithMetadata(client.queries.author({ relativePath: `${slug}.json` }), { priority: 'primary' });

export type CmsArticle = Awaited<ReturnType<typeof getArticle>>['data']['article'];
export type CmsAuthor = Awaited<ReturnType<typeof getAuthor>>['data']['author'];


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
    filter: { featured: {eq: true } },
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
	return (result.data.authorConnection.edges ?? [])
		.flatMap((edge) => (edge?.node ? [edge.node] : []));
}

/** Tina rich-text bodies are typed as `any` in the generated client; this is what `<TinaMarkdown>` expects. */
export type RichText = TinaRichTextContent;
