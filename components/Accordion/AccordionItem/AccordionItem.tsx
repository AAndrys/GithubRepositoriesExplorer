import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { UserRepoApiDataTypes } from '../../../utils/sharedTypes';

import { styles } from './AccordionItem.styles';

export interface AccordionItemProps {
  title: UserRepoApiDataTypes['name'];
  description: UserRepoApiDataTypes['description'];
  stars: UserRepoApiDataTypes['stargazers_count'];
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  title,
  description,
  stars = 1,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.icon}>
          <Text>{stars}</Text>
          <MaterialCommunityIcons name="star" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default AccordionItem;
