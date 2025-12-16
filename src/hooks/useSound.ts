import { useCallback, useRef } from "react";

export function useSound(src: string, volume = 0.5) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    // Create audio on first play
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
    }
    
    // Reset and play
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {
      // Ignore errors
    });
  }, [src, volume]);

  return play;
}