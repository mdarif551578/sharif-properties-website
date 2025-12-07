import { MetadataRoute } from 'next';
import { properties } from '@/lib/properties';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.sharifproperties.com';

  // Add static pages
  const staticRoutes = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/properties/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
        url: `${siteUrl}/blog/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
      url: `${siteUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Add dynamic property pages
  const propertyEntries: MetadataRoute.Sitemap = properties.map(({ id }) => ({
    url: `${siteUrl}/properties/${id}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...propertyEntries];
}
