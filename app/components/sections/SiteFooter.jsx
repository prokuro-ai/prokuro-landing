import ButtonLink from "@/app/components/shared/ButtonLink";

export default function SiteFooter() {
  return (
    <footer id="company" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="brand" href="#">
            <span>Prokuro</span>
            <span className="brand__dot" aria-hidden="true" />
          </a>
          <p className="footer__meta">The weather forecast for your supply chain. Built in San Francisco.</p>
        </div>
        <div className="footer-actions" id="waitlist">
          <a className="btn btn--ghost" href="https://www.linkedin.com/company/prokuro/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <ButtonLink href="#pricing">Join Waitlist</ButtonLink>
        </div>
      </div>
    </footer>
  );
}
