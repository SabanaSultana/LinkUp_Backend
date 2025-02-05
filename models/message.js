import { ur } from "@faker-js/faker";
import { Schema, Types, model, models } from "mongoose";

const chatSchema = new Schema(
  {
    content: {
      type: String,
    },
    sender: {
      type: Types.ObjectId,
      ref: "User",
    },
    chat: {
      type: Types.ObjectId,
      ref: "Chat",
    },
   attachments:[{

       public_id: {
              type: String,
              required: true
          },
          url: {
              type: String,
              required: true
          }
   }
   ]
  },

  {
    timestamps: true,
  }
);

export default models.Message || model("Message", chatSchema);
