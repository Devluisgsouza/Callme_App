import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { style } from './styles';

type MeuDropdownProps = {
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
};

const MeuDropdown: React.FC<MeuDropdownProps> = ({
  selectedValue,
  onValueChange,
}) => {
  return (
    <View style={style.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={style.picker}
      >
        <Picker.Item label="--Selecione--" value="Selecione" />
        <Picker.Item label="Hardware" value="Hardware" />
        <Picker.Item label="Software" value="Software" />
        <Picker.Item label="Rede (INTERNET)" value="Rede (INTERNET)" />
        <Picker.Item label="Outros" value="Outros" />
        <Picker.Item label="Não sei" value="Não sei" />
      </Picker>
    </View>
  );
};

export default MeuDropdown;