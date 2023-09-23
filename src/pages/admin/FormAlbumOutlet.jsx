import "./outlet.scss";
import useHttp from "../../hooks/useHttp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fileUpload from "../../helpers/fileUpload";
import { PhotoIcon } from "@heroicons/react/24/solid";


export const FormAlbumOutlet = () => {
  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const { isLoading, error, data, sendRequest } = useHttp();

  const navigateTo = useNavigate();

  const onFileInputChange = ({ target }) => {
    const file = target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      try {
        const uploadedImageUrl = await fileUpload(selectedFile);

        const response = await sendRequest(
          "http://127.0.0.1:8000/api/admin/galleries",
          "POST",
          {
            title,
            cover_url: uploadedImageUrl,
          }
        );

        if (response) {
          navigateTo("/admin/dashboard/albums");
        } else {
          console.error("Error en la respuesta del servidor");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("No se ha seleccionado un archivo para cargar.");
    }
  };

  return (
    <>
    <h2 className="formTitle">Vytvor novy album</h2>
      <div className="flex justify-center">
        <form className="form" onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-12">
            <div className="flex-col gap-x-3">
              <label htmlFor="cover-photo" className="label">
                Titulna fotka
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="chooseFile">
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="chooseFile"
                      onChange={onFileInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="col-span-full">
                  <label className="label">Nazov albumu</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="my-3 flex w-full justify-center rounded-md bg-brown-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Vytvor album
            </button>
          </div>
        </form>
        {isLoading && <p>Loading ...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && data && navigateTo("/admin/dashboard/albums")}
      </div>
    </>
  );
};