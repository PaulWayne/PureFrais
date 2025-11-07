import fetchContentType from "@/actions/fetch-content-type";
import { HomePage } from "@/components/HomePage";

export default async function Home() {
  const pageData = await fetchContentType("homepage", "", true);
  return (
    <>
      <main>
        <HomePage pageData={pageData} />
      </main>
    </>
  );
}
