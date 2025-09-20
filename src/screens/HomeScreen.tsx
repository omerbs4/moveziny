import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Başlık */}
      <Text style={styles.title}>Hoş geldin 👋</Text>
      <Text style={styles.subtitle}>Bugünkü aktivite durumun</Text>

      {/* Günlük İlerleme Kutusu */}
      <View style={styles.card}>
        <Ionicons name="walk-outline" size={32} color="#4CAF50" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.cardTitle}>1240 adım</Text>
          <Text style={styles.cardSubtitle}>Hedef: 5000</Text>
        </View>
      </View>

      {/* Motivasyon Mesajı */}
      <View style={styles.motivationBox}>
        <Text style={styles.motivationText}>
          Harika gidiyorsun! 🎉 Biraz daha hareket etme zamanı 🚶
        </Text>
      </View>

      {/* Butonlar */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="play-circle-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Egzersiz Başlat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: "#03A9F4" }]}>
          <Ionicons name="accessibility-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Esneme Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
