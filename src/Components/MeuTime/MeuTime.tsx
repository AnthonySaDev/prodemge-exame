import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

interface MeuTimeProps {
  time: string;
}

const MeuTime: React.FC<MeuTimeProps> = ({ time }) => {
  const [nomeTime, setNomeTime] = useState(time);
  const [mostrarTime, setMostrarTime] = useState(false);

  return (
    <View>
      <TextInput
        placeholder="Digite o nome do time"
        value={nomeTime}
        onChangeText={(text) => setNomeTime(text)}
      />

      <Button
        testID="botaoMostrarTime"
        title="Exibir nome do time"
        onPress={() => setMostrarTime(!mostrarTime)}
      />

      {mostrarTime && (
        <Text
          style={{ fontWeight: "bold", textAlign: "center", marginTop: 10 }}
        >
          {nomeTime}
        </Text>
      )}
    </View>
  );
};

export default MeuTime;
