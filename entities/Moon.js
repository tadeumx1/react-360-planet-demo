import React from 'react';
import { asset, View } from 'react-360';
import Entity from 'Entity';

export default class Moon extends React.Component {
  render() {
    return (
      <View>
      <Entity
        source={{
          obj: asset('moon/moon.obj'),
          mtl: asset('moon/moon.mtl')}}
        style={{
          transform: [
            { translateX: -400 },
            { translateY: 10 },
            { translateZ: -590 },
            { scaleY: 3 },
            { scaleX: 3 },
          ]
        }}
      />
      </View>
    );
  }
}
