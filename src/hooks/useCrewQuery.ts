import {useAppSelector} from "./redux.hook";
import {ICrewMember, ICrewMovie} from "../interfaces";

const useCrewQuery = () => {
    const {crewMembers} = useAppSelector(state => state.personReducer);

    const reduce = crewMembers.reduce((accumulator, crewMember) => {
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
    });


    return {
        reduce,
        getCrew: (array: ICrewMember[]) => {
            let sortArray = [] as ICrewMember[];
            for (let i = 0; i < array.length; i++) {
                if (i !== 0 && sortArray[sortArray.length - 1].name === array[i].name) {
                    sortArray[sortArray.length - 1].job = sortArray[sortArray.length - 1].job + ", " + array[i].job;
                } else {
                    sortArray[sortArray.length] = {...array[i]}
                }
            }
            return sortArray;
        },
        getMovies: (array: ICrewMovie[]) => {
            const sortArray = [] as ICrewMovie[];
            for (let i = 0; i < array.length; i++) {
                if (i !== 0 && sortArray[sortArray.length - 1].title === array[i].title) {
                    sortArray[sortArray.length - 1].job = sortArray[sortArray.length - 1].job + ", " + array[i].job;
                } else {
                    sortArray[sortArray.length] = {...array[i]}
                }
            }
            return sortArray;
        }
    }
}

export {useCrewQuery}