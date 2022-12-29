import { MaterialIcons } from '@expo/vector-icons';
import { Icon, Text, View } from 'native-base';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const BUTTON_WIDTH = 60;
const CONTAINER_WIDTH = 300;

type Props = {
  buttonMessage: string;
  onSwipeComplete: () => void;
};

const SlideButton: FC<Props> = ({ buttonMessage, onSwipeComplete }) => {
  const buttonWidth = useSharedValue(BUTTON_WIDTH);

  const swipeGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onEnd: ({ x }) => {
        if (x < CONTAINER_WIDTH) buttonWidth.value = BUTTON_WIDTH;
        else runOnJS(onSwipeComplete)();
      },
      onActive: ({ x }) => {
        if (x > BUTTON_WIDTH && x <= CONTAINER_WIDTH + 1) buttonWidth.value = x;
      },
    });

  const animatedButtonStyle = useAnimatedStyle(() => ({
    width: buttonWidth.value,
  }));

  return (
    <View style={styles.container}>
      <Text left="2/5" position="absolute" color="primary.100" opacity="70">
        {buttonMessage}
      </Text>
      <PanGestureHandler onGestureEvent={swipeGestureEvent}>
        <Animated.View style={[styles.button, animatedButtonStyle]}>
          <Icon
            position="absolute"
            right="4"
            top="3"
            color="white"
            size="lg"
            as={<MaterialIcons />}
            name="arrow-forward-ios"
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    shadowColor: '#3F5857',
    borderLeftWidth: 0,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#3F5857',
  },
  button: {
    width: BUTTON_WIDTH,
    height: 50,
    backgroundColor: '#3F5857',
    borderRadius: 25,
    position: 'relative',
  },
});

export default SlideButton;
