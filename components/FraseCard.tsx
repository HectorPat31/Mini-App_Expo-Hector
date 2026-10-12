import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Frase } from "../data/frases";

type Props = {
  frase: Frase;
  favorita: boolean;
  onToggleFavorita: () => void;
  numero?: number;
};

export default function FraseCard({ frase, favorita, onToggleFavorita, numero }: Props) {
  return (
    <View style={styles.card}>
      {numero !== undefined && <Text style={styles.numero}>FRASE {numero}</Text>}
      <Text style={styles.comilla}>“</Text>
      <Text style={styles.texto}>{frase.texto}</Text>
      <Text style={styles.autor}>— {frase.autor}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={favorita ? "Quitar de favoritas" : "Agregar a favoritas"}
        onPress={onToggleFavorita}
        style={({ pressed }) => [styles.boton, pressed && styles.presionado]}
      >
        <Text style={styles.botonTexto}>
          {favorita ? "♥  Guardada en favoritas" : "♡  Agregar a favoritas"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#F1DDEB",
    shadowColor: "#8B6680",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2
  },
  numero: { color: "#A16A91", fontSize: 11, fontWeight: "800", letterSpacing: 1.5 },
  comilla: { color: "#D9A9C8", fontSize: 48, lineHeight: 52, height: 38, marginTop: 8 },
  texto: { color: "#443746", fontSize: 21, lineHeight: 30, fontWeight: "600" },
  autor: { color: "#8D7A8B", fontSize: 14, marginTop: 16, textAlign: "right" },
  boton: {
    alignSelf: "flex-start",
    backgroundColor: "#FBEAF4",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: 20
  },
  presionado: { opacity: 0.7, transform: [{ scale: 0.98 }] },
  botonTexto: { color: "#985B82", fontWeight: "700", fontSize: 13 }
});
