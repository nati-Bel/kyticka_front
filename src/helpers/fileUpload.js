
const fileUpload = async(file) => {

    if (!file) throw new Error('No file to submit')

    const cloudUrl = "https://api.cloudinary.com/v1_1/dk8lzhnjb/upload";

    const formData = new FormData();
    formData.append("upload_preset", "kyticka");
    formData.append("file", file);
    
    try {
        const resp = await fetch ( cloudUrl, {
            method: 'POST' ,
            body: formData
        });

        console.log(resp);
        if ( !resp.ok ) throw new Error ('Cannot upload file')

        const cloudResp = await resp.json();
        console.log({ cloudResp })
        
        return cloudResp.secure_url;

    } catch (error) {
        console.log(error)
        throw new Error(error.message) ;
    }
}

export default fileUpload