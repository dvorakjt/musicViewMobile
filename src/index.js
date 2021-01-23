import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';
import MusicView from './components/MusicView';

const App = () => {
    return (
        <SafeAreaView style={styles.container} >
            <MusicView />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
});

export default App;