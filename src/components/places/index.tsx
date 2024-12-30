import { useRef } from "react";
import BottomSheet, { BottomSheetFlashList } from "@gorhom/bottom-sheet";

import { View, Text, useWindowDimensions } from "react-native";

import { Place, PlaceProps } from "../place"

type Props = {
    data: PlaceProps[]
}

export function Places({ data }: Props) {
    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)

    return (
        <BottomSheet>
            <BottomSheetFlashList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Place data={item} />}
            
            />
        </BottomSheet>
    )
}