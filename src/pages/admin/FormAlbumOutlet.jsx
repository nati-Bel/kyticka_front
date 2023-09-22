import "./outlet.scss";
import useHttp from "../../hooks/useHttp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fileUpload from "../../helpers/fileUpload";


export const FormAlbumOutlet = () => {

  const [title, setTitle] = useState("");
  //const [cover_url, setCover_url] = useState("")
  const navigateTo = useNavigate();
  const {isLoading, error, data, sendRequest } = useHttp();
  const [selectedFile, setSelectedFile] = useState(null);
  const onFileInputChange = ({ target }) => {
  const file = target.files[0];
     setSelectedFile(file);
   };

  // const handleFileUpload = () => {
  //   if (selectedFile) {
  //     fileUpload(selectedFile)
  //       .then((url) => {
  //         setCover_url(url); // Asignar la URL del archivo subido a cover_url
  //       })
  //       .catch((error) => {
  //         // Manejar cualquier error que pueda ocurrir durante la carga del archivo
  //         console.error("Error al cargar el archivo:", error);
  //       });
  //   }
  // };



  // const handleFileUpload = () => {
  //    if (selectedFile) {
  //      fileUpload(selectedFile);
  //    }
  //   }
  
  // setCover_url(handleFileUpload())

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verifica si hay un archivo seleccionado y que se haya subido correctamente
    if (selectedFile) {
      try {
        // Sube el archivo a Cloudinary y obtiene la URL
        const uploadedImageUrl = await fileUpload(selectedFile);

        // Envía la solicitud POST con el título y la URL de la imagen
        const response = await sendRequest(
          "http://127.0.0.1:8000/api/admin/galleries",
          "POST",
          {
            title,
            cover_url: uploadedImageUrl, // Agrega la URL de la imagen cargada
          }
        );

        // Verifica la respuesta y maneja en consecuencia (por ejemplo, redirecciona)
        if (response) {
          navigateTo("/admin/dashboard/albums");
        } else {
          // Maneja un escenario en el que la respuesta es falsa o incorrecta
          console.error("Error en la respuesta del servidor");
        }
      } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la carga o la solicitud POST
        console.error("Error:", error);
      }
    } else {
      // Maneja el caso en el que no se haya seleccionado un archivo
      console.error("No se ha seleccionado un archivo para cargar.");
    }
  };
  
  return (
    <div>
      <form>
        <label>Cover foto</label>
        <input
          id="file-upload"
          name="cover_url"
          type="file"
          onChange={onFileInputChange}
        ></input>
        {/* <button onClick={handleFileUpload}>upload cover photo</button> */}
        {/* </form>

      <form> */}
        <label>Album title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>create album</button>
      </form>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && data && navigateTo("/admin/dashboard/albums")}
    </div>
  );
}