import Link from "next/link";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="home-tiles">
            <Link href="/work" className="home-tile">
              <div className="tile-body">
                <div className="tile-label">Work</div>
                <div className="tile-title">7 years, 4 industries</div>
                <div className="tile-desc">
                  Hospitality, ed-tech, ag-tech, and networking + AI.
                </div>
              </div>
              <div className="tile-arrow">→</div>
            </Link>
            <Link href="/projects" className="home-tile">
              <div className="tile-body">
                <div className="tile-label">Projects</div>
                <div className="tile-title">Tether, Clear Report, Cruz AI Vision</div>
                <div className="tile-desc">
                  SaaS products I co-own and enterprise systems I lead.
                </div>
              </div>
              <div className="tile-arrow">→</div>
            </Link>
            <Link href="/about" className="home-tile">
              <div className="tile-body">
                <div className="tile-label">About</div>
                <div className="tile-title">The person behind the code</div>
                <div className="tile-desc">
                  Who I am and what I do when the laptop is closed.
                </div>
              </div>
              <div className="tile-arrow">→</div>
            </Link>
            <Link href="/contact" className="home-tile home-tile-cta">
              <div className="tile-body">
                <div className="tile-label">Contact</div>
                <div className="tile-title">Let&apos;s talk</div>
                <div className="tile-desc">Roles, contracts, or a conversation.</div>
              </div>
              <div className="tile-arrow">→</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
