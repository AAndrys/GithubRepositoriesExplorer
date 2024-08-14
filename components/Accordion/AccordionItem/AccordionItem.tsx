import { FunctionComponent, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './AccordionItem.styles';

export interface AccordionItemProps {
  isExpanded: SharedValue<boolean>;
  children: ReactNode;
  viewKey: string;
  style?: ViewStyle;
  duration: number;
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 500,
}) => {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration,
    })
  );

  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[styles.animatedView, bodyStyle, style]}
    >
      <View
        onLayout={e => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.wrapper}
      >
        {children}
      </View>
    </Animated.View>
  );
};

export default AccordionItem;
