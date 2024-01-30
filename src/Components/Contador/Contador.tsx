import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Contador: React.FC = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button
        title="Incrementar"
        testID="botaoIncrementar"
        onPress={incrementar}
      />
    </View>
  );
};

export default Contador;
