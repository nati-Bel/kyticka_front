# Kyticka_front

![alt text](https://res.cloudinary.com/dk8lzhnjb/image/upload/v1696161040/kyticka/mysoumvtaamengkgdeid.png)

** an ongoing project **

Welcome to the frontend repository of Kyticka. This project is the client-side of the KYTICKA flowershop's website. Here you will find information on how to run the project and the technologies used.

## Technologies

Kyticka_front project uses the following technologies:
- ReactJS (with Vite)
- Tailwind
- Sass
- Axios
- Cloudinary (used for image management)
- emailJS

## Usage Instructions

To run this project locally, follow these steps:

 1. Clone this repository to your local machine.
 2. Run "npm install" to install all the necessary dependencies
 3. Make sure you replace the urlAPI with the actual url of the backend API.
 4. You will need an account on Cloudinary and to configure a preset to upload your photos. Make sure you replace the CloudinaryAPI with the actual url of your Cloudinary preset.
 5. You will need as well an account on emailJS. Make sure you configure your template email using the variables in the form (Contact.jsx) and remember to replace the serviceID, templateID and public key in send.form function (Contact.jsx)