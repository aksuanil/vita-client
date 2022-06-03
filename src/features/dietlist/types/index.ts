export interface Inputs {
    gender: string,
    age: number,
    height: number,
    weight: number,
    desiredCalorie: number,
    desiredWeight: number
    approxDays: number
    bmiResult: number
    physicalActivity: number
}

export interface BmiInputs {
    height: number,
    weight: number
}

export interface DesiredWeightInputs {
    desiredCalorie: number,
    desiredWeight: number,
    weight: number
}