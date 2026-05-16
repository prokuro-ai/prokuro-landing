import { fitProfile, notFitProfile } from "@/app/data/content";
import Section from "@/app/components/shared/Section";

export default function FitSection() {
  return (
    <Section className="section--surface">
      <h2>Who it&apos;s for</h2>
      <div className="two-col">
        <article className="card">
          <h3>Best fit</h3>
          <ul className="list">
            {fitProfile.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h3>Not a fit if...</h3>
          <ul className="list">
            {notFitProfile.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
