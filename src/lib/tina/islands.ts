// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';

import type {
  ArticleQuery,
  ConfigQuery,
  PageQuery,
} from '../../tina/__generated__/types';
import type { CmsArticle, CmsConfig, CmsPage } from './data';
import ArticleBody from '../../components/islands/ArticleBody.astro';
import PageBody from '../../components/islands/PageBody.astro';
import SiteHeader from '../../components/SiteHeader.astro';
import SiteFooter from '../../components/SiteFooter.astro';
import {
  articlesPageSize,
  getArticle,
  getConfig,
  getPage,
  listArticles,
} from './data';
import type { Page } from 'astro';
import { paginate } from 'astro';

export const islands: IslandRegistry = {
  page: {
    fetch: async (_request, params) => {
      const slug = params.get('slug') ?? 'home';
      if (slug !== 'articles') {
        return await getPage(slug);
      }
      const allArticles = await listArticles();
      const lastPageNum = Math.ceil(allArticles.length / articlesPageSize);
      const last = lastPageNum > 1 ? `/${slug}/${lastPageNum}` : undefined;
      const nextPage = last !== undefined ? `/${slug}/2` : undefined;
      const p: Page = {
        data: allArticles.splice(0, articlesPageSize),
        start: 0,
        end: articlesPageSize - 1,
        size: articlesPageSize,
        total: allArticles.length,
        currentPage: 1,
        lastPage: lastPageNum,
        url: {
          current: `/${slug}`,
          next: nextPage,
          prev: undefined,
          first: undefined,
          last: last,
        },
      };
      const result = await getPage(slug);
      result['page'] = p;
      return result;
    },
    component: PageBody,
    wrapper: { tag: 'main' },
    propsFromData: (data) => ({
      data: (data as QueryResult<PageQuery>).data?.page as CmsPage | undefined,
      page: data.page,
    }),
  },
  article: {
    fetch: (_request, params) => getArticle(params.get('slug') ?? ''),
    component: ArticleBody,
    wrapper: { tag: 'article' },
    propsFromData: (data) => ({
      data: (data as QueryResult<ArticleQuery>).data?.article as
        CmsArticle | undefined,
    }),
  },
  global: {
    fetch: () => getConfig(),
    component: SiteHeader,
    wrapper: { tag: 'header', className: 'site-header' },
    propsFromData: (data) => ({
      config: (data as QueryResult<ConfigQuery>).data?.config as
        CmsConfig | undefined,
    }),
  },
  'global-footer': {
    fetch: () => getConfig(),
    component: SiteFooter,
    wrapper: { tag: 'div' },
    propsFromData: (data) => ({
      config: (data as QueryResult<ConfigQuery>).data?.config as
        CmsConfig | undefined,
    }),
  },
};
