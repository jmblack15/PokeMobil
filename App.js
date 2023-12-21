import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { PokemonCard } from './components/PokemonCard';

export default function App() {

  const [listPokemons, setLisPokemons] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsloading] = useState(false)

  const getPokemons = async () => {
    setIsloading(true)

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
      const data = await response.json()

      if (response.status === 200) {
        setLisPokemons(data.results)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={listPokemons}
        renderItem={(pokemon) => (
          <PokemonCard info={pokemon} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
});
