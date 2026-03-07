import React, { useEffect, useState } from "react";
// Components
import BlogHero from "../components/blog/BlogHero";
import CategoryPills from "../components/blog/CategoryPills";
import ArticleList from "../components/blog/ArticleList";
import BlogGrid from "../components/blog/BlogGrid";
import CallToAction from "../components/CallToAction";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All blogs");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#040812] text-white selection:bg-indigo-500/30">
      <BlogHero />
      <CategoryPills activeCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <ArticleList selectedCategory={selectedCategory} />
      <BlogGrid selectedCategory={selectedCategory} />
      <CallToAction />
    </div>
  );
};

export default BlogPage;


