import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`bg-neutral-950 text-white ${className}`}>
      {children}
    </section>
  );
}