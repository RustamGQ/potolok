import Footer from "../../components/Footer/Footer";
import AboutPage from "../../components/AboutPage/AboutPage";
import CityProvider from "../../contexts/CityContext";
import "../../styles/reset.css";

export async function generateStaticParams() {
  return [{}]; // Статическая страница
}

export default function About() {
  return (
    <CityProvider>
      <AboutPage />
      <Footer />
    </CityProvider>
  );
}
