import "./App.css";

function App() {
  return (
    <div className="flex h-screen items-center justify-center border-[5px] border-black px-5">
      <div className="font-figtree flex max-w-[375px] flex-col items-center justify-center rounded-2xl bg-white p-5 text-base shadow-[10px_10px_0_0_black]">
        <div className="mb-4 w-full overflow-hidden rounded-xl">
          <img src="/illustration-article.svg" alt="svg" />
        </div>
        <div className="mb-4 w-full">
          <p className="mb-2 w-fit rounded-md bg-[#f4d04e] px-2 py-1 font-extrabold">
            Learning
          </p>
          <p className="">Published 21 Dec 2023</p>
        </div>
        <div className="mb-4 w-full">
          <h1 className="mb-3 text-[22px] font-extrabold">
            HTML & CSS foundations
          </h1>
          <p className="text-gray-600">
            These languages are the backbone of every website, defining
            structure, content and presentation.
          </p>
        </div>
        <div className="flex w-full items-center justify-start">
          <img src="/image-avatar.webp" alt="logo" className="" />
          <p className="">Grep Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default App;
