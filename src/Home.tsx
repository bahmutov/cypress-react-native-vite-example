import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { center, text } from './styles'

export const Home = () => {
  console.log('Home useNavigation', useNavigation)
  const navigation = useNavigation<any>()
  return (
    <View style={center}>
      <Text style={text}>Home</Text>
      <Button
        title="Navigate to Info"
        onPress={() => navigation.navigate('Info')}
        testID="ToInfo"
      />
    </View>
  )
}
