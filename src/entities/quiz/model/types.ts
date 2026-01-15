import type { ISkills, ISpecializations } from "@/entities/specializations/model/types"

export interface Question {
    code: string |null
    complexity: number
    createdAt: string
    createdBy: {id: string, username: string}
    createdById: string
    description: string
    id: number
    imageSrc: string |null
    keywords: string[]
    longAnswer: string 
    questionSkills: ISkills[]
    questionSpecializations: ISpecializations[]
    rate: number
    shortAnswer: string 
    status: string
    title: string 
    updatedAt: string
    updatedBy: {id: string, username: string}
    updatedById: string
}

export type QuestionProps = {
  currentItem: Question[];
};

export interface QuizState {
    quiz: Question[];
}

export const initialState: QuizState = {
    quiz: [],
};

export interface currentItemProp {
  currentItem: Question | undefined
}