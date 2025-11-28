import React from "react"

type ButtonVariant = "black" | "white"

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
  variant?: ButtonVariant
  href?: string
}

export function Button({ children, isLoading, type = "button", variant = "black", href, ...rest}: Props) {
  const baseStyles = "w-full mt-1 text-sm py-2 px-6 rounded transition ease-linear cursor-pointer disabled:opacity-50 disabled:cursor-progress"

  const variantStyles = {
    black: "bg-black text-white hover:bg-gray-600",
    white: "bg-gray-300 text-black hover:bg-gray-700",
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
      {...rest as React.ComponentPropsWithoutRef<'button'>}>
      {children}
    </button>
  )
}