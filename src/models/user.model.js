import mongoose from "mongoose";

const user = new mongoose.Schema(
    {
        username: {
            type: String
        },
        controlNumber: {
            type: Number,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        numberPhone: {
            type: Number,
            unique: true
        },
        carrera: {
            type: String,
        },
        question_one: { // ? por q quieres meterte a la carrera
            type: String,
            maxlength: 120
        },
        question_two: { // ? areas de interés
            type: String,
            maxlength: 120
        },
        question_tree: { // ? que esperas de la carrera
            type: String,
            maxlength: 120
        },
        question_for: { // ? que area conoces ya 
            type: String,
            maxlength: 120
        }
    }
)

const userModel = mongoose.model("users", user)
export default userModel