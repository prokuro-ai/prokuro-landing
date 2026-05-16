import { sampleReportRows } from "@/app/data/content";
import Section from "@/app/components/shared/Section";
import ButtonLink from "@/app/components/shared/ButtonLink";

function riskClass(level) {
  if (level === "HIGH") return "risk risk--high risk-badge";
  if (level === "MEDIUM") return "risk risk--medium risk-badge";
  return "risk risk--low risk-badge";
}

export default function SampleReportSection() {
  return (
    <Section id="sample-report" className="sample-report">
      <h2>What you get in every report</h2>
      <div className="report-shell">
        <p className="report-summary">14 components flagged · 3 HIGH risk · 8 MEDIUM · 3 LOW</p>
        <table>
          <thead>
            <tr>
              <th>MPN</th>
              <th>Manufacturer</th>
              <th>Risk Level</th>
              <th>Risk Type</th>
              <th>Recommended Action</th>
            </tr>
          </thead>
          <tbody>
            {sampleReportRows.map((row) => (
              <tr key={row.mpn}>
                <td>{row.mpn}</td>
                <td>{row.manufacturer}</td>
                <td>
                  <span className={riskClass(row.level)}>{row.level}</span>
                </td>
                <td>{row.riskType}</td>
                <td>{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="section-cta">
        <ButtonLink href="#waitlist">Request your analysis →</ButtonLink>
      </div>
    </Section>
  );
}
