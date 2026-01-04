export function formatDate(date) {
  const parsed = new Date(date)

  if (isNaN(parsed)) return "Invalid date"

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
