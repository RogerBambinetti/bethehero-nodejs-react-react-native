import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Details() {
    const navigation = useNavigation();
    const message = '';

    function navigateToIncidents() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: '',
            recipients: ['diego@gmail.com'],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5547988380999&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity>
                    <Feather name="arrow-left" size={28} color="#E82041" onPress={navigateToIncidents} />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG: </Text>
                <Text style={styles.incidentValue}>Apade</Text>

                <Text style={styles.incidentProperty}>CASO: </Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR: </Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}