import { Inter } from "next/font/google";
import MainImage from "./components/MainImage";
import { Main } from "next/document";
import { PicData, pics } from "./components/GridData";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="grid gap-[10vh]">
      <span className="h-[80vh] grid place-content-center gap-[5vh] md:flex md:flex-col md:h-fit md:pb-[15vh]">
        <span className="grid place-content-center p-4 text-center gap-3 md:min-h-[40vh]">
          <h1 className={`text-darkBrown text-base md:text-xl`}>
            Welcome to Iya Eba's Restaurant!
          </h1>

          <p
            className={`${inter.className} text-darkBrown text-[2rem] tracking-wider uppercase md:text-7xl`}
          >
            Eat. Drink. Relax.
          </p>
        </span>

        <span className="md:hidden">
        <MainImage
          src={"/depositphotos_154705288-stock-photo-west-african-national-cuisine-jollof.jpg"}
          alt={"Jollof rice with chicken and plantain"}
        />
        </span>

        <span className="hidden md:flex md:flex-wrap md:justify-center min-h-[100vh] gap-1">
          {pics.map((picData: PicData) => {
            return <span key={picData.alt} className="w-[33%] h-[40vh]">
              <MainImage {...picData} />
            </span>
          })}
        </span>
      </span>

      <span className="p-4 grid gap-6 bg-darkBrown h-[70vh] place-content-center md:text-center md:min-h-[70vh] md:pb-[15vh]">
        <h2 className="uppercase text-2xl text-white md:text-4xl">About us</h2>

        <p className="text-white md:w-[50%] md:m-auto">
          At the core of Iya Eba's operations is Alhaja Fausat Adebayo, a
          76-year-old figure whose unwavering dedication, resilience, and
          devotion to her community continue to inspire and define the
          restaurant's essence. <br />
          <br />
          Serving the bustling city of Lagos for over 50 years, Iya Eba has
          become a significant symbol of the region's rich culinary legacy and
          an essential support system within the community, especially during
          challenging times such as the Covid-19 pandemic.
        </p>
      </span>

      <span className="grid gap-6 h-[100vh] place-content-center p-2 md:h-fit md:grid-cols-2 md:p-4 md:pb-[15vh]">
        <span className="md:p-4 md:relative">
        <MainImage
          src={
            "/stock-photo-thai-cuisine-concept-homemade-beef-red-curry-panang-black-background.jpg"
          }
          alt={"Nigerian party jollof rice"}
        />
        <span className="hidden md:block w-[95%] h-[90%] bg-black absolute top-[10%] right-[5%] md:-z-10"></span>
        </span>
        <span className="p-4 text-center grid gap-4 md:place-content-center">
          <h2 className="uppercase text-2xl text-darkBrown md:text-4xl">
            Satisfaction guaranteed
          </h2>
          <p className="md:w-[70%] md:m-auto">
            At Iya Eba, your satisfaction is paramount. We are dedicated to
            providing you with flavorful, top-quality dishes and excellent
            service. With our commitment to excellence, we ensure that every
            dining experience with us is truly exceptional.
          </p>
        </span>
      </span>
    </main>
  );
}
