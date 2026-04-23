import { PageHeader } from "@/components/PageHeader";
import { FeaturedVisual } from "@/components/FeaturedVisual";
import { FEATURED, OTHER } from "@/lib/content";

export const metadata = { title: "Projects — Skyler Rasmussen" };

export default function ProjectsPage() {
  return (
    <div className="page-body projects-page">
      <div className="container">
        <PageHeader
          kicker="projects"
          title={
            <>
              Products &amp; <em>platforms</em>.
            </>
          }
          sub="Two live SaaS products I co-own at skdaddle. An AI-native networking platform I lead at Dorado. Plus contract work in ag-tech, ed-tech, and tourism."
        />

        <div className="featured-stack">
          {FEATURED.map((p, i) => (
            <article key={p.title} className={`featured ${p.kind}`}>
              <div className="featured-meta">
                <div className="featured-idx">0{i + 1}</div>
                <div className="featured-cat">{p.category}</div>
              </div>
              <div className="featured-body">
                <h2 className="featured-title">{p.title}</h2>
                <div className="featured-tagline">{p.tagline}</div>
                <p className="featured-desc">{p.desc}</p>
                <div className="featured-stack-row">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="featured-foot">
                  <div className="featured-role">{p.role}</div>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer" className="featured-link">
                      {p.link} <span>↗</span>
                    </a>
                  ) : (
                    <div className="featured-link static">{p.link}</div>
                  )}
                </div>
              </div>
              <div className="featured-visual">
                <FeaturedVisual kind={p.kind} />
              </div>
            </article>
          ))}
        </div>

        <div className="other-head">
          <div className="other-head-line"></div>
          <div className="other-head-title">Selected additional work</div>
          <div className="other-head-line"></div>
        </div>

        <div className="other-list">
          {OTHER.map((p) => {
            const content = (
              <>
                <div className="other-cat">{p.category}</div>
                <div className="other-body">
                  <div className="other-title">{p.title}</div>
                  <div className="other-desc">{p.desc}</div>
                </div>
                <div className="other-stack">
                  {p.stack.slice(0, 3).map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="other-role">{p.role}</div>
                <div className="other-arrow">{p.href ? "↗" : "•"}</div>
              </>
            );
            return p.href ? (
              <a
                key={p.title}
                className="other-item"
                href={p.href}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={p.title} className="other-item">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
