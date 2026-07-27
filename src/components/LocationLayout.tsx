import type { ReactNode } from "react";

type LocationLayoutProps = {
  title: string;
  children: ReactNode;
};

function LocationLayout({
  title,
  children,
}: LocationLayoutProps) {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h2>{title}</h2>

      <hr />

      {children}
    </main>
  );
}

export default LocationLayout;