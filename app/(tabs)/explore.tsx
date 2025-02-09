import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useTranslation } from "react-i18next";

export default function TabTwoScreen() {
  const { t } = useTranslation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t("explore_screen.tab_name")}</ThemedText>
      </ThemedView>
      <ThemedText>{t("explore_screen.description")}</ThemedText>

      <Collapsible title={t("explore_screen.file_based_routing_title")}>
        <ThemedText>
          {t("explore_screen.file_based_routing_description")}
        </ThemedText>
        <ThemedText>{t("explore_screen.layout_file_description")}</ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">
            {t("explore_screen.file_based_routing_link")}
          </ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title={t("explore_screen.android_ios_web_support_title")}>
        <ThemedText>
          {t("explore_screen.android_ios_web_support_description")}
        </ThemedText>
      </Collapsible>

      <Collapsible title={t("explore_screen.images_title")}>
        <ThemedText>{t("explore_screen.images_description")}</ThemedText>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">{t("explore_screen.images_link")}</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title={t("explore_screen.custom_fonts_title")}>
        <ThemedText>{t("explore_screen.custom_fonts_description")}</ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">
            {t("explore_screen.custom_fonts_link")}
          </ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title={t("explore_screen.light_dark_mode_title")}>
        <ThemedText>
          {t("explore_screen.light_dark_mode_description")}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">
            {t("explore_screen.light_dark_mode_link")}
          </ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title={t("explore_screen.animations_title")}>
        <ThemedText>{t("explore_screen.animations_description")}</ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              {t("explore_screen.parallax_effect_description")}
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
