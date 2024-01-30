import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

interface IListagem {
  dados: string[];
}

const Listagem: React.FC<IListagem> = ({ dados }) => {
  const [lista, setLista] = useState<string[]>([]);

  useEffect(() => {
    setLista(dados);
  }, []);

  return (
    <View>
      <FlatList
        data={lista}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default Listagem;
