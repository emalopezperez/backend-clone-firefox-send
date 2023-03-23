const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim:true
    },
    email: {
      type: String,
      unique: true,
      require: true,
      lowercase: true,
      trim:true
    },
    password: {
      type: String,
      require: true,
      trim:true
    },
    roles: {
      type: ["user", "admin"],
      default: "user"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model("users", UserScheme)