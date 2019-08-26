import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

import Moon from './entities/Moon';
import Doggo from './entities/Doggo';
import Pupper from './entities/Pupper';
import ColorView from './entities/ColorView';

export default class React360Planet extends React.Component {

  // Our component will keep track of this state
   state = {
    count: 0,
  };

  // This method increments our count, triggering a re-render
  incrementCount = async () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
        <VrButton
            onClick={this.incrementCount}
            style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Earth by React 360 {`Count ${this.state.count}`}
          </Text>
        </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Moon', () => Moon);
AppRegistry.registerComponent('Doggo', () => Doggo);
AppRegistry.registerComponent('Pupper', () => Pupper);
AppRegistry.registerComponent('ColorView', () => ColorView);

AppRegistry.registerComponent('React360Planet', () => React360Planet);
