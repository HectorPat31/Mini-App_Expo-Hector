import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  onAgregar: (texto: string, autor: string) => void;
};

export default function FraseForm({ onAgregar }: Props) {
  const [texto, setTexto] = useState("");
  const [autor, setAutor] = useState("");

  const guardar = () => {
    if (!texto.trim()) {
      Alert.alert("Falta la frase", "Escribe una frase antes de guardarla.");
      return;
    }
    onAgregar(texto, autor);
    setTexto("");
    setAutor("");
    Alert.alert("¡Listo!", "Tu frase se agregó a la colección.");
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Agrega tu propia frase</Text>
      <Text style={styles.descripcion}>Guarda una idea que quieras recordar.</Text>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Escribe tu frase aquí..."
        placeholderTextColor="#A99AA7"
        multiline
        maxLength={180}
        style={[styles.input, styles.inputFrase]}
      />
      <TextInput
        value={autor}
        onChangeText={setAutor}
        placeholder="Autor (opcional)"
        placeholderTextColor="#A99AA7"
        maxLength={50}
        style={styles.input}
      />
      <Pressable onPress={guardar} style={({ pressed }) => [styles.boton, pressed && styles.presionado]}>
        <Text style={styles.botonTexto}>＋  Guardar frase</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#F4EFFB",
    borderRadius: 22,
    padding: 18,
    marginTop: 12,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#E4D9F4"
  },
  titulo: { color: "#55456F", fontSize: 18, fontWeight: "800" },
  descripcion: { color: "#80728E", fontSize: 13, marginTop: 5, marginBottom: 12 },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8DFEC",
    borderRadius: 13,
    paddingHorizontal: 13,
    paddingVertical: 12,
    color: "#443746",
    fontSize: 15,
    marginTop: 9
  },
  inputFrase: { minHeight: 86, textAlignVertical: "top" },
  boton: {
    backgroundColor: "#9274B8",
    borderRadius: 14,
    alignItems: "center",
    paddingVertical: 13,
    marginTop: 12
  },
  presionado: { opacity: 0.75 },
  botonTexto: { color: "#FFFFFF", fontWeight: "800", fontSize: 14 }
});
