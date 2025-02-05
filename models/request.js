import { ur } from "@faker-js/faker";
import { Schema, Types, model, models } from "mongoose";

const requestSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    sender: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export default models.Request || model("Request", requestSchema);
