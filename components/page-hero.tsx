import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  tone?: "primary" | "secondary";
};

type PageHeroProps = {
  actions?: HeroAction[];
  breadcrumbs?: Array<{ href?: string; label: string }>;
  description: string;
  eyebrow: string;
  meta?: string[];
  title: string;
};

export function PageHero({ actions, breadcrumbs, description, eyebrow, meta, title }: PageHeroProps) {
  return (
    <section className="section section-surface">
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <nav aria-label="Breadcrumb" className="breadcrumb">
          {breadcrumbs.map((item) =>
            item.href ? (
              <Link href={item.href} key={`${item.label}-${item.href}`}>
                {item.label}
              </Link>
            ) : (
              <span key={item.label}>{item.label}</span>
            )
          )}
        </nav>
      ) : null}
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="page-title">{title}</h1>
      <p className="section-intro">{description}</p>
      {meta && meta.length > 0 ? (
        <div className="meta-row">
          {meta.map((item) => (
            <span className="meta-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      ) : null}
      {actions && actions.length > 0 ? (
        <div className="button-row">
          {actions.map((action) => (
            <Link
              className={action.tone === "secondary" ? "button-secondary" : "button"}
              href={action.href}
              key={`${action.href}-${action.label}`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}
