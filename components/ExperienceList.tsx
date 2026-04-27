"use client";

import { useState } from "react";
import type { Experience } from "@/lib/content";

export function ExperienceList({ items }: { items: Experience[] }) {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="xp-wrap">
      {items.map((x, i) => {
        const isOpen = open === i;
        return (
          <div
            key={`${x.company}-${i}`}
            className={`xp-item ${isOpen ? "open" : ""} ${x.current ? "current" : ""}`}
            onClick={() => setOpen(isOpen ? -1 : i)}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(isOpen ? -1 : i);
              }
            }}
          >
            <div className="xp-date">{x.date}</div>
            <div className="xp-marker"></div>
            <div className="xp-body">
              <h3 className="xp-role">{x.role}</h3>
              <div className="xp-company">
                {x.company}
                <span className="sep">·</span>
                {x.type}
              </div>
              <div className="xp-desc">
                {x.desc}
                <div className="xp-tags">
                  {x.tags.map((t) => (
                    <span key={t} className="xp-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="xp-toggle">
              <span className="xp-toggle-label">{isOpen ? "less" : "more"}</span>
              <span className="xp-toggle-icon" aria-hidden="true">
                +
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
