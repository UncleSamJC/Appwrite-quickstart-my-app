import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useUser } from '../contexts/UserContext';

export default function LoginScreen() {
    const user = useUser();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (user.isLoggedIn) {
            router.replace('/');
        }
    }, [user.isLoggedIn]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login or register</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    onPress={async () => {
                        const success = await user.login(email, password);
                        if (success) {
                            router.replace('/');
                        } else {
                            Alert.alert('Login Failed', 'Please check your credentials.');
                        }
                    }}
                />
                <Button
                    title="Register"
                    onPress={async () => {
                        const success = await user.register(email, password);
                        if (success) {
                            router.replace('/');
                        } else {
                            Alert.alert('Register Failed', 'Try a different email.');
                        }
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
