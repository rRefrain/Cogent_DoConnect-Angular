import { Answer } from "../answer/answer";

export class Question {
    id: number;
    voteTally: number;

    descriptionQuestion: string;
    imageSrc: string;
    datetime: string;
    status: string;
    topic: string;
    title: string;
    answers: Array<Answer>

    createdBy: String;
    approvedBy: String;

}
