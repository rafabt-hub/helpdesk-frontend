type Props = React.ComponentProps<"input"> & {
  legend?: string
}

export function Input({ legend, ...rest}: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 p-4 lg:p-20 lg:max-h-60 focus-within:text-[var(--color-blue-100)]">
      {legend && <legend className="text-[var(--color-gray-400)] lg:text-7xl">{legend}</legend>}

      <input type="text" className="lg:text-7xl w-full h-8 lg:h-25 border-b-1 border-[var(--color-gray-400)] focus:border-[var(--color-blue-100)] focus:outline-none" {...rest} />
    </fieldset>
  )
}