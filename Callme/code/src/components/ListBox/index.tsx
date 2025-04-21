// src/components/MeuDropdown.tsx

import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { style } from './styles';


const MeuDropdown: React.FC = () => {
  
  const [selecionado, setSelecionado] = useState<string>('opcao1');

  return (
    <View style={style.container}>
      <Picker
        selectedValue={selecionado}
        onValueChange={(itemValue) => setSelecionado(itemValue)}
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