import { ReactNode } from "react";

type AboutLayoutProps = {
  children: ReactNode;
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <>
      <header className="py-3 bg-sky-100">어바웃 헤더</header>
      {children}
    </>
  );
};

export default AboutLayout;
