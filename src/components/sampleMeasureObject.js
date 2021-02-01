/* 
Advantages of going by measure --> by instruments --> by staves:
-all staves are easily connected together and tickables can be aligned
-helps group staves that are performed by the same instrument, so braces can be drawn, the instrument name can be centered between them, etc.
-allows measures to be grouped into systems flexibly according to available visual space
*/
const measures = [
    { // measure 1
        instruments: [
            {
                name: 'B-flat Clarinet',
                staves: [
                    {
                        clef: 'treble',
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
                staves: [
                    {
                        clef: 'treble',
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