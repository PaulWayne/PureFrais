import React from "react";
import { notFound } from "next/navigation";
import { services } from "@/constants";
import { ServiceDetail } from "@/components/ServiceDetail";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

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
