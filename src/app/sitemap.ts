import { MetadataRoute } from 'next';
import { properties } from '@/lib/properties';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.sharifproperties.com';

  const propertyEntries: MetadataRoute.Sitemap = properties.map(({ id }) => ({
    url: `${siteUrl}/properties/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/properties`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...propertyEntries,
  ];
}
