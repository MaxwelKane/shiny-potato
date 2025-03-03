"use server"

// Replace this URL with your actual Google Form submission URL
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-g1z5gco146Su2oE3WvVJeH3y-q3QyOV2M78hceBltLR25A/formResponse"

export async function submitToGoogleForm(formData: FormData) {
  const name = formData.get("name")
  const contactMethod = formData.get("contactMethod")
  const contactInfo = formData.get("contactInfo")
  const message = formData.get("message")

  const data = new URLSearchParams()
  // Replace these entry.XXXXXX with your actual Google Form field IDs
  data.append("entry.890551383", name as string)
  data.append("entry.1160163022", contactMethod as string)
  data.append("entry.707394825", contactInfo as string)
  data.append("entry.1677818201", message as string)

  try {
    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "no-cors", // Add this line
    })

    // Since we're using no-cors, we can't access the response status
    // We'll assume it's successful if we reach this point
    console.log("Form submitted successfully")
    return { success: true, message: "Form submitted successfully" }
  } catch (error) {
    console.error("Error submitting form:", error)
    return { success: false, message: "Failed to submit form. Please try again." }
  }
}

