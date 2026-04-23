import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
};

export function PageHeader({ kicker, title, sub }: Props) {
  return (
    <div className="page-header">
      <div className="page-header-top">
        <div className="page-header-breadcrumb">
          <Link href="/">skyler.rasmussen</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">{kicker}</span>
        </div>
        <div className="page-header-rule">
          <span className="rule-dot"></span>
          <span className="rule-line"></span>
          <span className="rule-dot"></span>
        </div>
      </div>
      <div className="page-header-stage">
        <div className="page-header-echo" aria-hidden="true">
          {kicker}
        </div>
        <h1 className="page-header-title">{title}</h1>
      </div>
      {sub && <p className="page-header-sub">{sub}</p>}
    </div>
  );
}
