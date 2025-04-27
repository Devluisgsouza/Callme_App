import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface SelectMultipleProps {
  options: string[];
  selectedValue: string | null;
  onChangeText: (value: string) => void;
  onSelect: (value: string) => void;
}

export default function SelectMultiple({
  options,
  selectedValue,
  onSelect,
}: SelectMultipleProps) {
  return (
    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', height: 55, width:360}}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelect(option)}
          style={{
            padding: 12,
            marginVertical: 5,
            borderWidth: 2,
            borderRadius: 8,
            borderColor: selectedValue === option ? "black" : "lightgray",
            backgroundColor: selectedValue === option ? "white" : "gray",
          }}
        >
          <Text
            style={{
              color: selectedValue === option ? "black" : "#000",
              fontWeight: selectedValue === option ? "bold" : "normal",
              textTransform: 'none',
            }}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
