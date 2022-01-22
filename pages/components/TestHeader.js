import useCollapse from "react-collapsed";
import styles from "./TestHeader.module.css";
import { useState } from "react";
import Image from "next/image";
import SvelteLogo from "../../public/images/sveltepng.png";

const TestHeader = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <div id={styles.fontfamilyheader} className="shadow-2xl">
      <header className="text-gray-600 body-font md:hidden">
        <div className="container mx-auto flex p-5 flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <span className="mr-2">
              <Image width={30} height={30} src={SvelteLogo} alt="SvelteLogo" />
            </span>
            <span className="text-3xl">
              SVELTE
              <span id={styles.brandkit} className="mx-0">
                KIT
              </span>
            </span>
          </a>
          <div onClick={() => setMenuIcon(!menuIcon)}>
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0"
              {...getToggleProps()}
            >
              {menuIcon ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-letter-x"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="7" y1="4" x2="17" y2="20" />
                  <line x1="17" y1="4" x2="7" y2="20" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <header className="text-gray-600 body-font md:grid hidden z-50">
        <div className="py-5 container mx-auto grid grid-cols-3 items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-8">
            <span className="mr-2">
              <Image width={30} height={30} src={SvelteLogo} alt="SvelteLogo" />
            </span>
            <span className="pr-8 text-3xl">
              SVELTE
              <span id={styles.brandkit} className="mx-0">
                KIT
              </span>
            </span>
          </a>

          <nav className="flex flex-col items-center">
            <div className="flex flex-row items-center">
              <a id={styles.underline} className="mr-5 hover:text-gray-900">
                Docs
              </a>
              <a id={styles.underline} className="mr-5 hover:text-gray-900">
                FAQ
              </a>
              <a id={styles.underline} className="mr-5 hover:text-gray-900">
                Migrating
              </a>
            </div>
          </nav>

          <div className="flex flex-col items-end border-0 py-1 px-3 focus:outline-none md:mt-0">
            <nav className=" flex flex-wrap text-base justify-center">
              <a id={styles.underline} className="mr-5 hover:text-gray-900">
                Svelte
              </a>

              <svg
                id={styles.svgstroke}
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-messages mr-5 "
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>

              <svg
                id={styles.svgstroke}
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </nav>
          </div>
        </div>
      </header>

      <div className="px-5 md:hidden">
        <section
          className="flex flex-col items-start pb-4"
          {...getCollapseProps()}
        >
          <h1 id={styles.underline}>Docs</h1>
          <h1 id={styles.underline}>FAQ</h1>
          <h1 id={styles.underline}>Migrating</h1>

          <div className="w-full border-t-2 border-black my-4"></div>
          <h1 id={styles.underline}>Svelte</h1>
          <h1 id={styles.underline}>Discord</h1>
          <h1 id={styles.underline}>Github</h1>
        </section>
      </div>
    </div>
  );
};

export default TestHeader;
