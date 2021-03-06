//this component takes in an array of measures, and organizes them visually into systems depending upon the available visual space
import React from 'react';
import { View } from 'react-native';
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';
import Vex from 'vexflow';

const MusicViewByMeasure = ({ measures }) => {
    //vexflow / standalone vf context setup
    const VF = Vex.Flow;
    const context = new ReactNativeSVGContext(NotoFontPack, { width: 400, height: 400 })


    //set the default x and y drawing positions and default measures per system --- may change this to an object called position, or pos, for instance: pos.x, pos.y, pos.systemY
    let currentXPosition = 50; //x position of 'cursor' at which staves are drawn
    let currentYPosition = 50; //y position of 'cursor' at whuch staves are drawn
    let currentSystemY = 50; //y position of the current musical system. currentYPosition is reset to this at each new measure, this moves down the page w/ each new system
    let mps = 2; //mps = measures per system, this can change depending on the screen orientation
    let currentMeasure = 0; //current measure which is reset each time there is a new system
    let currentSystem = 0; //current system. this is used to keep track of whether it is the first system or not so the component knows whether to use the full instrument name or the abbreviation
    let measureWidth = 168; //might want to change this at some point/depending on time signature or something?
    let blh = 75; //base line height between staves within an instrument
    let slh = 25; //supplemental line height between different instruments

    //measures is an array of data for each measure.
    measures.forEach((measure, m_index) => {
        //draw staves for each instrument, if is more than one stave in an instrument, connect the staves with a brace if it is the first 
        const { instruments } = measure;
        const currentMeasureStaves = [];

        instruments.forEach((instrument, i_index) => {
            const { staves } = instrument;
            const currentInstrumentStaves = [];
            staves.forEach((stave, s_index) => {
                const { clef, timeSigStr, keySignature, voices } = stave;
                const s = new VF.Stave(currentXPosition, currentYPosition, measureWidth).setContext(context);

                //if the measure is the first measure in the system (currentMeasure === 0) or if the clef or time signature change, set them
                if (currentMeasure === 0 || clef !== measures[m_index - 1].instruments[i_index].staves[s_index].clef) s.setClef(clef);
                if (currentMeasure === 0 || timeSigStr !== measures[m_index - 1].instruments[i_index].staves[s_index].timeSigStr) s.setTimeSignature(timeSigStr);

                //push this to both the array of staves for the current measure to the array of staves for the current instrument.
                currentMeasureStaves.push(s);
                currentInstrumentStaves.push(s);

                //if it is the first measure of the system and there is only one stave for this instrument, draw text to the left of the stave
                if (currentMeasure === 0 && staves.length === 1) {
                    s.setText(currentSystem === 0 ? instrument.name : instrument.abbr, VF.Modifier.Position.LEFT);
                }
                s.draw();
                currentYPosition += blh; //move the drawing position down
                if (s_index === staves.length - 1) currentYPosition += slh; //if it is the last stave for this instrument, add an additional vertical space
            })
            //if currentMeasure === 0, draw a brace between staves for this instrument.
            if (currentMeasure === 0 && currentInstrumentStaves.length > 1) {
                const connector = new VF.StaveConnector(currentInstrumentStaves[0], currentInstrumentStaves[currentInstrumentStaves.length - 1])
                    .setType(VF.StaveConnector.type.BRACE).setContext(context).setText(currentSystem === 0 ? instrument.name : instrument.abbr).draw();
            }
        })

        //draw connectors between each stave for this measure.
        if (currentMeasureStaves.length > 1) {
            const connector1 = new VF.StaveConnector(currentMeasureStaves[0], currentMeasureStaves[currentMeasureStaves.length - 1])
                .setType(VF.StaveConnector.type.SINGLE_LEFT).setContext(context).draw();

            if (m_index === measures.length - 1) {
                const connector2 = new VF.StaveConnector(currentMeasureStaves[0], currentMeasureStaves[currentMeasureStaves.length - 1])
                    .setType(VF.StaveConnector.type.BOLD_DOUBLE_RIGHT).setContext(context).draw();
            }
        }

        //increment the current measure
        currentMeasure++
        if (currentMeasure === mps) {
            currentMeasure = 0;
            //reset the current x position
            currentXPosition = 50;
            //increment the currentSystemY
            currentSystemY = currentYPosition + blh + slh;
            currentYPosition = currentSystemY;
            currentSystem++;
        } else {
            currentXPosition += measureWidth;
            currentYPosition = currentSystemY;
        }
    })

    return (
        <View>{context.render()}</View>
    )
}

export default MusicViewByMeasure;