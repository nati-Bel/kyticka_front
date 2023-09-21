import "./outlet.scss";
import { PhotoIcon } from "@heroicons/react/24/solid";
import useHttp from "../../hooks/useHttp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import fileUpload from "../../helpers/fileUpload";


export const FormAlbumOutlet = () => {

  const [title, setTitle] = useState("");
  //const [cover_url, setCover_url] = useState("")
  const navigateTo = useNavigate();
  const {isLoading, error, data, sendRequest } = useHttp();
  
  // const [selectedFile, setSelectedFile] = useState(null); // Estado para almacenar el archivo seleccionado
  // const onFileInputChange = ({ target }) => {
  //   const file = target.files[0];
  //   setSelectedFile(file);
  // };
  // const handleFileUpload = () => {
  //   if (selectedFile) {
  //     fileUpload(selectedFile);
  //   }
  // setCover_url(handleFileUpload())

  //};
  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest(
      "http://127.0.0.1:8000/api/admin/galleries",
      "POST",
      {title},
      //{cover_url}
      );
    navigateTo("/admin/dashboard/galerie");
  }

  //const handleDelete = (event) => {
    //console.log(event)
    //event.preventDefault();
    //sendRequest(`http://127.0.0.1:8000/api/admin/galleries/${id}`);
  
  
  return (
    <div className="flex justify-center">
      <form className="form" onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Choose a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        //onChange={onFileInputChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                  <button
                    type="button" // Cambia a type "button" para evitar envío de formulario
                    //onClick={handleFileUpload} // Llama a la función de carga de archivo al hacer clic en "Upload"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gallery title
              </label>
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

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Crear album
          </button>
        </div>
      </form>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && data && <p> Novy album uspesne vytvoreny </p>}
    </div>
  );
};


