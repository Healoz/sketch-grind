import { Step } from "./Step";

export type Session = {
    id: string;
    name: string;
    img: string;
    steps: Step[];
}