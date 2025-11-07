import ContactHero from "@/components/ContactHero";
import MapSection from "@/components/MapSection";
import ContactFormSection from "@/components/ContactFormSection";
import fetchContentType from "@/actions/fetch-content-type";

export default async function ContactsPage() {
  const params =
    "filters[slug][$eq]=contact&populate[dynamic_zone][on][dynamic-zone.company-information][populate]=*";
  const pageData = await fetchContentType("pages", params, true);
  const info = pageData?.dynamic_zone[0];
  const address = info.address;
  return (
    <main>
      <ContactHero />
      <ContactFormSection info={info} />
      <MapSection address={address} lat={48.809497} lng={2.364085} />
    </main>
  );
}
