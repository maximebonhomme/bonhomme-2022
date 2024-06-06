// Define layer stacking
const items = ["header", "header-inner", "nav", "section", "backplate"]

// Helper function to get the stack index
export const zIndex = (item) => items.length - items.indexOf(item)
