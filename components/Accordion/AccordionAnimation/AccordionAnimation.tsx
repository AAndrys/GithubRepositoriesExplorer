import { FunctionComponent, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './AccordionAnimation.styles';

export interface AccordionAnimationProps {
  isExpanded: SharedValue<boolean>;
  children: ReactNode;
  viewKey: string;
  style?: ViewStyle;
  duration?: number;
}

const AccordionAnimation: FunctionComponent<AccordionAnimationProps> = ({
  isExpanded,
  children,
  viewKey,
  style,
  duration = 300,
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
      key={`accordionAnimation_${viewKey}`}
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

export default AccordionAnimation;
