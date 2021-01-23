import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';
import MusicView from './components/MusicView';

const App = () => {
    return (
        <SafeAreaView style={styles.container} >
            <MusicView instruments={instruments} />
        </SafeAreaView>
    )
}

const instruments = [
    {
        name: "Piano",
        staves: [
            {
                measures: [
                    { //measure 1
                        clef: 'treble',
                        timeSignature: [2, 4],
                        keySignature: "",
                        voices: [
                            {
                                notes: [
                                    { clef: 'treble', keys: ['c/4'], duration: 'q' },
                                    { clef: 'treble', keys: ['d/4'], duration: 'q' }
                                ]
                            },
                            {
                                notes: [
                                    { clef: 'treble', keys: ['e/4'], duration: 'q' },
                                    { clef: 'treble', keys: ['f/4'], duration: 'q' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                measures: [
                    { //measure 1
                        clef: 'bass',
                        timeSignature: [2, 4],
                        keySignature: "",
                        voices: [
                            {
                                notes: [
                                    { clef: 'bass', keys: ['c/3'], duration: 'q' },
                                    { clef: 'bass', keys: ['g/2'], duration: 'q' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
});

export default App;