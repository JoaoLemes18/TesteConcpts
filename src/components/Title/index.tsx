import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../colors";

interface TextProps {
  text: string; // Propriedade para definir o texto a ser exibido
  style?: object; // Propriedade para estilos personalizados
}

const TextHome: React.FC<TextProps> = ({ text, style }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.whiteColor,
    fontWeight: "600",
  },
});

export default TextHome;
