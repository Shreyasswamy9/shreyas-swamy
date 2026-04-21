export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateForm(formData: {
  name: string
  email: string
  subject: string
  message: string
}): Record<string, string> {
  const errors: Record<string, string> = {}

  if (!formData.name.trim()) {
    errors.name = "Name is required"
  } else if (formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters"
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required"
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address"
  }

  if (!formData.subject.trim()) {
    errors.subject = "Subject is required"
  } else if (formData.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters"
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required"
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters"
  }

  return errors
}
