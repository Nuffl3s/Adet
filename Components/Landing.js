import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Task from './Task';

const Landing = () => {
    const navigation = useNavigation();
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [datePickerMode, setDatePickerMode] = useState('date'); 
    const [showDatePicker, setShowDatePicker] = useState(false); 

    const handleAddTask = () => {
        Keyboard.dismiss();
        const newTask = { task, date: selectedDate };
        setTaskItems([...taskItems, newTask]);
        setTask('');
        setSelectedDate(null);
        setShowForm(false);
        setShowDatePicker(false); 
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    const handleDateChange = (event, selectedDate) => {
        setSelectedDate(selectedDate);
        setShowDatePicker(false); 
    };

    const toggleDatePickerMode = () => {
        if (datePickerMode === 'date') {
            setDatePickerMode('time');
        } else {
            setDatePickerMode('date');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headcontainer}>
                <View></View>
                <Text style={styles.headerText}>CHR</Text>
                <Image source={require('../assets/Images/chronicle.png')} style={styles.logo}></Image>
                <Text style={styles.headerText1}>NICLE</Text>
            </View>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >

                <View style={styles.tasksWrapper}>
                    <View style={styles.items}>
                        {taskItems.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <Task text={item.task} date={item.date} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </ScrollView>

            {!showForm && (
                <TouchableOpacity onPress={() => setShowForm(true)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Task</Text>
                </TouchableOpacity>
            )}

            {showForm && (
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.writeTaskWrapper}
                >
                    <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                    <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)} style={styles.dateButton}>
                        <Text style={styles.dateButtonText}>{datePickerMode === 'date' ? 'Pick a Date' : 'Pick a Time'}</Text>
                    </TouchableOpacity>
                    {selectedDate && (
                        <Text style={styles.selectedDateText}>{selectedDate.toLocaleString()}</Text>
                    )}
                    {showDatePicker && ( 
                        <DateTimePicker
                            value={selectedDate || new Date()}
                            mode={datePickerMode}
                            is24Hour={true}
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                    <TouchableOpacity onPress={handleAddTask}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingHorizontal: 20,
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        marginBottom: 10,
    },
    dateButton: {
        backgroundColor: '#55BCF6',
        borderRadius: 10,
        padding: 10,
    },
    dateButtonText: {
        color: 'white',
    },
    selectedDateText: {
        marginTop: 10,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
    addButton: {
        position: 'absolute',
        bottom: 60,
        right: 20,
        backgroundColor: '#55BCF6',
        borderRadius: 50,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 16,
    },
    headcontainer: {
        backgroundColor: '#88B5E9',
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    headerText1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        marginRight: 20
    },
    logo: {
        width: 20,
        height: 20,
        },
});

export default Landing;
