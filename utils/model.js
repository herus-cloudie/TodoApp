import {Schema , model , models} from 'mongoose'
let UserSchema = new Schema({
     email : {
        type : String,
        require : true
     },
     password : {
        type : String,
        require : true
     },
     name: String,
     lastName : String,
     todo : {
        type : [{title : String , status : String}]
     },
     createdAt : {
        type : Date,
        default : () => Date.now(),
        immutable : true
     }
})

let UserTodo = models?.UserTodo || model('UserTodo' , UserSchema)

export default UserTodo;