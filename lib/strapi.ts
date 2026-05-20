const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export interface Product {
  id: number;
  name: string;
  material: string;
  moq: string;
  category?: string;
  featured?: boolean;
  image: {
    url: string;
    alternativeText?: string;
  } | null;
}

export interface Brand {
  id: number;
  name: string;
  logo: {
    url: string;
    alternativeText?: string;
  } | null;
}

export interface Banner {
  id: number;
  title?: string;
  description?: string;
  image: {
    url: string;
    alternativeText?: string;
  } | null;
  active: boolean;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${STRAPI_URL}/api/products?populate=image`, {
      headers,
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Strapi API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const { data } = await res.json();
    return data.map((item: any) => {
      // Handle image as array (Strapi Cloud format)
      let imageData = null;
      if (item.image) {
        const img = Array.isArray(item.image) ? item.image[0] : item.image;
        if (img && img.url) {
          imageData = {
            url: img.url,
            alternativeText: img.alternativeText || null,
          };
        }
      }

      return {
        id: item.id,
        name: item.name,
        material: item.material,
        moq: item.moq,
        category: item.category,
        featured: item.featured,
        image: imageData,
      };
    });
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

export function getStrapiImageUrl(imageUrl: string | null | undefined): string | null {
  if (!imageUrl) return null;
  if (imageUrl.startsWith('http')) return imageUrl;

  // Handle relative URLs
  const url = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
  const fullUrl = `${STRAPI_URL}${url}`;
  console.log('Image URL:', imageUrl, '→', fullUrl);
  return fullUrl;
}

export async function getBanners(): Promise<Banner[]> {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${STRAPI_URL}/api/banners?populate=image&filters[active][$eq]=true`, {
      headers,
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Strapi API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const { data } = await res.json();
    console.log('Banners from Strapi:', data);

    const mapped = data.map((item: any) => {
      let imageData = null;
      if (item.image) {
        const img = Array.isArray(item.image) ? item.image[0] : item.image;
        if (img && img.url) {
          imageData = {
            url: img.url,
            alternativeText: img.alternativeText || null,
          };
        }
      }

      return {
        id: item.id,
        title: item.title,
        description: item.description,
        image: imageData,
        active: item.active,
      };
    });

    console.log('Mapped banners:', mapped);
    return mapped;
  } catch (error) {
    console.error('Failed to fetch banners:', error);
    return [];
  }
}

export async function getBrands(): Promise<Brand[]> {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${STRAPI_URL}/api/brands?populate=logo`, {
      headers,
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Strapi API error: ${res.status} ${res.statusText}`);
      return [];
    }

    const { data } = await res.json();
    return data.map((item: any) => {
      let logoData = null;
      if (item.logo) {
        const img = Array.isArray(item.logo) ? item.logo[0] : item.logo;
        if (img && img.url) {
          logoData = {
            url: img.url,
            alternativeText: img.alternativeText || null,
          };
        }
      }

      return {
        id: item.id,
        name: item.name,
        logo: logoData,
      };
    });
  } catch (error) {
    console.error('Failed to fetch brands:', error);
    return [];
  }
}

export async function postQuoteRequest(data: {
  customer_name: string;
  email: string;
  phone: string;
  company: string;
  items: any[];
  notes?: string;
}) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${STRAPI_URL}/api/quote-requests`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ data }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error('Quote request error:', error);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to post quote request:', error);
    return null;
  }
}

export async function postSubscriber(email: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${STRAPI_URL}/api/subscribers`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ data: { email } }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error('Subscriber error:', error);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to post subscriber:', error);
    return null;
  }
}

export async function postContactSubmission(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${STRAPI_URL}/api/contact-submissions`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ data }),
    });

    if (!res.ok) {
      console.error('Contact submission error:', await res.json());
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to post contact submission:', error);
    return null;
  }
}
