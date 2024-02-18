import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loadup = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Landing'); 
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>CHR</Text>
                {/* Ensure that the image path is correct */}
                <Image source={require('../assets/Images/chronicle.png')} style={styles.logo} />
                <Text style={styles.text}>NICLE</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#88B5E9'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 48,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 14,
    },
});

export default Loadup;
