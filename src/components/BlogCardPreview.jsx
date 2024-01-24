import React from "react";

const BlogCardPreview = () => {
  return (
    <div className="font-figtree flex max-w-[375px] flex-col items-center justify-center rounded-2xl border border-black bg-white p-5 text-base shadow-[10px_10px_0_0_black]">
      <div className="mb-5 w-full overflow-hidden rounded-xl">
        <img src="/illustration-article.svg" alt="svg" />
      </div>
      <div className="mb-5 w-full">
        <p className="mb-3 w-fit rounded-[5px] bg-[#f4d04e] px-3 py-1 text-sm font-extrabold">
          Learning
        </p>
        <p className="text-sm">Published 21 Dec 2023</p>
      </div>
      <div className="mb-5 w-full">
        <h1 className="mb-4 text-[20px] font-black sm:text-[24px]">
          HTML & CSS foundations
        </h1>
        <p className="text-gray-400">
          These languages are the backbone of every website, defining structure,
          content and presentation.
        </p>
      </div>
      <div className="flex w-full items-center justify-start gap-2">
        <img src="/image-avatar.webp" alt="logo" className="w-[30px]" />
        <p className="text-sm font-bold">Grep Hooper</p>
      </div>
    </div>
  );
};

export default BlogCardPreview;
