// Things should only have ONE REASON TO CHANGE that is SINGLE RESPONSIBILITY

import logMessage from "./logger.js";

class CalorieTracker{
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount){
        this.currentCalories += calorieCount;
        if (this.currentCalories > this.maxCalories){
            logMessage("Max calories exceeded");
        }
    }
}


const CalorieTracker = new CalorieTracker(2000);
CalorieTracker.trackCalories(500);
CalorieTracker.trackCalories(1000);
CalorieTracker.trackCalories(700);