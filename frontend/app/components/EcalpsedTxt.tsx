'use client';

import { useEffect, useRef, useState } from 'react';

export default function ExpandableText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // check if text exceeds container
    if (el.scrollHeight > el.clientHeight) {
      setIsOverflowing(true);
    }
  }, [text]);

  return (
    <div>
      <p
        ref={textRef}
        className={`text-lg text-gray-300 py-6 ${
          !expanded ? 'line-clamp-2 overflow-hidden' : ''
        }`}
      >
        {text}
      </p>

      {isOverflowing && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-400 hover:underline"
        >
          {expanded ? 'تقليص' : 'اقرأ المزيد'}
        </button>
      )}
    </div>
  );
}