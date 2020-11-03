import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        marginBottom: 15,
        marginTop: 48,
        color: '#13131a'
    },
    incident: {
        padding: 24,
        marginTop: 50,
        borderRadius: 8,
        backgroundColor: '#FFF'
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 9,
        fontSize: 15,
        marginTop: 24,
        color: '#737380'
    },
    contactBox: {
        padding: 24,
        marginTop: 25,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a'
    },
    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        fontWeight: 'bold',
        color: '#ffff'
    }
});