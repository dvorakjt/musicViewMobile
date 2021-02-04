import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';
import MusicViewByMeasure from './components/MusicViewByMeasure';

const App = () => {
    return (
        <SafeAreaView style={styles.container} >
            <MusicViewByMeasure measures={measures} />
        </SafeAreaView>
    )
}

const measures = [
    { // measure 1
        instruments: [
            {
                name: 'B-flat Clarinet',
                abbr: "Bb Clr.",
                staves: [
                    {
                        clef: 'treble',
                        timeSignature: [2, 4],
                        timeSigStr: '2/4',
                        keySignature: '',
                        voices: [
                            {
                                notes: [
                                    { clef: 'treble', keys: ['a/4'], duration: 'h' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Piano',
                abbr: 'Pno.',
                staves: [
                    {
                        clef: 'treble',
                        timeSigStr: '2/4',
                        timeSignature: [2, 4],
                        keySignature: '',
                        voices: [
                            {
                                notes: [ //what if I want the clef or key signature to change mid-measure?
                                    { clef: 'treble', keys: ['g/4'], duration: 'q' },
                                    { clef: 'treble', keys: ['c/5'], duration: 'q' }
                                ]
                            }
                        ]
                    },
                    {
                        clef: 'bass',
                        timeSigStr: '2/4',
                        timeSignature: [2, 4],
                        keySignature: '',
                        voices: [
                            {
                                notes: []
                            }
                        ]

                    }
                ]
            }
        ]
    },
    { // measure 2
        instruments: [
            {
                name: 'B-flat Clarinet',
                abbr: "Bb Clr.",
                staves: [
                    {
                        clef: 'treble',
                        timeSigStr: '2/4',
                        timeSignature: [2, 4],
                        keySignature: '',
                        voices: [
                            {
                                notes: [
                                    { clef: 'treble', keys: ['a/4'], duration: 'h' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Piano',
                abbr: 'Pno.',
                staves: [
                    {
                        clef: 'treble',
                        timeSigStr: '2/4',
                        timeSignature: [2, 4],
                        keySignature: '',
                        voices: [
                            {
                                notes: [ //what if I want the clef or key signature to change mid-measure?
                                    { clef: 'treble', keys: ['g/4'], duration: 'q' },
                                    { clef: 'treble', keys: ['c/5'], duration: 'q' }
                                ]
                            }
                        ]
                    },
                    {
                        clef: 'bass',
                        timeSigStr: '2/4',
                        timeSignature: [2, 4],
                        keySignature: '',
                        voices: [
                            {
                                notes: []
                            }
                        ]

                    }
                ]
            }
        ]
    },
    { // measure 3
        instruments: [
            {
                name: 'B-flat Clarinet',
                abbr: "Bb Clr.",
                staves: [
                    {
                        clef: 'treble',
                        timeSigStr: '2/4',
                        timeSignature: [2, 4],
                        keySignature: '',
                        voices: [
                            {
                                notes: [
                                    { clef: 'treble', keys: ['a/4'], duration: 'h' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Piano',
                abbr: 'Pno.',
                staves: [
                    {
                        clef: 'treble',
                        timeSigStr: '2/4',
                        timeSignature: [2, 4],
                        keySignature: '',
                        voices: [
                            {
                                notes: [ //what if I want the clef or key signature to change mid-measure?
                                    { clef: 'treble', keys: ['g/4'], duration: 'q' },
                                    { clef: 'treble', keys: ['c/5'], duration: 'q' }
                                ]
                            }
                        ]
                    },
                    {
                        clef: 'bass',
                        timeSigStr: '2/4',
                        timeSignature: [2, 4],
                        keySignature: '',
                        voices: [
                            {
                                notes: []
                            }
                        ]

                    }
                ]
            }
        ]
    }
]

// const instruments = [
//     {
//         name: "Piano",
//         staves: [
//             {
//                 measures: [
//                     { //measure 1
//                         clef: 'treble',
//                         timeSignature: [2, 4],
//                         keySignature: "",
//                         voices: [
//                             {
//                                 notes: [
//                                     { clef: 'treble', keys: ['c/4'], duration: 'q' },
//                                     { clef: 'treble', keys: ['d/4'], duration: 'q' }
//                                 ]
//                             },
//                             {
//                                 notes: [
//                                     { clef: 'treble', keys: ['e/4'], duration: 'q' },
//                                     { clef: 'treble', keys: ['f/4'], duration: 'q' }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 measures: [
//                     { //measure 1
//                         clef: 'bass',
//                         timeSignature: [2, 4],
//                         keySignature: "",
//                         voices: [
//                             {
//                                 notes: [
//                                     { clef: 'bass', keys: ['c/3'], duration: 'q' },
//                                     { clef: 'bass', keys: ['g/2'], duration: 'q' }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
});

export default App;