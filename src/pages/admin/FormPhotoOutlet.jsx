import "./outlet.scss";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import fileUpload from "../../helpers/fileUpload";
import axios from "axios";
//import useHttp from "../../hooks/useHttp";

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

  const [selectedFile, setSelectedFile] = useState(null); // Estado para almacenar el archivo seleccionado
  const onFileInputChange = ({ target }) => {
    const file = target.files[0];
    setSelectedFile(file);
  };
  const handleFileUpload = () => {
    if (selectedFile) {
    fileUpload(selectedFile);
  }};

 //const [url, setUrl] = useState("");
 //const [galerry, setGallery] = useState("");

  

  return (
    <div className="flex justify-center">
      <form className="form">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        multiple
                        className="sr-only"
                        onChange={onFileInputChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                  <button
                    type="button" // Cambia a type "button" para evitar envío de formulario
                    onClick={handleFileUpload} // Llama a la función de carga de archivo al hacer clic en "Upload"
                    className="rounded-md bg-brown-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brown-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-600"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="gallery_id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Galeria
              </label>
              <div className="mt-2">
                <select
                  id="gallery_id"
                  name="gallery_id"
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

            {/* <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
          </div>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Slider
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="slider"
                      name="slider"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="slider"
                      className="font-medium text-gray-900"
                    >
                      Include photo in the slider
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="button" // Cambia a type "button" para evitar envío de formulario
            //onClick={} // Llama a la función de carga de archivo al hacer clic en "Upload"
            className="rounded-md bg-brown-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brown-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-600"
          >
            Crear album
          </button>
        </div>
      </form>
    </div>
  );
};


