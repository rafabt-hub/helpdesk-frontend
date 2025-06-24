import uploadSvg from "../assets/icons/upload.svg"

type Props = React.ComponentProps<"input"> & {
  filename?: string | null
}

export function Upload({ filename = null, ...rest }: Props) {
  return (
    <div>
      <legend>
        Nova Imagem
      </legend>

      <div>
        <input type="file" id="upload" {...rest} />

        <span>{filename ?? "Selecione o arquivo"}</span>
      </div>

      <label htmlFor="upload">
        <img src={uploadSvg} alt="Icone de upload" />
      </label>
    </div>
  )
}