import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      className="bg-transparent overflow-visible md:px-24 px-0 pt-12 relative"
      id={styles.backgroundhero}
    >
      <section id={styles.fontfamilyhero} className="text-black body-font">
        <div className="container mx-auto md:flex md:flex-row md:items-center flex flex-col items-center">
          <div className="md:w-1/2 w-full flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center md:static relative top-24">
            <h1 className="title-font text-7xl md:text-8xl mb-4 font-medium text-gray-900">
              SVELTE
              <span id={styles.herokit} className="mx-0">
                KIT
              </span>
            </h1>
            <p id={styles.herokit} className="mb-8 leading-relaxed">
              THE FASTEST WAY TO BUILD SVELTE APPS
            </p>
          </div>
          <div
            id={styles.heroimage}
            className="w-full md:w-1/2 flex flex-col items-center relative overflow-hidden right-8"
          >
            <h1 className="invisible pt-72 pb-56  pr-72">
              Hello I am an image!
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
