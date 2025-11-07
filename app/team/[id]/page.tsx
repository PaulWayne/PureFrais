import fetchContentType from "@/actions/fetch-content-type";
import TeamMemberPage from "@/components/TeamMember";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = await fetchContentType(
    `members/${id}`,
    "populate[image][fields][0]=formats&populate[contact][fields][0]=email&populate[contact][fields][1]=phone&populate=skills"
  );
  if (!member) {
    notFound();
  }

  return (
    <div>
      <TeamMemberPage data={member.data} />
    </div>
  );
}
