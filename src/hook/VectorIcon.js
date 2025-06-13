import React from 'react';
import {View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const VectorIcon = ({iconSet, iconName, size, color, style}) => {
  let IconComponent;

  switch (iconSet) {
    case 'MaterialIcons':
      IconComponent = MaterialIcon;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'Entypo':
      IconComponent = Entypo;
      break;
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    case 'FontAwesome5Brands':
      IconComponent = FontAwesome5Brands;
      break;
    case 'AntDesign':
      IconComponent = AntDesign;
      break;
    case 'EvilIcons':
      IconComponent = EvilIcons;
      break;
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    default:
      return null;
  }

  return (
    <View style={style ? style : {}}>
      <IconComponent name={iconName} size={size} color={color} />
    </View>
  );
};

export default VectorIcon;