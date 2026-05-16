import { heroRows } from "@/app/data/content";
import ButtonLink from "@/app/components/shared/ButtonLink";

function riskClass(value) {
  if (value === "HIGH") return "risk risk--high risk-badge";
  if (value === "MEDIUM") return "risk risk--medium risk-badge";
  return "risk risk--low risk-badge";
}

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">Component intelligence for hardware OEMs · San Francisco</p>
          <h1>Never be blindsided by a component shortage, EOL, or tariff change again.</h1>
          <p className="hero__subheadline">
            Prokuro monitors every component in your BOM, flagging EOL risk, tariff exposure, and supplier concentration before they stop your line.
            Built by engineers who shipped these systems at Cisco.
          </p>
          <div className="hero__cta">
            <ButtonLink href="#waitlist">Join the Waitlist</ButtonLink>
            <ButtonLink href="#sample-report" variant="ghost">
              See a Sample Report
            </ButtonLink>
          </div>
        </div>

        <div className="dashboard" aria-label="BOM risk dashboard mockup">
          <div className="dashboard__header">
            <span>BOM Risk Monitor</span>
            <span>Updated 2 min ago</span>
          </div>
          <div className="dashboard__kpis">
            <div className="kpi">
              <div className="kpi__label">High risk lines</div>
              <div className="kpi__value">9</div>
            </div>
            <div className="kpi">
              <div className="kpi__label">Tariff impact</div>
              <div className="kpi__value">$2.4M</div>
            </div>
            <div className="kpi">
              <div className="kpi__label">Single source</div>
              <div className="kpi__value">41%</div>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>MPN</th>
                <th>Manufacturer</th>
                <th>Risk Flag</th>
                <th>RISK SCORE</th>
              </tr>
            </thead>
            <tbody>
              {heroRows.map((row) => (
                <tr key={row.mpn}>
                  <td>{row.mpn}</td>
                  <td>{row.manufacturer}</td>
                  <td>{row.riskFlag}</td>
                  <td>
                    <span className={riskClass(row.riskScore)}>{row.riskScore}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
