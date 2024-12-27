import { TouchableOpacity, TouchableOpacityProps, Text, TextProps } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

function Button() {
    return <TouchableOpacity activeOpacity={0.6}>
        <Text>Eu sou um botão</Text>
    </TouchableOpacity>
}

export { Button }