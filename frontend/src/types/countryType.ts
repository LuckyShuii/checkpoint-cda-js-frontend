import type { Continent } from "@/types/continentType";

export type Country = {
    id: number;
    name: string;
    code: string;
    emoji: string;
    continent?: Continent;
}