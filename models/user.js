import { ur } from "@faker-js/faker";
import { Schema,model,models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }

},
{
    timestamps: true
}
);

export default models.User || model('User',userSchema);