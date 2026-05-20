import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number; // duration in ms, default 1500
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1500,
}) => {
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const p = Math.min(elapsed / duration, 1);

      // Apply easeOutQuad easing
      const easedProgress = p * (2 - p);
      setProgress(easedProgress);

      if (p < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, duration]);

  // Helper to parse and animate numbers inside a string
  const getAnimatedValue = () => {
    // Regex matches integers or decimals
    const numberRegex = /\d+(\.\d+)?/g;
    
    // If no numbers match, return original value
    if (!value.match(numberRegex)) {
      return value;
    }

    let match;
    let lastIndex = 0;
    const parts: React.ReactNode[] = [];

    // Reset regex index
    numberRegex.lastIndex = 0;

    let keyIdx = 0;
    while ((match = numberRegex.exec(value)) !== null) {
      const matchStr = match[0];
      const matchIndex = match.index;

      // Add text before the number
      if (matchIndex > lastIndex) {
        parts.push(<span key={`text-${keyIdx++}`}>{value.substring(lastIndex, matchIndex)}</span>);
      }

      // Animate the matched number
      const targetNum = parseFloat(matchStr);
      const isDecimal = matchStr.includes(".");
      const currentVal = targetNum * progress;
      
      const formattedVal = isDecimal 
        ? currentVal.toFixed(1) 
        : Math.round(currentVal).toString();

      parts.push(<span key={`num-${keyIdx++}`}>{formattedVal}</span>);
      
      lastIndex = numberRegex.lastIndex;
    }

    // Add trailing text
    if (lastIndex < value.length) {
      parts.push(<span key={`text-${keyIdx++}`}>{value.substring(lastIndex)}</span>);
    }

    return parts;
  };

  return (
    <span ref={elementRef} className="inline-flex">
      {getAnimatedValue()}
    </span>
  );
};
