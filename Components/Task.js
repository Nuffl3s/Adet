import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ text, date }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <TouchableOpacity onPress={toggleCompletion}>
      <View style={[styles.item, isCompleted && styles.completedItem]}>
        <View style={styles.itemLeft}>
          <View style={[styles.circular, isCompleted && styles.completedCircular]}></View>
          <View>
            <Text style={[styles.itemText, isCompleted && styles.completedText]}>{text}</Text>
            {date && <Text>Date: {date.toLocaleDateString()}</Text>}
          </View>
          <View style={[styles.square, isCompleted && styles.completedSquare]}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#88B5E9',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  completedItem: {
    backgroundColor: '#6a839f', 
  },
  itemText: {
    maxWidth: '80%',
    color: '#FFFFFF',
  },
  completedText: {
    textDecorationLine: 'line-through', 
    color: '#C0C0C0', 
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 15,
  },
  completedCircular: {
    backgroundColor: '#43f592', 
  },
});

export default Task;
