import userModel from "../models/user.model.js"

export const createUserController = async (request, reply)=>{
    try {
        const { username, 
                controlNumber, 
                email, 
                numberPhone, 
                carrera, 
                question_one, 
                question_two, 
                question_tree, 
                question_for  
        } = request.body
        
        // TODO: save data in this object 
        const data = {
            username,
            controlNumber,
            email,
            numberPhone,
            carrera,
            question_one,
            question_two,
            question_tree,
            question_for
        }

        // TODO: save in database
        const submit = await userModel.create(data)
        if(!submit){
            reply.send({ message: "error internal" })
        }else{
            reply.send({ message: "funciona".bgMagenta, data: data})
        }
    } catch (error) {
        throw new Error(error)
    }
}