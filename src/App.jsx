import "./App.css";

function App() {
  return (
    <div className="flex h-screen items-center justify-center border-[5px] border-black px-5">
      <div className="font-figtree rounded-2xl border border-red-500 bg-white p-5 text-base shadow-[10px_10px_0_0_black]">
        <div className="overflow-hidden rounded-xl">
          <img src="/illustration-article.svg" alt="svg" />
        </div>
        <div className="">
          <p>Learning</p>
          <p className="">Published 21 Dec 2023</p>
        </div>
        <div className="">
          <h1 className="">HTML & CSS foundations</h1>
          <p className="">
            These languages are the backbone of every website, defining
            structure, content and presentation.
          </p>
        </div>
        <div className="">
          <img src="/image-avatar.webp" alt="logo" className="" />
          <p className="">Grep Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default App;
