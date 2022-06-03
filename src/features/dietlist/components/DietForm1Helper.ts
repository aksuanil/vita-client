import { Inputs, BmiInputs, DesiredWeightInputs } from "../types";

const calcBmi = (bmiInputs: BmiInputs) => {
    const heightMeterSquare = (bmiInputs.height / 100) * (bmiInputs.height / 100)
    const result = bmiInputs.weight / heightMeterSquare
    return result;
}

const calcDailyCalNeed = (inputs: Inputs) => {
    let bmrValue: number = 0;
    let bmrMultiplier: number = 1.2;
    if (inputs.gender === 'male') {
        bmrValue = 66.47 + (13.75 * inputs.weight) + (5.003 * inputs.height) - (6.755 * inputs.age)
    }
    if (inputs.gender === 'female') {
        bmrValue = 655.1 + (9.563 * inputs.weight) + (1.850 * inputs.height) - (4.676 * inputs.age)
    }
    return bmrValue * ((inputs.physicalActivity * 0.175) + bmrMultiplier);
}

const calcTargetWeightDays = (inputs: Inputs, targetWeightInputs: DesiredWeightInputs, calcDailyCalNeed: any) => {
    const dailyCal = calcDailyCalNeed;
    const weightGap = inputs.weight - inputs.desiredWeight;
    const weightGapCalories = weightGap * 8000;
    const targetDays = weightGapCalories / (dailyCal - targetWeightInputs.desiredCalorie);
    return targetDays
}

export {calcBmi, calcDailyCalNeed, calcTargetWeightDays}