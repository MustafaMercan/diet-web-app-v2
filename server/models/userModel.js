const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    features:{
        type:Object,
        default:{
            gender:"-",
            age: "-",
            weight: "-",
            height: "-",
            phoneNumber: "-",
            diseases: "-",
            chronicRelative: "-",
            usedMedications: "-",
            operations: "-",
            allergies: "-",
            dietDecision: "-",
            physicalActivity: "-",
            sleepPattern: "-",
            regl: "-",
            digestiveSystem: "-",
            stomachDamaging: "-",
            mealPlanning: "-",
            skippedMeal: "-",
            snacks: "-",
            essentialFood: "-",
            notConsumedFood: "-",
            nightEatingHabits: "-",
            psychologicalState: "-",
            waterAmount: "-",
            teaCoffeAmount: "-",
            mineralWaterAmount: "-",
            sodaAmount: "-",
            sugarAmount: "-",
            alcoholAmount: "-",
          }
    }
},{
    timestamps:true
})

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;