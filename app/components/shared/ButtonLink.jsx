export default function ButtonLink({ href = "#", variant = "primary", children }) {
  const className = variant === "ghost" ? "btn btn--ghost" : "btn btn--primary";
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
