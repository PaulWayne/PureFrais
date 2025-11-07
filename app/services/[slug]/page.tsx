import fetchContentType from "@/actions/fetch-content-type";
import { ServiceDetail } from "@/components/ServiceDetail";
import { notFound } from "next/navigation";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await fetchContentType(
    "services",
    `filters[slug]=${slug}&populate=image`,
    true
  );

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <ServiceDetail service={service} />
    </main>
  );
}
