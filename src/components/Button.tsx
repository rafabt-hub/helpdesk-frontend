import React from "react"

type ButtonVariant = "black" | "white"

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
  variant?: ButtonVariant
}

export function Button({ children, isLoading, type = "button", variant = "black", ...rest}: Props) {
  const baseStyles = "w-full mt-4 text-sm py-3 px-6 rounded transition ease-linear cursor-pointer"

  const variantStyles = {
    black: "bg-[var(--color-gray-100)] text-white hover:bg-[var(--color-gray-200)]",
    white: "bg-[var(--color-gray-500)] text-black hover:bg-[var(--color-gray-300)]",
  }

  return (
    <button type={type} disabled={isLoading} className={`${baseStyles} ${variantStyles[variant]}`} {...rest}>
      {children}
    </button>
  )
}