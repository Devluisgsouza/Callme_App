import React, { useEffect, useState } from "react";
import { Alert, Text, View} from 'react-native';
import { style } from './styles';
import MeuDropdownDays from "../../components/ListDownload";
import { Button } from "../../components/Button";




export default function Download_chamados(){


    const [tipo, setTipo] = useState('');
    const [tipoError, setTipoError] = useState(false);
    const [loading,setLoading] = useState(false);


    async function gerarArquivo() {
        Alert.alert("ARQUIVO GERADO!","Seu download foi realizado com sucesso!")
    }

    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.Textinicial}>DOWNLOAD CHAMADOS</Text>  
            </View>

            <View style={style.boxMid}>
                <View style={style.BoxInfo}>
                    <Text style={style.TextInfo}>FAÇA DOWNLOAD DO SEU HISTÓRICO DE CHAMADOS, PELO PERÍODO QUE DESEJAR, FÁCIL E RÁPIDO</Text>
                </View>
                <Text style={style.TitleList}>
                    SELECIONE O PERÍODO DOS CHAMADOS:
                    {tipoError && <Text style={{ color: 'red' }}> *</Text>}
                </Text>
                <MeuDropdownDays 
                    selectedValue={tipo}
                    onValueChange={(value) => {
                    setTipo(value);
                    if (value && value !== 'Selecione') setTipoError(false);
                    }}
                />
                <View style={{marginTop: 90}}>
                    <Button text="GERAR ARQUIVO" Loading={loading} onPress={() => gerarArquivo()} />
                </View>
                </View>
        </View>
    );
}
