<View>
    <Entity
        source={{
          obj: asset('moon/moon.obj'),
          mtl: asset('moon/moon.mtl')}}
        style={{
          transform: [
            { translateX: 300 },
            { translateY: 10 },
            { translateZ: -590 },
            { scaleY: 3 },
            { scaleX: 3 },
          ]
        }}
      />

      <Entity
        source={{
          obj: asset('moon/moon.obj'),
          mtl: asset('moon/moon.mtl')}}
        style={{
          transform: [
            { translateX: -400 },
            { translateY: 90 },
            { translateZ: 100 },
          ]
        }}
      />

      <Entity
        source={{
          obj: asset('moon/moon.obj'),
          mtl: asset('moon/moon.mtl')}}
        style={{
          transform: [
            { translateX: 400 },
            { translateY: 90 },
            { translateZ: 100 },
          ]
        }}
      />
</View>      