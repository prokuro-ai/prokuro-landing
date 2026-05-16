import { navLinks } from "@/app/data/content";
import ButtonLink from "@/app/components/shared/ButtonLink";

export default function SiteNav() {
  return (
    <header className="top-nav">
      <div className="container top-nav__inner">
        <a className="brand" href="#">
          <span>Prokuro</span>
          <span className="brand__dot" aria-hidden="true" />
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ButtonLink href="#waitlist" variant="ghost">
            Join Waitlist
          </ButtonLink>
          <ButtonLink href="#pricing">Request a Report</ButtonLink>
        </div>
      </div>
    </header>
  );
}
