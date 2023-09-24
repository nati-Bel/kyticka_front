import "./outlet.scss";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import fileUpload from "../../helpers/fileUpload";
import axios from "axios";
import useHttp from "../../hooks/useHttp";
import { useNavigate } from "react-router-dom";

export const FormPhotoOutlet = () => {

  const apiUrl = "http://127.0.0.1:8000/api/admin/galleries";
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    loadGalleries();
  }, []);

  const loadGalleries = async () => {
    try {
      const response = await axios.get(apiUrl);
      setGalleries(response.data);
    } catch (error) {
      console.error("Error al obtener las galerías:", error);
    }
  };

  const [gallery_id, setGalleryId] = useState("");
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
          "http://127.0.0.1:8000/api/admin/photos",
          "POST",
          {
            url:uploadedImageUrl,
            gallery_id,
          }
        );

        if (response) {
          navigateTo("/admin/dashboard");
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
      <h2 className="formTitle">Pridaj novu fotku</h2>
      <div className="flex justify-center">
        <form className="form" onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-12">
            <div className="col-span-full">
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-brown-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-brown-600 focus-within:ring-offset-2 hover:text-brown-500"
                    >
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        multiple
                        onChange={onFileInputChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="gallery_id" className="label">
                  Galeria
                </label>
                <div className="mt-2">
                  <select
                    id="gallery_id"
                    name="gallery_id"
                    onChange={(e) => setGalleryId(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {galleries.data &&
                      galleries.data.map((gallery) => {
                        return (
                          <option key={gallery.id} value={gallery.id}>
                            {gallery.title}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-10">
              <legend className="label">Slider</legend>

              <div className="relative flex gap-x-3">
                <input
                  id="slider"
                  name="slider"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="slider" className="font-medium text-brown-900">
                  Include photo in the slider
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="my-3 flex w-full justify-center rounded-md bg-brown-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Nahraj fotku
          </button>
        </form>
        {isLoading && <p>Loading ...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && data && navigateTo("/admin/dashboard")}
      </div>
    </>
  );
};


