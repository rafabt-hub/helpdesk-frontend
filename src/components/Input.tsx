type Props = React.ComponentProps<"input"> & {
  legend?: string
}

export function Input({ legend, type = "text", ...rest }: Props) {
  return (
    <fieldset className="w-full flex flex-col gap-2 focus-within:text-blue-500">
      {legend && (<legend className="text-xs text-inherit">{legend}</legend>)}

      <input type={type} className="text-sm border-b border-gray-400 focus:border-blue-400 focus:outline-none py-2 px-1" {...rest} />
    </fieldset>
  )
}