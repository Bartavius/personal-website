"use client";
import { createContext, useContext, useState, useCallback, useRef } from "react";

type SoundContextType = {
  playClick: () => void;
  playHover: () => void;
  playSuccess: () => void;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

const SoundContext = createContext<SoundContextType | null>(null);

const clickVariants = ["/sounds/click1.m4a", "/sounds/click2.m4a", "/sounds/click3.m4a", "/sounds/click4.m4a", "/sounds/click5.m4a"];

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  
  const clickRef = useRef<HTMLAudioElement | null>(null);
  const hoverRef = useRef<HTMLAudioElement | null>(null);
  const successRef = useRef<HTMLAudioElement | null>(null);

  const playSound = useCallback((ref: React.MutableRefObject<HTMLAudioElement | null>, src: string, volume = 0.3) => {
    if (!enabled) return;
    
    if (!ref.current) {
      ref.current = new Audio(src);
    } else {
      ref.current.src = src;
    }
    ref.current.volume = volume;
    ref.current.currentTime = 0;
    ref.current.play().catch(() => {});
  }, [enabled]);

  const playClick = useCallback(() => {
    const randomSrc = clickVariants[Math.floor(Math.random() * clickVariants.length)];
    playSound(clickRef, randomSrc, 0.12);
  }, [playSound]);
  
  const playHover = useCallback(() => {
    const randomSrc = clickVariants[Math.floor(Math.random() * clickVariants.length)];
    playSound(clickRef, randomSrc, 0.15);
  }, [playSound]);

  const playSuccess = useCallback(() => playSound(successRef, "/sounds/success.mp3", 0.4), [playSound]);

  return (
    <SoundContext.Provider value={{ playClick, playHover, playSuccess, enabled, setEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useAppSound() {
  const context = useContext(SoundContext);
  if (!context) throw new Error("useAppSound must be used within SoundProvider");
  return context;
}