import fetchContentType from "@/actions/fetch-content-type";
import About from "@/components/About";
import AboutHero from "@/components/AboutHero";

export default async function AboutUsPage() {
  const pageData = await fetchContentType("about", "", true);

  return (
    <main>
      <AboutHero />
      <About pageData={pageData} />
    </main>
  );
}
