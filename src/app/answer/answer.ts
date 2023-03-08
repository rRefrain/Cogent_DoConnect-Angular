import { Question } from "../question/question";

export class Answer{
    id: number;
    voteTally: number;
    descriptionAnswer: String;
    imgSrc: String;
    approved: boolean;
    datetime: String;
    question: Question;
    createdBy: String;
    approvedBy: String;
}