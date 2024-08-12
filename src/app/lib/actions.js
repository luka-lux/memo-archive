"use server";

import { revalidatePath } from "next/cache.js";
import { redirect } from "next/navigation.js";
import { Memoire, User } from "./models.js";
import { connecToDB } from "./utils.js";
import bcrypt from "bcrypt";
import { signIn } from "../auth.js"


export const addUser = async (formData) => {
  const { nom, prenom, matricule, niveau, specialite, password, isAdmin } = Object.fromEntries(formData);

  try{
    connecToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt) 
    const newUser = new User({
      nom,
      prenom,
      matricule,
      niveau,
      specialite,
      password:hashedPassword ,
      isAdmin,
    });

    await newUser.save();
  }catch(err){
    console.log(err);
    throw new Error("Failed to create  user!");
  }

  revalidatePath("/tableaux-de-bords/utilisateurs");
  redirect("/tableaux-de-bords/utilisateurs");
};

export const updateUser = async (formData) => {
  const { id, nom, prenom, matricule, niveau, specialite, password, isAdmin } = Object.fromEntries(formData);
  try{
    connecToDB();
    const updateFields = {
      nom,
      prenom,
      matricule,
      niveau,
      specialite,
      password,
      isAdmin,
    }
    Object.keys(updateFields).forEach((key)=>(updateFields[key]==="" || undefined) && delete updateFields[key]);
    await User.findByIdAndUpdate(id, updateFields)
  }catch(err){
    console.log(err);
    throw new Error("Failed to update  user!");
  }
  revalidatePath("/tableaux-de-bords/utilisateurs");
  redirect("/tableaux-de-bords/utilisateurs");
};

export const addMemoire = async (formData) => {
  const { theme, niveau, specialite, annee, intro } = Object.fromEntries(formData);

  try{
    connecToDB();

    const newMemoire = new Memoire({
      theme,
      niveau,
      specialite,
      annee,
      intro,
    });

    await newMemoire.save();
  }catch(err){
    console.log(err);
    throw new Error("Failed to create memoire!");
  }

  revalidatePath("/tableaux-de-bords/memoires");
  redirect("/tableaux-de-bords/memoires");
};

export const updateMemoire = async (formData) => {
  const { id, theme, niveau, specialite, annee, intro } = Object.fromEntries(formData);
  try{
    connecToDB();
    const updateFields = {
      theme,
      niveau,
      specialite,
      annee,
      intro,
    }
    Object.keys(updateFields).forEach((key)=>(updateFields[key]==="" || undefined) && delete updateFields[key]);
    await Memoire.findByIdAndUpdate(id, updateFields)
  }catch(err){
    console.log(err);
    throw new Error("Failed to update  memoire!");
  }
  revalidatePath("/tableaux-de-bords/memoires");
  redirect("/tableaux-de-bords/memoires");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try{
    connecToDB();

    await User.findByIdAndDelete(id);
  }catch(err){
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/tableaux-de-bords/utilisateurs");
};

export const deleteMemoire = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try{
    connecToDB();

    await Memoire.findByIdAndDelete(id);
  }catch(err){
    console.log(err);
    throw new Error("Failed to delete memoire!");
  }
  revalidatePath("/tableaux-de-bords/memoires");
};

export const authenticate = async (formData) => {
  const { matricule, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { matricule, password });
  } catch (err) {
    if (err.message.includes("Read more at https://errors.authjs.dev#credentialssignin")) {
      return { error: "Matricule ou mot de passe incorrect !"}
    }
    throw err;
  }
};