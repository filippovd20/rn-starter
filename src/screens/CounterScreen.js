import React, {useReducer} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const counter_reducer = (counter_state, action) => {
  // counter_state === {count:number}
  // action === {type: 'increase' || 'decrease' }
  switch(action.type) {
    case 'increase':
      return {...counter_state, count: counter_state.count+1};
    case 'decrease':
      return {...counter_state, count: counter_state.count-1};
    default:
      return counter_state;
  }
}

const CounterScreen = () => {
  const [counter_state, counter_dispatch] = useReducer(counter_reducer,{ count: 0 });

  return (
    <View>
      <Text>Counter Count:{counter_state.count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          counter_dispatch({type:'increase'});
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          counter_dispatch({type:'decrease'});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
