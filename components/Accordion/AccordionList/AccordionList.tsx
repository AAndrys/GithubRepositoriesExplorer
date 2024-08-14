import { FunctionComponent } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useQuery } from '@tanstack/react-query';

import { useGlobalState } from '../../../state/global';
import { QueryKeys } from '../../../utils/enums';
import { getUserRepo } from '../../../utils/queries';
import {
  UserApiDataTypes,
  UserRepoApiDataTypes,
} from '../../../utils/sharedTypes';
import { colors } from '../../../utils/styles/theme';
import AccordionAnimation from '../AccordionAnimation/AccordionAnimation';
import AccordionItem from '../AccordionItem/AccordionItem';

import { styles } from './AccordionList.styles';

export interface AccordionListProps extends UserApiDataTypes {}

type DataTypes = { item: UserRepoApiDataTypes };

const AccordionList: FunctionComponent<AccordionListProps> = ({
  login,
  node_id,
}) => {
  const { setData } = useGlobalState();
  const open: SharedValue<boolean> = useSharedValue(false);

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: [QueryKeys.Repos, { login }],
    queryFn: () => getUserRepo(login),
    enabled: false,
  });

  const onPress = () => {
    open.value = !open.value;
    refetch();
    setData({ isListExtended: !open.value });
  };

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: withSpring(open.value ? '180deg' : '0deg') }],
    };
  });

  const arrow = (
    <Animated.View style={arrowStyle}>
      <SimpleLineIcons name="arrow-down" size={24} color={colors.black} />
    </Animated.View>
  );

  const renderItem = ({
    item: { name, description, stargazers_count },
  }: DataTypes) => (
    <AccordionItem
      title={name}
      description={description}
      stars={stargazers_count}
    />
  );

  const error = <Text>Error occurred</Text>;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.listItem}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text>{login}</Text>
        {arrow}
      </TouchableOpacity>

      <AccordionAnimation isExpanded={open} viewKey={node_id}>
        {isError ? (
          error
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.node_id}
            ListEmptyComponent={
              !isLoading ? (
                <Text style={styles.emptyText}>No projects available</Text>
              ) : null
            }
            ListHeaderComponent={
              isLoading ? (
                <View style={styles.indicator}>
                  <ActivityIndicator />
                </View>
              ) : null
            }
          />
        )}
      </AccordionAnimation>
    </View>
  );
};

export default AccordionList;
