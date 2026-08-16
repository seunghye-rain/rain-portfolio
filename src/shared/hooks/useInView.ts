'use client';

import { useEffect, useRef, useState } from 'react';

export const useInView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // rootMargin으로 뷰포트보다 넓은 감지 영역을 확보한다. 빠른 스크롤(휠/플릭)로 한 번에
    // 크게 이동하면 IntersectionObserver 체크 시점 사이에서 섹션이 뷰포트를 그냥
    // 지나쳐버려 콜백 자체가 한 번도 발생하지 않을 수 있다(opacity:0로 영구히 숨음).
    // 감지 영역을 위아래로 넉넉히 넓혀 그 사이를 스쳐 지나가기 어렵게 만든다.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { threshold: 0, rootMargin: '300px 0px 300px 0px' },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};
