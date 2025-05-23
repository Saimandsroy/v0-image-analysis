/**
 * Utility functions for language handling
 */

// Validate if the provided language is supported
export function isValidLanguage(lang: string): boolean {
  return ["hinglish", "english", "hindi"].includes(lang)
}

// Get the correct text based on language
export function getTextByLanguage(language: string, hinglish: string, english: string, hindi: string): string {
  switch (language) {
    case "hinglish":
      return hinglish || ""
    case "english":
      return english || ""
    case "hindi":
      return hindi || ""
    default:
      return hinglish || ""
  }
}

// Get language from URL path or localStorage
export function getInitialLanguage(): string {
  // Check if we're on the client side
  if (typeof window === "undefined") {
    return "hinglish" // Default for server-side rendering
  }

  // Try to get from localStorage first
  const savedLanguage = localStorage.getItem("preferredLanguage")
  if (savedLanguage && isValidLanguage(savedLanguage)) {
    return savedLanguage
  }

  // Default to hinglish if no valid preference is found
  return "hinglish"
}
