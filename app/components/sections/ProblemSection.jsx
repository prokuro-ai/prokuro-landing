import { problemCards } from "@/app/data/content";
import Section from "@/app/components/shared/Section";

export default function ProblemSection() {
  return (
    <Section id="product">
      <h2>The problems that shut lines down</h2>
      <div className="three-col">
        {problemCards.map((card) => (
          <article key={card.title} className="card">
            <div className="icon" aria-hidden="true" />
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
