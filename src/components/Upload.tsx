import { useState } from "react"
import uploadSvg from "../assets/icons/upload.svg"
import trashSvg from "../assets/icons/trash.svg"

type Props = React.ComponentProps<"input"> & {
  filename?: string | null;
  onDelete?: () => void;
};

export function Upload({ filename = null, onDelete, ...rest }: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);

    if (rest.onChange) {
      rest.onChange(e);
    }
  }

  function handleDelete() {
    setPreview(null);
    if (onDelete) onDelete();
  }

  return (
    <div className="w-full flex items-center gap-3">
      <div className="w-22 h-22 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600 relative"
        style={{
          backgroundImage: preview ? `url(${preview})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {!preview && "Foto"}
      </div>

      <label
        htmlFor="upload"
        className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition text-black text-sm">
        <img src={uploadSvg} alt="Upload" className="w-5 h-5" />
        Nova Imagem
      </label>

      <input
        type="file"
        id="upload"
        className="hidden"
        onChange={handleChange}
        {...rest} />

      {filename && (
        <span className="text-sm text-gray-700 truncate max-w-[140px]">
          {filename}
        </span>
      )}
            
      <button
        type="button"
        onClick={handleDelete}
        className="p-2 bg-gray-200 rounded-md">
        <img src={trashSvg} alt="Excluir" className="w-5 h-5" />
      </button>
    </div>
  );
}

