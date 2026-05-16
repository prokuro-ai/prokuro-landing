import { howItWorksSteps } from "@/app/data/content";
import Section from "@/app/components/shared/Section";

export default function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="section--surface">
      <h2>How it works</h2>
      <div className="steps">
        {howItWorksSteps.map((step, index) => (
          <article key={step.title} className="card">
            <div className="step-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
