import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';
import Vex from 'vexflow';

const MusicView = ({ instruments }) => {
    //vexflow / standalone vf context setup
    const VF = Vex.Flow;
    const context = new ReactNativeSVGContext(NotoFontPack, { width: 400, height: 400 });

    //set the default x and y drawing positions
    let currentXPosition = 5;
    let currentYPosition = 50;

    //i may need to map each stave into a new system array or object so stave connectors can be correctly drawn later...

    //iterate through the instruments and draw them to the context
    instruments.forEach(instrument => {
        const { staves } = instrument; //staves is a property within each instrument. this is useful for instruments such as piano or organ
        staves.forEach(stave => {
            const { measures } = stave; //measures is a property within each stave object.
            measures.forEach((measure, index) => {
                //destructure the measure object
                const { clef, timeSignature, keySignature, voices } = measure;

                //create a new VF.Stave at this stave's y position and this measure's x position with a width of 100 (for now), then set the context.
                const stave = new VF.Stave(currentXPosition, currentYPosition, 200);
                stave.setContext(context);


                //if the current measure is the first measure of the line, or if the clef or time signature change, set these:
                if (index === 0 || clef !== measures[index - 1].clef) stave.setClef(clef);
                if (index === 0 || timeSignature !== measures[index - 1].timeSignature) stave.setTimeSignature(`${timeSignature[0]}/${timeSignature[1]}`); //this may not work for cut time, will have to adjust later.

                stave.draw();

                //now iterate through the voices, push them to an array for joining...
                let VFVoices = [];
                for (let i = 0; i < voices.length; i++) {
                    //     //create an array to hold the notes, transform the note data into VF.StaveNotes and pass it into the array
                    let notes = []
                    voices[i].notes.forEach(note => {
                        notes.push(new VF.StaveNote(note));
                    });
                    VFVoices.push(new VF.Voice({ num_beats: timeSignature[0], beat_value: timeSignature[1] }).addTickables(notes));
                }
                const formatter = new VF.Formatter().joinVoices(VFVoices).format(VFVoices, currentYPosition); //join and format the voices
                // //now draw them
                VFVoices.forEach(voice => {
                    voice.draw(context, stave);
                });
                // //now increment the X position before drawing the next measure!
                currentXPosition += 200; //this should be incremented by the width of a measure, which is TBD right now
            });

            //now reset the current X position and increment the current Y position
            currentXPosition = 5;
            currentYPosition += 100;
        });
    });


    return (
        <View>{context.render()}</View>
    )
}

export default MusicView;