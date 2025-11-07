import ServicesOffer from "@/components/ServicesOffer";
import VideoCta from "@/components/VideoCta";
import WhyUs from "@/components/WhyUs";
import ImpeccableCtaSection from "@/components/ImpeccableCtaSection";
import fetchContentType from "@/actions/fetch-content-type";

export default async function OurServicesPage() {
  const params =
    "populate[data][populate][services][fields][0]=icon&populate[data][populate][services][fields][1]=slug&populate[data][populate][services][fields][2]=heading&populate[image][fields][1]=formats&populate[testimonial][populate][testimonials][populate][user][populate]=image";
  const result = await fetchContentType("services-page", params);
  return (
    <main>
      <ServicesOffer data={result.data.data} />
      <VideoCta />
      <WhyUs image={result.data.image} testimonial={result.data.testimonial} />
      <ImpeccableCtaSection />
    </main>
  );
}
