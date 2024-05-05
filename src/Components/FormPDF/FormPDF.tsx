import { useForm } from "react-hook-form";
import { useState } from "react";
import { IFormPDF } from "../../interfaces/IFormPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DocumentPDF from "./MyDocument";

const FormPDF = () => {
  const [formData, setFormData] = useState<IFormPDF>();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormPDF>({ mode: "onBlur" });

  const generatePdfFile = async (data: IFormPDF) => {
    const pictureDataUrl = await fileToDataURL(data.picture[0]);
    setFormData({ ...data, picture: pictureDataUrl });
  };

  const fileToDataURL = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };
      reader.onerror = (e) => {
        reject(e.target?.error);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(generatePdfFile)}>
        <input
          type="text"
          {...register("name", {
            required: "Поле обязательно для заполнения!",
            minLength: {
              value: 5,
              message: "Нужно больше символов:)",
            },
          })}
        />
        <input
          type="file"
          accept="image/jpg, image/png"
          {...register("picture", {
            required: "Загрузите картинку!",
          })}
        />

        <p>{errors?.name?.message}</p>
        <button type="submit">Сохранить</button>
      </form>
      {formData && (
        <PDFDownloadLink
          document={<DocumentPDF name={formData.name} picture={formData.picture} />}
          fileName={`${formData.name}.pdf`}
        >
          {({ blob, url, loading, error }) => (loading ? "Загрузка..." : "Скачать")}
        </PDFDownloadLink>
      )}
    </>
  );
};

export default FormPDF;
