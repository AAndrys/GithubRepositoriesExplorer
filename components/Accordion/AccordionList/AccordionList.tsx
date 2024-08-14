import { FunctionComponent } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { SharedValue, useSharedValue } from 'react-native-reanimated';

import AccordionItem from '../AccordionItem/AccordionItem';

import { styles } from './AccordionList.styles';

export interface AccordionListProps {
  item: { id: string; name: string };
}

const TEMP_DATA = [
  { id: '1', name: 'nanaa' },
  { id: '2', name: 'gggg' },
  { id: '3', name: 'erwerwr' },
];

const AccordionList: FunctionComponent<AccordionListProps> = ({ item }) => {
  const open: SharedValue<boolean> = useSharedValue(false);

  const onPress = () => {
    open.value = !open.value;
  };

  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
      <FlatList
        data={TEMP_DATA}
        renderItem={({ item }) => (
          <AccordionItem isExpanded={open} viewKey={item.id} duration={0}>
            <Text>{item.name}</Text>
          </AccordionItem>
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default AccordionList;
