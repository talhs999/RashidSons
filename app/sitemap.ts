import { MetadataRoute } from "next";
import { brands, categories, products } from "@/lib/data";
import { blogPosts } from "@/lib/newsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jrashid.com";

  // Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dealers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tires-101/sizing-information`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tires-101/selecting-the-right-tire`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Dynamic Brand Pages: /brands/[slug]
  const brandRoutes: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${baseUrl}/brands/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Dynamic Category Pages: /brands/[slug]/[categorySlug]
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => {
    const brand = brands.find((b) => b.id === cat.brand_id);
    const brandSlug = brand ? brand.slug : "yokohama";
    return {
      url: `${baseUrl}/brands/${brandSlug}/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  // Dynamic Product Pages: /brands/[slug]/[categorySlug]/[productSlug]
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => {
    const brand = brands.find((b) => b.id === product.brand_id);
    const category = categories.find((c) => c.id === product.category_id);
    const brandSlug = brand ? brand.slug : "yokohama";
    const categorySlug = category ? category.slug : "passenger";
    return {
      url: `${baseUrl}/brands/${brandSlug}/${categorySlug}/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    };
  });

  // Dynamic News/Blog Post Pages: /news/[slug]
  const newsRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...brandRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...newsRoutes,
  ];
}
