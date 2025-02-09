import { Image, StyleSheet, Platform, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import "@/src/i18n";
import { useTranslation } from "react-i18next";
import i18n from "@/src/i18n";

export default function HomeScreen() {
  const { t } = useTranslation();

  const handleLanguageChange = async (language: string) => {
    try {
      const RTL_LANGUAGES = ["ar", "ar-SA"];
      const LANGUAGE_KEY = "@app_language";

      // Handle RTL layout
      const isRTL = RTL_LANGUAGES.includes(language);
      if (I18nManager.isRTL !== isRTL) {
        I18nManager.allowRTL(isRTL);
        I18nManager.forceRTL(isRTL);
      }

      // Change language
      await i18n.changeLanguage(language);

      // Save preference
      await AsyncStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t("home_screen.welcome")}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t("home_screen.step_1_title")}</ThemedText>
        <ThemedText>
          {t("home_screen.step_1_description", {
            key: Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            }),
          })}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t("home_screen.step_2_title")}</ThemedText>
        <ThemedText>{t("home_screen.step_2_description")}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t("home_screen.step_3_title")}</ThemedText>
        <ThemedText>{t("home_screen.step_3_description")}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.flagContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.flagButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => handleLanguageChange("en-US")}
        >
          <ThemedText style={styles.flagText}>🇺🇸</ThemedText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.flagButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => handleLanguageChange("ko-KR")}
        >
          <ThemedText style={styles.flagText}>🇰🇷</ThemedText>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.flagButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => handleLanguageChange("ar-SA")}
        >
          <ThemedText style={styles.flagText}>🇸🇦</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  flagContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  flagButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.05)",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  flagText: {
    fontSize: 24,
  },
});
