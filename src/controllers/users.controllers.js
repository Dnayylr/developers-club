import userModel from "../models/user.model.js"

// TODO: Create users
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

// TODO: Get Users
export const getUsers = async (__request, reply)=>{
    try {
        const data = await userModel.find()
        if(!data){
            reply.send({ message: "error internal".red })
        }else{
            reply.send({ message: "funciona".bgBlue })
            reply.send({ showData: data })
        }

    } catch (error) {
        throw new Error(error)
    }
}