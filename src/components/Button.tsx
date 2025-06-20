type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
}

export function Button({ children, isLoading, type = "button", ...rest}: Props) {
  return (
    <button type={type} disabled={isLoading} className="w-full bg-[var(--color-gray-100)] mt-4 text-white text-sm py-3 px-6 rounded hover:bg-[var(--color-gray-200)] transition ease-linear cursor-pointer" {...rest}>
      {children}
    </button>
  )
}