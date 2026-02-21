
interface Button01Props {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  isActive?: boolean;
}

export default function Button01({ type, children, isActive }: Button01Props): JSX.Element {
  return <button type={type ?? "button"} style={{ backgroundColor: isActive ? "yellow" : "gray" }}>{children}</button>;
}
