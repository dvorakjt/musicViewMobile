instruments: [
    {
        name: "Piano",
        staves: [
            {
                measures: [
                    { //measure 1
                        clef: 'treble',
                        timeSignature: [4, 4],
                        keySignature: "",
                        voices: [
                            {
                                notes: []
                            }, //voice 1 within measure 1 within the upper stave (right hand)
                            {} //voice 2 within measure 1 within the upper stave (right hand)
                        ]
                    },
                    { //measure 2
                        voices: [
                            {}
                        ]
                    }
                ]
            },
            {
                measures: [
                    { //measure 1
                        voices: [
                            {}, //voice 1 within measure 1 within the lower stave (left hand)
                            {} //voice 2 within measure 1 within the lower stave (left hand)
                        ]
                    },
                    { //measure 2
                        voices: [
                            {}
                        ]
                    }
                ]
            }
        ]
    }
]