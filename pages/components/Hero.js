import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      className="bg-transparent overflow-visible md:px-24 px-0"
      id={styles.backgroundhero}
    >
      <section className="text-black body-font">
        <div className="container mx-auto md:flex md:flex-row md:items-center flex flex-col items-center">
          <div className="md:w-1/2 w-full flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-8xl mb-4 font-medium text-gray-900">
              SVELTEKIT
            </h1>
            <p className="mb-8 leading-relaxed">
              THE FASTEST WAY TO BUILD SVELTE APPS.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img
              id={styles.image}
              className="object-cover object-center rounded h-full w-full scale-150"
              alt="hero"
              src="https://kit.svelte.dev/_app/assets/svelte-kit-machine-f9e1f4d5.avif"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
