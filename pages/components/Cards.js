import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className="">
      <section className="text-white body-font relative bottom-24">
        <div className="container px-5 md:px-20 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 ">
              <div
                id={styles.firstcard}
                className="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-left relative shadow-2xl"
              >
                <h1 className="title-font sm:text-2xl text-xl font-medium mb-3">
                  Powered by Svelte
                </h1>
                <p className="leading-relaxed mb-3">
                  SvelteKit is an application framework powered by Svelte —
                  build bigger apps with a smaller footprint
                </p>
                <button className="text-black bg-white flex flex-row justify-between items-center w-2/3 px-4 py-4 rounded-lg hover:bg-transparent hover:border-2 hover:border-white ease-in-out transition-all">
                  <div>learn Svelte</div>
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 ">
              <div
                id={styles.secondcard}
                className="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-left relative shadow-2xl"
              >
                <h1 className="title-font sm:text-2xl text-xl font-medium mb-3">
                  Best of both worlds
                </h1>
                <p className="leading-relaxed mb-3">
                  All the SEO and progressive enhancement of a server-rendered
                  app, with the slick navigation of an SPA
                </p>
                <button className="text-black bg-white flex flex-row justify-between items-center w-2/3 px-4 py-4 rounded-lg hover:bg-transparent hover:border-2 hover:border-white ease-in-out transition-all">
                  <div>read the docs</div>
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 ">
              <div
                id={styles.thirdcard}
                className="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden text-left relative shadow-2xl"
              >
                <h1 className="title-font sm:text-2xl text-xl font-medium mb-3">
                  Build fast
                </h1>
                <p className="leading-relaxed mb-3">
                  Hit the ground running with advanced routing, server-side
                  rendering, code-splitting, offline support and more
                </p>
                <button className="text-black bg-white flex flex-row justify-between items-center w-2/3 px-4 py-4 rounded-lg hover:bg-transparent hover:border-2 hover:border-white ease-in-out transition-all">
                  <div>read the docs</div>
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
