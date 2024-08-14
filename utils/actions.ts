"use server";

import { profileSchema } from "./schemas";
import db from "./db";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    console.log("user", user);

    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.log("validatedFields", validatedFields);

    return { message: "Profile created" };
  } catch (error) {
    console.log("Error in createProfileAction");

    return { message: "There was an Error" };
  }
};
