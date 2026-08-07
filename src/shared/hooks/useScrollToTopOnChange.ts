'use client';

import { useEffect, useRef } from 'react';

// sticky 요소는 고정된 상태에서 getBoundingClientRect를 재면 화면에 붙어있는 현재
// 위치만 나와서 실제 문서상 위치를 알 수 없다. 잠깐 static으로 풀어 원래 위치를
// 잰 뒤 되돌리고, value가 바뀔 때만 그 위치로 스크롤한다(최초 마운트 시에는 스크롤하지 않음).
export const useScrollToTopOnChange = <T>(value: T) => {
  const ref = useRef<HTMLDivElement>(null);
  const prevValueRef = useRef(value);

  useEffect(() => {
    const hasChanged = prevValueRef.current !== value;
    prevValueRef.current = value;
    if (!hasChanged) return;

    const el = ref.current;
    if (!el) return;

    const prevPosition = el.style.position;
    el.style.position = 'static';
    const naturalTop = el.getBoundingClientRect().top + window.scrollY;
    el.style.position = prevPosition;

    window.scrollTo({ top: naturalTop, behavior: 'smooth' });
  }, [value]);

  return ref;
};
