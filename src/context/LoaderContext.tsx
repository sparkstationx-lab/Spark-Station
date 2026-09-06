import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LOADER_WORDS = ['designing', 'developing', 'refining', 'optimizing', 'launching'] as const;

export type LoaderWord = typeof LOADER_WORDS[number];

interface LoaderContextType {
  isLoading: boolean;
  currentWordIndex: number;
  currentWord: string;
  words: readonly string[];
  showLoader: (durationMs?: number) => Promise<void>;
  hideLoader: () => void;
  triggerAction: <T>(action: () => Promise<T> | T | void, minDurationMs?: number) => Promise<T | void>;
}

const LoaderContext = createContext<LoaderContextType | null>(null);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const cycleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Clear timers helper
  const clearTimers = useCallback(() => {
    if (cycleIntervalRef.current) {
      clearInterval(cycleIntervalRef.current);
      cycleIntervalRef.current = null;
    }
    if (autoHideTimeoutRef.current) {
      clearTimeout(autoHideTimeoutRef.current);
      autoHideTimeoutRef.current = null;
    }
  }, []);

  const hideLoader = useCallback(() => {
    clearTimers();
    setIsLoading(false);
    setCurrentWordIndex(0);
  }, [clearTimers]);

  const startCycling = useCallback((wordIntervalMs: number = 220) => {
    clearTimers();
    setCurrentWordIndex(0);
    setIsLoading(true);

    let idx = 0;
    cycleIntervalRef.current = setInterval(() => {
      idx++;
      if (idx < LOADER_WORDS.length) {
        setCurrentWordIndex(idx);
      } else {
        // Keep at the last word or loop if needed
        setCurrentWordIndex(LOADER_WORDS.length - 1);
      }
    }, wordIntervalMs);
  }, [clearTimers]);

  const showLoader = useCallback((durationMs: number = 700): Promise<void> => {
    return new Promise((resolve) => {
      const stepTime = Math.max(90, Math.floor(durationMs / LOADER_WORDS.length));
      startCycling(stepTime);

      autoHideTimeoutRef.current = setTimeout(() => {
        hideLoader();
        resolve();
      }, durationMs);
    });
  }, [startCycling, hideLoader]);

  const triggerAction = useCallback(async <T,>(
    action: () => Promise<T> | T | void,
    minDurationMs: number = 800
  ): Promise<T | void> => {
    const stepTime = Math.max(100, Math.floor(minDurationMs / LOADER_WORDS.length));
    startCycling(stepTime);

    const startTime = Date.now();
    try {
      const result = await action();
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDurationMs - elapsed);

      if (remaining > 0) {
        await new Promise((resolve) => setTimeout(resolve, remaining));
      }
      return result;
    } finally {
      hideLoader();
    }
  }, [startCycling, hideLoader]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        currentWordIndex,
        currentWord: LOADER_WORDS[currentWordIndex] || LOADER_WORDS[0],
        words: LOADER_WORDS,
        showLoader,
        hideLoader,
        triggerAction,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = (): LoaderContextType => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};
