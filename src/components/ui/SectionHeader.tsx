import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  id,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {/* Label */}
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </p>

      {/* Title */}
      <h2
        id={id}
        className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance"
      >
        {title}
      </h2>

      {/* Optional Description */}
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
