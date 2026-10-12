import React from "react";
import { Link } from "expo-router";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FraseCard from "../components/FraseCard";
import { useFrases } from "../context/FrasesContext";

export default function FavoritasScreen() {
  const { favoritas, alternarFavorita } = useFrases();

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={favoritas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={
          <View style={styles.encabezado}>
            <Text style={styles.titulo}>Tus frases especiales</Text>
            <Text style={styles.subtitulo}>Aquí aparecen las frases que marques con un corazón.</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <FraseCard
            frase={item}
            favorita={true}
            numero={index + 1}
            onToggleFavorita={() => alternarFavorita(item)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.vacio}>
            <Text style={styles.corazon}>♡</Text>
            <Text style={styles.vacioTitulo}>Aún no tienes favoritas</Text>
            <Text style={styles.vacioTexto}>Vuelve al inicio y guarda las frases que te gusten.</Text>
            <Link href="/" asChild>
              <Pressable style={styles.boton}>
                <Text style={styles.botonTexto}>Volver al inicio</Text>
              </Pressable>
            </Link>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFF7FB" },
  lista: { padding: 20, paddingBottom: 30, flexGrow: 1 },
  encabezado: { marginBottom: 12, marginTop: 6 },
  titulo: { color: "#553E51", fontSize: 25, fontWeight: "900" },
  subtitulo: { color: "#967E91", fontSize: 14, lineHeight: 21, marginTop: 7 },
  vacio: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F1DDEB",
    borderWidth: 1,
    borderRadius: 22,
    alignItems: "center",
    padding: 24,
    marginTop: 12
  },
  corazon: { color: "#D9A9C8", fontSize: 46 },
  vacioTitulo: { color: "#553E51", fontWeight: "800", fontSize: 18, marginTop: 6 },
  vacioTexto: { color: "#967E91", fontSize: 14, textAlign: "center", lineHeight: 21, marginTop: 8 },
  boton: { backgroundColor: "#E8E0F8", paddingHorizontal: 18, paddingVertical: 12, borderRadius: 14, marginTop: 18 },
  botonTexto: { color: "#64517E", fontWeight: "800" }
});
