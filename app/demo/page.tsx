import fetchContentType from "@/actions/fetch-content-type";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import DemoHero from "@/components/DemoHero";

export default async function DemoPage() {
  const params =
    "populate[works][populate][before][fields][0]=formats&populate[works][populate][after][fields][0]=formats&populate=seo";
  const result = await fetchContentType("demo", params);
  const { heading, sub_heading, works } = result.data;
  return (
    <main>
      <DemoHero heading={heading} sub_heading={sub_heading} />
      <BeforeAfterSection works={works} />
      {/* <TestimonialsSection /> */}
    </main>
  );
}
