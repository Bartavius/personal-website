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

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  
  const clickRef = useRef<HTMLAudioElement | null>(null);
  const hoverRef = useRef<HTMLAudioElement | null>(null);
  const successRef = useRef<HTMLAudioElement | null>(null);

  const playSound = useCallback((ref: React.MutableRefObject<HTMLAudioElement | null>, src: string, volume = 0.3) => {
    if (!enabled) return;
    
    if (!ref.current) {
      ref.current = new Audio(src);
    }
    ref.current.volume = volume;
    ref.current.currentTime = 0;
    ref.current.play().catch(() => {});
  }, [enabled]);

  const playClick = useCallback(() => playSound(clickRef, "/sounds/click.mp3", 0.3), [playSound]);
  const playHover = useCallback(() => playSound(hoverRef, "/sounds/hover.mp3", 0.15), [playSound]);
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