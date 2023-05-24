import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../componentes/Texto';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo}></Topo>
              <View style={estilos.cesta}>
                <Detalhes {...detalhes}></Detalhes>
                {/* <Itens {...itens}></Itens> */}
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      ></FlatList>
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 23,
    marginBottom: 8,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 26,
  },
});
