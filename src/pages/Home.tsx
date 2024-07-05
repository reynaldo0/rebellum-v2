import { temuanUmum, TemuanUmum } from "../docs/temuanUmum";
import toggleAccordion from "../func/accordion";

const Home = () => {
  const temuanUmumList: TemuanUmum[] = temuanUmum;

  return (
    <section id="home" className="pt-24">
      <div className="container">
        <div className="flex w-full flex-col-reverse flex-wrap items-center justify-between gap-10 md:flex-row md:gap-0">
          <div className="w-full px-4 md:w-1/2">
            <h1 className="font-poppins text-2xl font-bold md:text-4xl">
              Bagaimana Kasus Kenakalan Remaja
              <span className="indonesia bg-yellow text-white transition-all"></span>
              ?
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              className="color py-4 font-poppins text-sm text-secondary-200 md:text-base">
              Kenakalan remaja adalah wujud dari konflik yang tidak
              terselesaikan dengan baik pada masa kanak-kanak maupun pada saat
              remaja. Tingkat kenakalan remaja di Indonesia cukup tinggi. Data
              UNICEF tahun 2016 menunjukkan bahwa kenakalan pada usia remaja di
              Indonesia diperkirakan mencapai sekitar 50%.
            </p>
            <button
              className="learn-more relative inline-block h-auto w-48 cursor-pointer border-none bg-transparent align-middle font-radioCasnada text-inherit outline-none"
              onClick={() => (window.location.href = "#temuanUmum")}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text translate-x-2">Selengkapnya</span>
            </button>
          </div>
          <div className="relative flex w-1/2 items-center justify-center px-4">
            <canvas
              id="canvas"
              className="h-[350px] w-screen md:h-[300px] md:w-[500px]"></canvas>
            <div
              id="loading"
              className="absolute flex h-56 w-56 items-center justify-center rounded-lg">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-h-12 h-12 animate-spin fill-yellow text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- accordion section start --> */}
      <div id="wave">
        <img
          src="/svg/wave.svg"
          alt="wave"
          className="w-full"
          draggable="false"
        />

        <div id="temuanUmum" className="-mt-1 bg-primary-100 pb-10 pt-36">
          <div className="container">
            <h1
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              className="text-center font-radioCasnada text-2xl font-bold text-white md:text-4xl">
              Temuan Umum
            </h1>

            <div className="mt-10 w-full">
              <div className="accordion flex flex-col">
                {temuanUmumList.map((temuanUmum, index) => (
                  <div
                    key={index}
                    className="accordion-item my-2"
                    data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-delay="50">
                    <button
                      type="button"
                      className="accordion-title flex w-full items-center justify-between rounded-t-lg bg-primary-200 px-4 py-4 text-white transition duration-300 focus:outline-none"
                      onClick={(e) => toggleAccordion(e.currentTarget)}>
                      <span className="text-base font-medium md:text-lg">
                        {temuanUmum.title}
                      </span>
                      <svg
                        className="plus-icon h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                          className="plus"
                          d="M7 10V4a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H4a1 1 0 1 1 0-2h6z"
                        />
                      </svg>
                      <svg
                        className="minus-icon hidden h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                          className="minus"
                          d="M4 9h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      </svg>
                    </button>
                    <div className="accordion-content hidden rounded-b-lg bg-primary-200 px-4 py-2 text-base text-slate-100">
                      {temuanUmum.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
