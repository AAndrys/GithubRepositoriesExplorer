import { FunctionComponent } from 'react';
import { FlatList, View } from 'react-native';

import AccordionList from './AccordionList/AccordionList';
import { styles } from './Accordion.styles';

export interface AccordionProps {}

export const TEMP_DATA = [
  { id: '1', name: 'nanaa' },
  { id: '2', name: 'gggg' },
  { id: '3', name: 'erwerwr' },
];

const Accordion: FunctionComponent<AccordionProps> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={TEMP_DATA}
        renderItem={({ item }) => <AccordionList item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Accordion;
