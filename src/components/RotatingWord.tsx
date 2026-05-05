import { useEffect, useState } from "react";

interface RotatingWordProps {
  words: string[];
  intervalMs?: number;
  className?: string;
}

export const RotatingWord = ({ words, intervalMs = 2200, className }: RotatingWordProps) => {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((p) => (p + 1) % words.length);
        setVisible(true);
      }, 280);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      } ${className ?? ""}`}
    >
      {words[i]}
    </span>
  );
};
