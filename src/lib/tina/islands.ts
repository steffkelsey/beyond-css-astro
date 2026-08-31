// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';

import type { ArticleQuery, ConfigQuery } from '../../tina/__generated__/types';
import type { CmsArticle, CmsConfig } from './data';
import ArticleBody from '../../components/islands/ArticleBody.astro';
import SiteHeader from '../../components/SiteHeader.astro';
import SiteFooter from '../../components/SiteFooter.astro';
import { getArticle, getConfig } from './data';

export const islands: IslandRegistry = {
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
    wrapper: { tag: 'div' },
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
