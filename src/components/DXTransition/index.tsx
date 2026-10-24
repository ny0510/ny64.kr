/** React lifecycle adaptation of white-aria DXTransition, AGPL-3.0. See shapes.tsx and LICENSE. */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Bg, Center, Hold, Side, Slide, SlideLong } from './shapes';
import './styles.css';

const ENTER_MS = 600;
const HOLD_MS = 100;
const EXIT_MS = 600;

type Phase = 'entering' | 'leaving' | 'done';

export function DXTransition() {
  const [enabled] = useState(() => new URLSearchParams(window.location.search).has('maimai'));
  const [phase, setPhase] = useState<Phase>('entering');
  const overlay = useRef<HTMLDivElement>(null);
  const active = enabled && phase !== 'done';

  useLayoutEffect(() => {
    if (!active) return;

    const updateSize = () => {
      const ratio = window.innerWidth / window.innerHeight;
      overlay.current?.style.setProperty('--dx-aspect', String(Math.max(ratio, 1 / ratio)));
      overlay.current?.style.setProperty('--dx-scale', String(Math.min(ratio, 1 / ratio)));
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [active]);

  useEffect(() => {
    if (!enabled) return;

    const leaveTimer = window.setTimeout(() => setPhase('leaving'), ENTER_MS + HOLD_MS);
    const finishTimer = window.setTimeout(() => setPhase('done'), ENTER_MS + HOLD_MS + EXIT_MS);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(finishTimer);
    };
  }, [enabled]);

  if (!enabled || phase === 'done') return null;

  return (
    <div ref={overlay} className="dx-transition" data-phase={phase} aria-hidden="true">
      <div className="dx-solid" />
      <Bg className="dx-background-1" />
      <Bg className="dx-background-2" />
      <div className="dx-items">
        <Slide className="dx-item dx-slide-1" />
        <Slide className="dx-item dx-slide-2" />
        <Slide className="dx-item dx-slide-3" />
        <Slide className="dx-item dx-slide-4" />
        <SlideLong className="dx-item dx-long-1" />
        <SlideLong className="dx-item dx-long-2" />
        <Hold className="dx-item dx-hold-1" />
        <Hold className="dx-item dx-hold-2" />
        <Hold className="dx-item dx-hold-3" />
        <Hold className="dx-item dx-hold-4" />
        <Hold className="dx-item dx-hold-5" />
      </div>
      <Side className="dx-side-1" />
      <Side className="dx-side-2" />
      <div className="dx-center">
        <div className="dx-center-wrapper"><Center /></div>
      </div>
    </div>
  );
}
