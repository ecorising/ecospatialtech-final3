import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-lg shadow-lg border p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
