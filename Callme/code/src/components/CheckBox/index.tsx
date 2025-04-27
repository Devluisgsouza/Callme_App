import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from './styles';

interface Props {
  value: 'tecnico' | 'funcionario' | null;
  onChange: (value: 'tecnico' | 'funcionario') => void;
}

export const CheckBox: React.FC<Props> = ({ value, onChange }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}
        onPress={() => onChange('tecnico')}
      >
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: value === 'tecnico' ? 'white' : 'black',
            marginRight: 5,
          }}
        />
        <Text style={style.TextCheckBox}>Técnico</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={() => onChange('funcionario')}
      >
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: value === 'funcionario' ? 'white' : 'black',
            marginRight: 5,

          }}
        />
        <Text style={style.TextCheckBox}>Funcionário</Text>
      </TouchableOpacity>
    </View>
  );
};
