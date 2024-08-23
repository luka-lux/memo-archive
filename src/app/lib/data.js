import { User,Memoire } from "./models.js"
import connecToDB  from "./utils.js";

export const fetchUsers = async (q,page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 4 ;

  try{
    connecToDB();
    const count = await User.find({matricule: {$regex: regex}}).countDocuments();
    const users = await User.find({matricule: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return {users, count};
  }catch(err){
    console.error(err)
    throw new Error("Failed to fetch users !")
  }
};

export const fetchUser = async (id) => {
  try{
    connecToDB();
    const user = await User.findById(id);
    return user;
  }catch(err){
    console.error(err)
    throw new Error("Failed to fetch user !")
  }
};

export const fetchMemoires = async (q,page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10 ;

  try{
    connecToDB();
    const count = await Memoire.find({theme: {$regex: regex}}).countDocuments();
    const memoires = await Memoire.find({theme: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
    return {memoires, count};
  }catch(err){
    console.error(err)
    throw new Error("Failed to fetch memoires !")
  }
};

export const fetchMemoire = async (id) => {
  try{
    connecToDB();
    const memoire = await Memoire.findById(id);
    return memoire;
  }catch(err){
    console.error(err)
    throw new Error("Failed to fetch memoire !")
  }
};