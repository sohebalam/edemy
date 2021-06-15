import mongoose from "mongoose"

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      min: 6,
      max: 64,
    },
    picture: {
      type: String,
      required: true,
      default: "/avatar.png",
    },
    role: {
      type: [String],
      enum: ["Subscriber", "Instructor", "Admin"],
      default: ["Subscriber"],
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User
