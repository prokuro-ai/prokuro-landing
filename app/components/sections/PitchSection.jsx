import Section from "@/app/components/shared/Section";

export default function PitchSection() {
  return (
    <Section>
      <div className="quote-card">
        <p className="quote">
          &quot;One missed EOL on a 7-year product means 18 months of emergency redesign. One tariff change can blow up your COGS by 8-15%.
          Prokuro costs less than either mistake.&quot;
        </p>
        <p>
          We built this system internally at Cisco, tracking component performance across tens of thousands of production units at the world&apos;s
          largest contract manufacturers. Now we&apos;re making it available to every hardware team.
        </p>
      </div>
    </Section>
  );
}
