import React, { useState } from "react";
import { Text, View, Alert } from 'react-native';
import { style } from './styles';
import SelectMultiple from "../../components/SelectBox";
import { InputBig } from "../../components/inputBig";
import MeuDropdown from "../../components/ListBox";
import { Button, ButtonQuest } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Criar_chamado() {

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
        if (tipo === '' || tipo === 'Selecione') {
          setTipoError(true);
          hasError = true;
        } else {
          setTipoError(false);
        }
        if (hasError) {
            return Alert.alert('ATENÇÃO', 'Preencha os campos obrigatórios marcados com ( * )!');
        }

        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          navigation.navigate("Chat_IA")
        }, 1000);
      } catch (error) {
          console.log(error);
          setLoading(false);
    }
  }

  async function getChat() {
    Alert.alert('DÚVIDAS?','PRIORIDADES: ALTA - quando afeta totalmente o seu serviço / MÉDIA - quando afeta grande parte do seu serviço. / BAIXA - quando afeta uma pequena parte do seu serviço.');
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.Textinicial}>CRIAR CHAMADO</Text>
      </View>

      <View style={style.boxMid}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={style.label}>
          SELECIONE A PRIORIDADE DO CHAMADO:
          {prioridadeError && <Text style={{ color: 'red' }}> *</Text>}
          </Text>
          <ButtonQuest 
            icon={MaterialIcons} 
            iconName="?" 
            onPress={() => getChat()}/>
          </View>
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
            {tipoError && <Text style={{ color: 'red' }}> *</Text>}
        </Text>
        <MeuDropdown 
          selectedValue={tipo}
          onValueChange={(value) => {
            setTipo(value);
            if (value && value !== 'Selecione') setTipoError(false);
          }}
        />
        <View style={{marginTop: 60}}>
          <Button text="ENVIAR CHAMADO" Loading={loading} onPress={() => getChamado()} />
        </View>
      </View>
    </View>
  );
}
