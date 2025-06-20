import React from "react"

type ButtonVariant = "black" | "white"

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
  variant?: ButtonVariant
  href?: string
}

export function Button({ children, isLoading, type = "button", variant = "black", href, ...rest}: Props) {
  const baseStyles = "w-full mt-4 text-sm py-3 px-6 rounded transition ease-linear cursor-pointer disabled:opacity-50 disabled:cursor-progress"

  const variantStyles = {
    black: "bg-[var(--color-gray-100)] text-white hover:bg-[var(--color-gray-300)]",
    white: "bg-[var(--color-gray-500)] text-black hover:bg-[var(--color-gray-300)]",
  }

  const combinedClasses = `${baseStyles} ${variantStyles[variant]}`

  if (href) {
    return (
      <a href={href} className={`${combinedClasses} text-center`}
       {...rest as React.ComponentPropsWithoutRef<'a'>}>
        {children}
      </a>
    )
  }

  return (
    <button 
      type={type} 
      disabled={isLoading} 
      className={combinedClasses} 
      {...rest as React.ComponentPropsWithoutRef<'button'>}
    >
      {children}
    </button>
  )
}