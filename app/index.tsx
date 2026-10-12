import React, { useMemo, useState } from "react";
import { Link } from "expo-router";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FraseCard from "../components/FraseCard";
import FraseForm from "../components/FraseForm";
import { useFrases } from "../context/FrasesContext";

export default function InicioScreen() {
  const { frases, favoritas, agregarFrase, alternarFavorita, esFavorita } = useFrases();
  const [indice, setIndice] = useState(0);

  const fraseActual = useMemo(() => frases[indice % frases.length], [frases, indice]);

  const siguienteFrase = () => {
    if (frases.length > 1) {
      let nuevoIndice = indice;
      while (nuevoIndice === indice) {
        nuevoIndice = Math.floor(Math.random() * frases.length);
      }
      setIndice(nuevoIndice);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.lista} showsVerticalScrollIndicator={false}>
          <View style={styles.contenido}>
            <View style={styles.hero}>
              <Text style={styles.emoji}>☁️  ✨</Text>
              <Text style={styles.titulo}>Un momento para ti</Text>
              <Text style={styles.subtitulo}>Una pequeña frase puede cambiar tu día.</Text>
            </View>

            {fraseActual && (
              <FraseCard
                frase={fraseActual}
                favorita={esFavorita(fraseActual.id)}
                onToggleFavorita={() => alternarFavorita(fraseActual)}
                numero={indice + 1}
              />
            )}

            <Pressable onPress={siguienteFrase} style={({ pressed }) => [styles.botonNueva, pressed && styles.presionado]}>
              <Text style={styles.botonNuevaTexto}>✦  Mostrar otra frase</Text>
            </Pressable>

            <Link href="/favoritas" asChild>
              <Pressable style={({ pressed }) => [styles.botonFavoritas, pressed && styles.presionado]}>
                <Text style={styles.botonFavoritasTexto}>♥  Mis favoritas ({favoritas.length})</Text>
              </Pressable>
            </Link>

            <FraseForm onAgregar={(texto, autor) => {
              agregarFrase(texto, autor);
              setIndice(0);
            }} />
            <Text style={styles.pie}>Hecha con cariño · Frase del Día</Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFF7FB" },
  lista: { paddingBottom: 18 },
  contenido: { paddingHorizontal: 20, paddingTop: 18 },
  hero: { alignItems: "center", paddingVertical: 16, marginBottom: 6 },
  emoji: { fontSize: 25, marginBottom: 10 },
  titulo: { color: "#553E51", fontSize: 27, fontWeight: "900", textAlign: "center" },
  subtitulo: { color: "#967E91", fontSize: 14, marginTop: 8, textAlign: "center" },
  botonNueva: {
    backgroundColor: "#DFAFD0",
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 7
  },
  botonNuevaTexto: { color: "#57394F", fontWeight: "800", fontSize: 15 },
  botonFavoritas: {
    backgroundColor: "#E8E0F8",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10
  },
  botonFavoritasTexto: { color: "#64517E", fontWeight: "800", fontSize: 14 },
  presionado: { opacity: 0.75 },
  pie: { color: "#B29BAF", textAlign: "center", fontSize: 12, marginTop: 8, marginBottom: 12 }
});
