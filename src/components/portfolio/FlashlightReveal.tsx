import { useEffect, useRef, useState } from "react";
import { Focus } from "lucide-react";

type FlashlightRevealProps = {
  children: React.ReactNode;
  className?: string;
  showToggle?: boolean;
};

export default function FlashlightReveal({
  children,
  className = "",
  showToggle = true,
}: FlashlightRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const enabledRef = useRef(true);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const lowPower = navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 2;
    let active = !reducedMotion.matches && !coarsePointer.matches && !lowPower;
    enabledRef.current = active;
    setEnabled(active);
    let pendingPoint = { x: 0, y: 0 };

    const setTorch = (on: boolean) => {
      const state = on ? "on" : "off";
      if (root.dataset.torch !== state) root.dataset.torch = state;
    };

    const updatePoint = () => {
      root.style.setProperty("--torch-x", `${pendingPoint.x}px`);
      root.style.setProperty("--torch-y", `${pendingPoint.y}px`);
      frameRef.current = null;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches || lowPower) return;
      if (event.pointerType === "touch") {
        active = true;
        enabledRef.current = true;
        setEnabled(true);
        setTorch(true);
      } else {
        active = enabledRef.current;
        setTorch(active);
      }
      if (!active && !coarsePointer.matches) return;

      const bounds = root.getBoundingClientRect();
      pendingPoint = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updatePoint);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch" || reducedMotion.matches || lowPower) return;
      active = true;
      enabledRef.current = true;
      setEnabled(true);
      setTorch(true);
      onPointerMove(event);
    };

    const onPointerLeave = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      active = false;
      setTorch(false);
    };

    const onMotionChange = () => {
      active = !reducedMotion.matches && !coarsePointer.matches && !lowPower;
      enabledRef.current = active;
      setEnabled(active);
      setTorch(active);
    };

    root.addEventListener("pointermove", onPointerMove, { passive: true });
    root.addEventListener("pointerdown", onPointerDown, { passive: true });
    root.addEventListener("pointerleave", onPointerLeave, { passive: true });
    reducedMotion.addEventListener("change", onMotionChange);
    coarsePointer.addEventListener("change", onMotionChange);
    setTorch(active);

    return () => {
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointerleave", onPointerLeave);
      reducedMotion.removeEventListener("change", onMotionChange);
      coarsePointer.removeEventListener("change", onMotionChange);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const toggleTorch = () => {
    const next = !enabled;
    enabledRef.current = next;
    setEnabled(next);
    if (rootRef.current) rootRef.current.dataset.torch = next ? "on" : "off";
  };

  return (
    <div ref={rootRef} className={`flashlight-reveal ${className}`} data-torch="on">
      {children}
      <div className="flashlight-shade" aria-hidden="true" />
      <div className="flashlight-glow" aria-hidden="true" />
      {showToggle && (
        <button
          className="flashlight-toggle"
          type="button"
          aria-pressed={enabled}
          onClick={toggleTorch}
        >
          <Focus size={14} aria-hidden="true" />
          <span>{enabled ? "Spotlight on" : "Spotlight off"}</span>
        </button>
      )}
    </div>
  );
}
