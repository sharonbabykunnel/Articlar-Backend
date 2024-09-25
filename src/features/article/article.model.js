import mongoose from "mongoose";

const articleScheema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      trim: true,
    },
    files: [
      {
        type: [String],
        trim: true,
      },
    ],
    likes: [
      {
        type: String,
        ref: "User",
      },
    ],
    category: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["active", "archived", "deleted"],
      default: "active",
    },
    notInterest: [
      {
        type: String,
      },
    ],
    isBlocked: Boolean,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Article', articleScheema);