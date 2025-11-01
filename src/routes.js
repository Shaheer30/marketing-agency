import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ServicesPage from "./pages/ServicesPage.vue";
import BlogsPage from "./pages/BlogsPage.vue";
import ContactPage from "./pages/ContactPage.vue";

// Individual Blog Pages
import Blog1 from "./pages/blogs/Blog1.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: {
      title: "Home - UAE Marketing Agency",
      description:
        "Welcome to UAE Marketing Agency. Boost your digital presence with our expert marketing services.",
    },
  },
  {
    path: "/about",
    component: AboutPage,
    meta: {
      title: "About Us - UAE Marketing Agency",
      description:
        "Learn about our agency mission, values, and expert team of digital marketers.",
    },
  },
  {
    path: "/services",
    component: ServicesPage,
    meta: {
      title: "Services - UAE Marketing Agency",
      description:
        "Explore our comprehensive digital marketing services including SEO, social media, and content marketing.",
    },
  },
  {
    path: "/blogs",
    component: BlogsPage,
    meta: {
      title: "Blog - UAE Marketing Agency",
      description:
        "Read insightful blog posts about digital marketing trends and strategies.",
    },
  },
  {
    path: "/blog/top-10-seo-trends-2024",
    component: Blog1,
    meta: {
      title: "Top 10 SEO Trends for 2024 - UAE Marketing Agency",
      description:
        "Discover the most important SEO strategies that will dominate the digital landscape in 2024.",
    },
  },
  {
    path: "/contact",
    component: ContactPage,
    meta: {
      title: "Contact Us - UAE Marketing Agency",
      description: "Get in touch with our team. We are ready to help your business grow.",
    },
  },
  {
    path: "/blogs/Blog1",
    component: Blog1,
    meta: {
      title: "Contact Us - UAE Marketing Agency",
      description: "Get in touch with our team. We are ready to help your business grow.",
    },
  },
];

export default routes;