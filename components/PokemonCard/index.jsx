import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./PokemonCard.style"

const PokemonCard = ({ info }) => {

  const imgPokemon = { uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${info.index + 1}.png` };

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.img}
        source={imgPokemon}
      />
      <View>
        <Text style={styles.title}>{info.item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export { PokemonCard }
