import { Button, Text, View, TextStyle, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const center: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const text: TextStyle = {
  fontSize: 20,
  marginBottom: 20,
};

export const Info = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={center}>
      <Text style={text}>Info</Text>
      <Button
        title="Navigate to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
