import { FunctionComponent } from 'react';
import { FlatList, View } from 'react-native';

import { useUsersState } from '../../state/users';

import AccordionList from './AccordionList/AccordionList';
import { styles } from './Accordion.styles';

export interface AccordionProps {}

const Accordion: FunctionComponent<AccordionProps> = () => {
  const { data } = useUsersState();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <AccordionList {...item} />}
        keyExtractor={item => item.node_id}
      />
    </View>
  );
};

export default Accordion;
