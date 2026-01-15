export interface ISpecializations {
    createdAt: string
    description: "string"
    id: number
    imageSrc: string | null
    title: string
    updatedAt: string
}

export interface ISkills {
    createdAt: string
    description: string
    id: number
    imageSrc: string | null
    specializations: ISpecializations[]
    title: string
    updatedAt: string
}