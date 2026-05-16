import { pricingTiers } from "@/app/data/content";
import Section from "@/app/components/shared/Section";
import ButtonLink from "@/app/components/shared/ButtonLink";

export default function PricingSection() {
  return (
    <Section id="pricing">
      <h2>Pricing</h2>
      <div className="pricing-grid">
        {pricingTiers.map((tier) => (
          <article key={tier.name} className={`card ${tier.highlighted ? "card--highlight" : ""}`.trim()}>
            {tier.badge ? <span className="card-badge">{tier.badge}</span> : null}
            <h3>{tier.name}</h3>
            <p>
              <strong>{tier.price}</strong>
            </p>
            <p>{tier.description}</p>
            <p>{tier.details}</p>
            <p className="section-cta">
              <ButtonLink href="#waitlist" variant={tier.ctaStyle}>
                {tier.cta}
              </ButtonLink>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
