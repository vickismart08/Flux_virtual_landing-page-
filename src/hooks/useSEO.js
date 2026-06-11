/**
 * SEO Metadata Hook
 */
import { useEffect } from 'react';
import { config } from '../config';

export const useSEO = (pageTitle, pageDescription) => {
  useEffect(() => {
    // Update page title
    document.title = pageTitle || config.seo.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription || config.seo.description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle || config.seo.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', pageDescription || config.seo.description);
    }

    // Update Twitter Card
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', pageTitle || config.seo.title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', pageDescription || config.seo.description);
    }
  }, [pageTitle, pageDescription]);
};
