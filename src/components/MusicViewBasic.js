import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';
import Vex from 'vexflow';

const MusicViewBasic = () => {

    const VF = Vex.Flow;

    const context = new ReactNativeSVGContext(NotoFontPack, { width: 400, height: 400 }); //for now, defaults to 400x400...is there a better way to set this default?
    //create a stave and set the context
    const stave = new VF.Stave(100, 150, 200);
    stave.setContext(context);
    stave.setClef("treble");
    stave.setTimeSignature("4/4");

    //create notes and a voice
    const notes = [
        // a quarter note C
        new VF.StaveNote({ clef: 'treble', keys: ['c/4'], duration: 'q' }),

        //quarter note d
        new VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'q' }),

        //quarter note rest, b/4 specifies the vertical position of the rest!
        new VF.StaveNote({ clef: 'treble', keys: ['b/4'], duration: 'qr' }),

        //c maj chord
        new VF.StaveNote({ clef: 'treble', keys: ['c/4', 'e/4', 'g/4'], duration: 'q' })
    ];

    const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);

    const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 150);
    stave.draw();
    voice.draw(context, stave);

    return (
        <View>{context.render()}</View>
    )
}

export default MusicViewBasic;