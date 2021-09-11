import React, { useState } from 'react';
import {
  TouchableOpacity,
  FlatList
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import AddInput from '../components/AddInput';
import TaskList from '../components/TaskList';
import Empty from '../components/Empty';

export default function TaskItems({containerStyle}) {
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState(false);

  const handleAddTask = (value) => {
    setData((prevTask) => {
      return [
        ...prevTask,
        {
          value: value,
          key: Math.random().toString(),
          completed: false,
        },
      ];
    });
  };

  const handleDeleteTask = (key) => {
    setData((prevTask) => {
      return prevTask.filter((task) => task.key != key);
    });
  };

  // console.log(completed)

  // TODO: need to figure out how to setCompleted back to false
  const toggleCompleteTask = (item) => {
    item.completed == completed ?
      item.completed = setCompleted(true) :
      item.completed = setCompleted(false)
  };

  return (
    <View style={containerStyle}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={() => (
          <Empty
            title='Nothing to do, relax!'
          />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleCompleteTask(item)}
          >
            <TaskList
              item={item}
              completed={item.completed}
              handleDeleteTask={handleDeleteTask}
            />
          </TouchableOpacity>
        )}
      />
      <AddInput
        containerStyle={containerStyle}
        handleAddTask={handleAddTask}
      />
    </View>
  );
};
