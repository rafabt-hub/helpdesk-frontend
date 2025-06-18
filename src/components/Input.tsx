type Props = React.ComponentProps<"input"> & {
  legend?: string
}

export function Input({ legend, ...rest }: Props) {
  return (
    <fieldset className="w-full flex flex-col gap-2 focus-within:text-[var(--color-blue-100)]">
      {legend && (<legend className="lg:text-6xl text-inherit">{legend}</legend>)}

      <input className="border-b border-[var(--color-gray-400)] focus:border-[var(--color-blue-100)] focus:outline-none py-2 px-1 lg:mt-5 lg:py-6 lg:px-10 lg:text-6xl" {...rest} />
    </fieldset>
  )
}