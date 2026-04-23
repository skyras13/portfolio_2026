import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ExperienceList } from "@/components/ExperienceList";
import { EXPERIENCE } from "@/lib/content";

export const metadata = { title: "Work — Skyler Rasmussen" };

export default function WorkPage() {
  return (
    <div className="page-body">
      <div className="container">
        <PageHeader
          kicker="work history"
          title={
            <>
              Five years of <em>shipping</em>.
            </>
          }
          sub="Four industries — hospitality & tourism tech, ed-tech, ag-tech, and networking + AI infrastructure. Mobile apps, full-stack, team lead, and product management along the way."
        />
        <ExperienceList items={EXPERIENCE} />
        <div className="page-cta">
          <Link href="/projects" className="btn btn-primary">
            See the projects →
          </Link>
        </div>
      </div>
    </div>
  );
}
