import { ur } from "@faker-js/faker";
import { Schema, Types, model, models } from "mongoose";

const chatSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    groupChat: {
      type: Boolean,
      default: false,
    },
    creator: {
      type: Types.ObjectId,
      ref:"User",
    },
    members: [
        {
            type: Types.ObjectId,
            ref:"User",
        }
    ] 

    },
  
  {
    timestamps: true,
  }
);

export default models.Chat || model("Chat", chatSchema);
