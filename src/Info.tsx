import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { center, text } from './styles'

export const Info = () => {
  const navigation = useNavigation<any>()
  return (
    <View style={center}>
      <Text style={text}>Info</Text>
      <Button
        title="Navigate to Home"
        onPress={() => navigation.navigate('Home')}
        testID="ToHome"
      />
    </View>
  )
}
