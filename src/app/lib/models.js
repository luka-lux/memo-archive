import mongoose from "mongoose";

const userShema = new mongoose.Schema(
  {
  nom: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  prenom: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  matricule: {
    type: String,
    required: true,
    unique: true,
  },
  niveau: {
    type: String,
    required: true,
  },
  specialite: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  },
  {timestamps: true,}
);
const memoireShema = new mongoose.Schema(
  {
  theme: {
    type: String,
    required: true,
    unique: true,
  },
  niveau: {
    type: String,
    required: true,
  },
  specialite: {
    type: String,
    required: true,
  },
  annee: {
    type: String,
    required: true,
  },
  intro: {
    type: String,
    required: true,
    unique: true,
  },
  pdfPath: {
    type: String,
    required: true
  },
  },
  {timestamps: true,}
);

export const User = mongoose.models.User || mongoose.model("User", userShema);
export const Memoire = mongoose.models.Memoire || mongoose.model("Memoire", memoireShema);