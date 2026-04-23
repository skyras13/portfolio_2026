import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { HATS } from "@/lib/content";

export const metadata = { title: "About — Skyler Rasmussen" };

export default function AboutPage() {
  return (
    <div className="page-body">
      <div className="container">
        <PageHeader
          kicker="about"
          title={
            <>
              The person behind the <em>code</em>.
            </>
          }
        />
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a <strong>software developer</strong> based in{" "}
              <strong>Saratoga Springs, Utah</strong> who wears a lot of hats well. I&apos;ve
              shipped <strong>mobile apps</strong>, led teams, built full-stack systems,
              managed product, and now co-own a <strong>SaaS studio</strong> alongside a day
              job in networking and AI.
            </p>
            <p>
              I&apos;ve worked across <strong>hospitality &amp; tourism tech</strong>,{" "}
              <strong>ed-tech</strong>, <strong>ag-tech</strong>, and{" "}
              <strong>networking + AI infrastructure</strong>. Different domains, same pattern —
              learn the problem space deeply, ship the thing, keep it running.
            </p>
            <p>
              Day job: <strong>Lead Developer at Dorado Software</strong>, where I&apos;m the
              primary contributor on an MCP-based AI tool for network and data-center
              management. Side gig: I co-run <strong>skdaddle</strong>, the LLC behind{" "}
              <strong>Tether</strong> and <strong>Clear Report</strong>. I also contract for{" "}
              <strong>Ag Genius</strong> on drone imaging + AI crop insights.
            </p>
            <div className="about-stats">
              <div>
                <div className="stat-val">4</div>
                <div className="stat-label">Industries shipped in</div>
              </div>
              <div>
                <div className="stat-val">8+</div>
                <div className="stat-label">Products I&apos;ve owned or led</div>
              </div>
              <div>
                <div className="stat-val">2</div>
                <div className="stat-label">Live SaaS I co-own</div>
              </div>
            </div>
          </div>
          <PhotoCarousel />
        </div>

        <div className="skills">
          <h3 className="skills-title">Hats I wear</h3>
          <div className="skills-grid">
            {HATS.map(([k, v]) => (
              <div key={k} className="skill">
                <div className="skill-label">{k}</div>
                <div className="skill-desc">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="off-clock">
          <div className="off-clock-left">
            <div className="mono off-clock-kicker">off the clock</div>
            <h3 className="off-clock-title">
              Wife, two daughters,
              <br />
              two dogs, one mountain range.
            </h3>
          </div>
          <div className="off-clock-right">
            <p>
              Home is in Utah with my wife and two little girls. Weekends tend toward the
              outdoors, sports, boating, and tiring the dogs out. The rest of my time usually
              goes to movies, books, and chasing a new adventure. Honestly, I just like
              learning new things — that curiosity is a big part of how I end up in so many
              different industries.
            </p>
          </div>
        </div>

        <div className="page-cta">
          <Link href="/contact" className="btn btn-primary">
            Let&apos;s talk →
          </Link>
        </div>
      </div>
    </div>
  );
}
