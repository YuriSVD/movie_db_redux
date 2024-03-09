import {useAppSelector} from "./redux.hook";

const useCrewQuery = () => {
    const {crewMembers} = useAppSelector(state => state.personReducer);
    //const {state: {crew}} = useAppContext();

    return crewMembers.reduce((accumulator, crewMember) => {
        switch (crewMember.department) {
            case "Art":
                accumulator.art.push(crewMember);
                break;
            case "Camera":
                accumulator.camera.push(crewMember);
                break;
            case "Costume & Make-Up":
                accumulator.costume.push(crewMember);
                break;
            case "Crew":
                accumulator.crew.push(crewMember);
                break;
            case "Directing":
                accumulator.directing.push(crewMember);
                break;
            case "Editing":
                accumulator.editing.push(crewMember);
                break;
            case "Lighting":
                accumulator.lighting.push(crewMember);
                break;
            case "Production":
                accumulator.production.push(crewMember);
                break;
            case "Sound":
                accumulator.sound.push(crewMember);
                break;
            case "Visual Effects":
                accumulator.visualEffects.push(crewMember);
                break;
            case "Writing":
                accumulator.writing.push(crewMember);
                break;
        }
        return accumulator;
    }, {
        art: [],
        camera: [],
        costume: [],
        crew: [],
        directing: [],
        editing: [],
        lighting: [],
        production: [],
        sound: [],
        visualEffects: [],
        writing: []
    })
}

export {useCrewQuery}