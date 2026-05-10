import buyerRaw from '../data/redditKakobuyShareSummaries.json';
import shippingRaw from '../data/redditShippingShareSummaries.json';

/** Mirrors `RedditSharePick` without importing from `.astro`. */
export type RedditSharePickLike = {
  title: string;
  redditUrl: string;
  redditLabel: string;
  addedAt?: string;
};

export type BuyerShareFeedPick = RedditSharePickLike & {
  feedVariant: 'buyer' | 'shipping';
};

/**
 * Newest-first across buyer + shipping digests (same sources as `/buyer-shares`).
 * Updating either JSON + rebuilding refreshes the homepage strip (default limit 4 on hub).
 */
export function getRecentBuyerShares(limit = 4): BuyerShareFeedPick[] {
  const buyerList = (buyerRaw as RedditSharePickLike[]).map((p) => ({
    ...p,
    feedVariant: 'buyer' as const,
  }));
  const shippingList = (shippingRaw as RedditSharePickLike[]).map((p) => ({
    ...p,
    feedVariant: 'shipping' as const,
  }));
  return [...buyerList, ...shippingList]
    .sort((a, b) => (b.addedAt ?? '').localeCompare(a.addedAt ?? ''))
    .slice(0, limit);
}
