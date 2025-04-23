import React from "react";
import AuthorCard from "../components/card/AuthorCard";
import assets from "../assets/assets";

function Authors() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-3 mt-12 pt-6 border-t-2  flex  justify-center items-center ">
        Author
      </h2>
      <div className=" flex ">
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
    </>
  );
}

export default Authors;
