export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "exciting-news-centrum-concierge-security-launches-new-website",
    title: "Exciting News: Centrum Concierge & Security Launches New Website!",
    date: "2025-03-27",
    author: "Centrum Concierge",
    image: "/images/unsplash-image-vZJdYl5JVXY.jpg",
    excerpt:
      "We're thrilled to announce the official launch of Centrum Concierge & Security's brand-new website!",
  },
];
