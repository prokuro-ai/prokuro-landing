import { features } from "@/app/data/content";
import Section from "@/app/components/shared/Section";

export default function FeaturesSection() {
  return (
    <Section>
      <h2>Key features</h2>
      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
