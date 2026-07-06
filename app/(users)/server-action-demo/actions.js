'use server';

export async function createContactAction(prevState, formData) {
  // Yeh ek dummy delay hai taaki aapko "Saving..." spinner dikhe 
  // (kyunki local server par bahut fast execute ho jata hai)
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const name = formData.get('name');
  
  // Validation: Agar naam nahi daala toh error return karo
  if (!name || name.trim() === '') {
    return { error: 'Name is compulsory!' };
  }
  
  // Success state: Server console mein print karo aur success message return karo
  console.log("🔥 [SERVER ACTION] Data successfully received:", name);
  return { success: true, message: `Hello ${name}, aapka data save ho gaya!` };
}
