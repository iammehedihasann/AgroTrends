import React from "react";

import HoverCard from "./card/HoverCard";
import AuthorCard from "./card/AuthorCard";
import assets from "../assets/assets";

const Blog = () => {
  return (
    <section className="px-8 py-10">
      <h2 className="text-xl font-semibold mb-3">Blogs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <HoverCard
          image={assets.blogging}
          title="The Art of writting"
          info="Discover tips and tricks for holding your writting skills and finding your unique voice as a writer"
          hoverInfo="Detailed information about the blog."
        />
        <HoverCard
          image={assets.reading}
          title="Reading for pleasure"
          info="Explore the joys of reading and how itr can enrich your life in unexpected ways."
          hoverInfo="Detailed information about the blog."
        />
        <HoverCard
          image={assets.fertilizer}
          title="Blogging Essentials"
          info="Learn the essentials of startinf and maintaining a successful blog from contant creation  to audience engagement"
          hoverInfo="Detailed information about the blog."
        />
        <HoverCard
          image="https://via.placeholder.com/300"
          title="Blog Title 4"
          info="Short description of the blog."
          hoverInfo="Detailed information about the blog."
        />
      </div>
      <h2 className="text-xl font-semibold mb-3 mt-12 pt-6 border-t-2 ">
        Author
      </h2>
      <div className="text-xl font-semibold bg-gray-200 mt-6 flex flex-wrap  gap-4 p-5">
        <AuthorCard
          image={assets.mehedi}
          name="Mehedi Hasan"
          bio="This is mehedi Hasan a software engineer . He is a passionate developer who loves to write about technology and programming."
        />
        <AuthorCard
          image={assets.mehedi}
          name="Mehedi Hasan"
          bio="This is mehedi Hasan a software engineer . He is a passionate developer who loves to write about technology and programming."
        />
        <AuthorCard
          image={assets.mehedi}
          name="Mehedi Hasan"
          bio="This is mehedi Hasan a software engineer . He is a passionate developer who loves to write about technology and programming."
        />
      </div>
    </section>
  );
};
export default Blog;
