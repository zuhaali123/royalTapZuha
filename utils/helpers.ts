export function getAvatarBackground(color: string) {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-500",
      red: "bg-red-500",
      gray: "bg-gray-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      pink: "bg-pink-500",
      orange: "bg-orange-500",
      yellow: "bg-yellow-500",
    };
  
    return colorMap[color] || "bg-gray-200"; // Default to gray if the color is not found
  }