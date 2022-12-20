import { MaterialIcons } from '@expo/vector-icons';
import { Icon, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { colorPallet } from '../../utils/theme';

const BUTTON_WIDTH = 60;
const CONTAINER_WIDTH = 300;

const SlideButton = () => {
  const buttonWidth = useSharedValue(BUTTON_WIDTH);

  const swipeGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onEnd: ({ x }) => {
        if (x < CONTAINER_WIDTH) buttonWidth.value = BUTTON_WIDTH;
        else console.log('Swipe Complete');
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
      <Text left="2/5" position="absolute" color="_primary.500" opacity="70">
        Drag to Send
      </Text>
      <PanGestureHandler onGestureEvent={swipeGestureEvent}>
        <Animated.View style={[styles.button, animatedButtonStyle]}>
          <Icon
            position="absolute"
            right="4"
            top="3"
            color="_neutral.50"
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
    backgroundColor: colorPallet._neutral[50],
    shadowColor: colorPallet._primary[500],
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
    borderColor: colorPallet._primary[500],
  },
  button: {
    width: BUTTON_WIDTH,
    height: 50,
    backgroundColor: colorPallet._primary[500],
    borderRadius: 25,
    position: 'relative',
  },
});

export default SlideButton;
