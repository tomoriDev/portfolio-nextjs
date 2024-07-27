export const buttonStyles = {
  primary: "bg-blue-500 text-primary hover:bg-blue-600",
  secondary: "bg-gray-500 text-primary hover:bg-gray-600",
  outlined: "border border-primary outlined text-primary rounded-lg hover:text-white hover:bg-primary hover:bg-blue-100",
  danger: "bg-red-500 text-primary hover:bg-red-600",
  text: "text-primary"
};

export type ButtonType = keyof typeof buttonStyles;
