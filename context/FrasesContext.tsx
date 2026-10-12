import React, { createContext, useContext, useMemo, useState } from "react";
import { FRASES_INICIALES, Frase } from "../data/frases";

type FrasesContextType = {
  frases: Frase[];
  favoritas: Frase[];
  agregarFrase: (texto: string, autor: string) => void;
  alternarFavorita: (frase: Frase) => void;
  esFavorita: (id: string) => boolean;
};

const FrasesContext = createContext<FrasesContextType | undefined>(undefined);

export function FrasesProvider({ children }: { children: React.ReactNode }) {
  const [frases, setFrases] = useState<Frase[]>(FRASES_INICIALES);
  const [favoritas, setFavoritas] = useState<Frase[]>([]);

  const agregarFrase = (texto: string, autor: string) => {
    const nueva: Frase = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      texto: texto.trim(),
      autor: autor.trim() || "Anónimo"
    };
    setFrases((actuales) => [nueva, ...actuales]);
  };

  const alternarFavorita = (frase: Frase) => {
    setFavoritas((actuales) =>
      actuales.some((item) => item.id === frase.id)
        ? actuales.filter((item) => item.id !== frase.id)
        : [frase, ...actuales]
    );
  };

  const esFavorita = (id: string) => favoritas.some((frase) => frase.id === id);

  const valor = useMemo(
    () => ({ frases, favoritas, agregarFrase, alternarFavorita, esFavorita }),
    [frases, favoritas]
  );

  return <FrasesContext.Provider value={valor}>{children}</FrasesContext.Provider>;
}

export function useFrases() {
  const contexto = useContext(FrasesContext);
  if (!contexto) {
    throw new Error("useFrases debe utilizarse dentro de FrasesProvider");
  }
  return contexto;
}
