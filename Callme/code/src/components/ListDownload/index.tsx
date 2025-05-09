import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { style } from './styles';

type MeuDropdownProps = {
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
};



const MeuDropdownDays: React.FC<MeuDropdownProps> = ({
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
          <Picker.Item label="Hoje" value="Hoje" />
          <Picker.Item label="Semanal" value="Semanal" />
          <Picker.Item label="Mensal" value="Mensal" />
          <Picker.Item label="Bimestral" value="Bimestral" />
          <Picker.Item label="Trimestral" value="Trimestral" />
          <Picker.Item label="Semestral" value="Semestral" />
          <Picker.Item label="Anual" value="Anual" />
          <Picker.Item label="--Selecione--" value="Selecione" />
        </Picker>
      </View>
    );
  };
  
  export default MeuDropdownDays;