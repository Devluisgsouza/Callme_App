import React, { useState } from "react";
import { Text, View } from 'react-native';
import { style } from './styles';
import SelectMultiple from "../../components/SelectBox";
import { InputBig } from "../../components/inputBig";

export default function Perfil() {
  const [prioridade, setPrioridade] = useState<string | null>(null);

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.Textinicial}>CRIAR CHAMADOS</Text>
      </View>

      <View style={style.boxMid}>
        <Text style={style.label}>SELECIONE A PRIORIDADE DO CHAMADO:</Text>
        <SelectMultiple
          options={['BAIXA', 'MÉDIA', 'ALTA']}
          selectedValue={prioridade}
          onSelect={(value: string) => setPrioridade(value)}
        />
        <InputBig
            title={
                <Text style={style.TitleBox}>
                    DESCREVA SEU PROBLEMA:
                </Text>
            }
        />
      </View>
    </View>
  );
}
