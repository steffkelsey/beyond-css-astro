// @ts-nocheck (generated types/client appear after your first tinacms dev run)
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';

import type { ConfigQuery } from '../../tina/__generated__/types';
import type { CmsConfig } from './data';
import SiteHeader from '../../components/SiteHeader.astro';
import SiteFooter from '../../components/SiteFooter.astro';
import { getConfig } from './data';

export const islands: IslandRegistry = {
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
