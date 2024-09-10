import { ElementStyling } from "./ElementStyling";

export type Step = {
    name: string;
    description: string;
    timeInSeconds: number;
    elementStyling: ElementStyling;
}