import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function Main() {

    return (
        <View style={styles.container}>
            <Text>Teste</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center'
    },

});