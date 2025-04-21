import React, { useState } from "react";
import { Text, View, Alert } from 'react-native';
import { style } from './styles';
import SelectMultiple from "../../components/SelectBox";
import { InputBig } from "../../components/inputBig";
import MeuDropdown from "../../components/ListBox";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';




export default function Perfil() {

  const navigation = useNavigation<NavigationProp<any>>();
  const [loading,setLoading] = useState(false);
  const [prioridade, setPrioridade] = useState<string | null>(null);
  const [prioridadeError,setprioridadeError] = useState(false);
  const [descrição,setDescrição] = useState('');
  const [DescriçãoError, setDescriçãoError] = useState(false);
  const [tipo, setTipo] = useState('');
  const [tipoError, setTipoError] = useState(false);
  


  async function getChamado() {
    try {
        let hasError = false;

        if (prioridade === null) {
            setprioridadeError(true);
            hasError = true;
        } else {
            setprioridadeError(false);
        }
        if (descrição === '') {
          setDescriçãoError(true);
          hasError = true;
        } else {
          setDescriçãoError(false);
        }

        if (hasError) {
            return Alert.alert('ATENÇÃO', 'Preencha os campos obrigatórios marcados com ( * )!');
        }

        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          Alert.alert('Chamado enviado com sucesso!');
          navigation.reset({ routes: [{ name: "BottomRoutes" }] })
        }, 1000);
      } catch (error) {
          console.log(error);
          setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.Textinicial}>CRIAR CHAMADO</Text>
      </View>

      <View style={style.boxMid}>
        <Text style={style.label}>
          SELECIONE A PRIORIDADE DO CHAMADO:
          {prioridadeError && <Text style={{ color: 'red' }}> *</Text>}
          </Text>
        <SelectMultiple
          options={['BAIXA', 'MÉDIA', 'ALTA']}
          selectedValue={prioridade}
          onSelect={(value: string) => setPrioridade(value)}
          onChangeText={(text) => {
            setPrioridade(text);
            if (text) setprioridadeError(false);}}
        />
        <InputBig
            value={descrição}
            onChangeText={(text) => {
              setDescrição(text);
              if (text) setDescriçãoError(false);}}
            title={
                <Text style={style.TitleBox}>
                    DESCREVA SEU CHAMADO:
                    {DescriçãoError && <Text style={{ color: 'red' }}> *</Text>}
                </Text>
            }
            
        />
        <Text style={style.TitleList}>
            SELECIONE O TIPO DO SEU CHAMADO:
        </Text>
        <MeuDropdown />
        <View style={{marginTop: -10}}>
          <Button text="ENVIAR CHAMADO" Loading={loading} onPress={() => getChamado()} />
        </View>
      </View>
    </View>
  );
}
