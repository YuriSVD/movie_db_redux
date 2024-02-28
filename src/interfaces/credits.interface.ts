import {ICastMember} from "./cast_member.interface";
import {ICrewMember} from "./crew_member.interface";

export interface ICredits {
    id: number;
    cast: ICastMember[];
    crew: ICrewMember[];
}