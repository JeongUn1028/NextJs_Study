import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_HEADERS: string[] = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%", backgroundColor: "orange" }}>Sidebar</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
