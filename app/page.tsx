import { Inter } from "next/font/google";
import MainImage from "./components/MainImage";
import { Main } from "next/document";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="grid gap-[10vh]">
      <span className="h-[80vh] grid place-content-center gap-[5vh]">
        <span className="grid place-content-center p-4 text-center gap-3">
          <h1 className={`text-darkBrown text-base`}>
            Welcome to Iya Eba's Restaurant!
          </h1>

          <p
            className={`${inter.className} text-darkBrown text-[2rem] tracking-wider uppercase`}
          >
            Eat. Drink. Relax.
          </p>
        </span>

        <MainImage
          src={"/stock-photo-jollof-rice-with-chicken-and-plantains.jpg"}
          alt={"Jollof rice with chicken and plantain"}
        />
      </span>

      <span className="p-4 grid gap-6 bg-darkBrown h-[70vh] place-content-center">
        <h2 className="uppercase text-2xl text-white">About us</h2>

        <p className="text-white">
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

      <span className="grid gap-6 h-[100vh] place-content-center p-2">
        <MainImage
          src={
            "/stock-photo-thai-cuisine-concept-homemade-beef-red-curry-panang-black-background.jpg"
          }
          alt={"Nigerian party jollof rice"}
        />
        <span className="p-4 text-center grid gap-4">
          <h2 className="uppercase text-2xl text-darkBrown">
            Satisfaction guaranteed
          </h2>
          <p className="">
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
