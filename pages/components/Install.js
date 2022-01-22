import styles from "./Install.module.css";

const Install = () => {
  return (
    <div id={styles.fontfamilyinstall}>
      <section className="text-black body-font md:px-20 px-5 relative bottom-12">
        <div className="container mx-auto flex justify-end py-5 md:flex-row flex-col items-center">
          <div className="md:w-1/2 flex flex-col items-start  mb-16 md:mb-0 text-left pr-8">
            <p className="mb-4 leading-relaxed">
              SvelteKit is a framework for building web applications of all
              sizes, with a beautiful development experience and flexible
              filesystem-based routing.
            </p>

            <p className="mb-4 leading-relaxed">
              Unlike single-page apps, SvelteKit doesn't compromise on SEO,
              progressive enhancement or the initial load experience — but
              unlike traditional server-rendered apps, navigation is
              instantaneous for that app-like feel.
            </p>

            <p className="mb-4 leading-relaxed text-left">
              Read the{" "}
              <span id={styles.blog} className="mx-1">
                introductory blog
              </span>{" "}
              post to learn more.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div
              id={styles.installbox}
              className="py-12 px-12 flex flex-col items-start rounded-lg shadow-inner"
            >
              <h1 id={styles.fontfamilyinstallcode} className="mb-2">
                npm init svelte@next my-app
              </h1>
              <h1 id={styles.fontfamilyinstallcode} className="mb-2">
                cd my-app
              </h1>
              <h1 id={styles.fontfamilyinstallcode} className="mb-2">
                npm install
              </h1>
              <h1 id={styles.fontfamilyinstallcode} className="mb-4">
                npm run dev -- --open
              </h1>
              <button
                id={styles.installbutton}
                className="text-white flex flex-row justify-between items-center w-1/2 px-4 py-2 rounded-lg ease-in-out transition-all"
              >
                <div>get started</div>
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
      </section>
    </div>
  );
};

export default Install;
