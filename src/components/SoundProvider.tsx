"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

type SoundContextType = {
  playClick: () => void;
  playHover: () => void;
  playSuccess: () => void;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

const SoundContext = createContext<SoundContextType | null>(null);

const clickVariants = [
  "/sounds/click1.m4a",
  "/sounds/click2.m4a",
  "/sounds/click3.m4a",
  "/sounds/click4.m4a",
  "/sounds/click5.m4a",
];

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const clickRefs = useRef<HTMLAudioElement[]>([]);
  const hoverRef = useRef<HTMLAudioElement | null>(null);
  const successRef = useRef<HTMLAudioElement | null>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 760);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload all sounds on mount (only on desktop)
  useEffect(() => {
    if (isMobile) return;

    // Preload click variants
    clickRefs.current = clickVariants.map((src) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.load();
      return audio;
    });

    // // Preload hover
    // hoverRef.current = new Audio("/sounds/hover.mp3");
    // hoverRef.current.preload = "auto";
    // hoverRef.current.load();

    // // Preload success
    // successRef.current = new Audio("/sounds/success.mp3");
    // successRef.current.preload = "auto";
    // successRef.current.load();
  }, [isMobile]);

  const playClick = useCallback(() => {
    if (!enabled || isMobile || clickRefs.current.length === 0) return;

    const audio =
      clickRefs.current[Math.floor(Math.random() * clickRefs.current.length)];
    audio.volume = 0.3;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, [enabled, isMobile]);

  const playHover = useCallback(() => {
    if (!enabled || isMobile || !hoverRef.current) return;

    hoverRef.current.volume = 0.15;
    hoverRef.current.currentTime = 0;
    hoverRef.current.play().catch(() => {});
  }, [enabled, isMobile]);

  const playSuccess = useCallback(() => {
    if (!enabled || isMobile || !successRef.current) return;

    successRef.current.volume = 0.4;
    successRef.current.currentTime = 0;
    successRef.current.play().catch(() => {});
  }, [enabled, isMobile]);

  return (
    <SoundContext.Provider
      value={{ playClick, playHover, playSuccess, enabled, setEnabled }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useAppSound() {
  const context = useContext(SoundContext);
  if (!context)
    throw new Error("useAppSound must be used within SoundProvider");
  return context;
}
