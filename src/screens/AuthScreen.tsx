import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { signUp, signIn } from "../services/auth";
import styles from "../styles/styles";
import { RootStackParamList } from "../../App"; // App.tsx içinden import et

type AuthScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Auth"
>;
type Props = {
    onLogin: () => void;
};

export default function AuthScreen({ onLogin }: Props) {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    try {
      if (isLogin) {
        const user = await signIn(email, password);
        console.log("Giriş başarılı:", user.uid);
        onLogin(); // ✅ App.tsx içinden gelen fonksiyonu çağır
      } else {
        const user = await signUp(email, password);
        console.log("Kayıt başarılı:", user.uid);
        onLogin(); // ✅
      }
    } catch (err: any) {
      console.log("Hata:", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Giriş Yap" : "Kayıt Ol"}</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Şifre"
        placeholderTextColor="#9CA3AF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>
          {isLogin ? "Giriş Yap" : "Kayıt Ol"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => setIsLogin(!isLogin)}
      >
        <Text style={styles.secondaryButtonText}>
          {isLogin ? "Hesabın yok mu? Kayıt Ol" : "Zaten hesabın var? Giriş Yap"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
