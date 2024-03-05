'use client'
import { CldUploadButton } from 'next-cloudinary';

const UploadImage = () => {
  const handleSuccess = (result) => {
    console.log('Image uploaded successfully:', result);
    // Aquí puedes manejar el resultado de la carga, como mostrar la imagen en tu aplicación
  };

  const handleError = (error) => {
    console.error('Error uploading image:', error);
    // Aquí puedes manejar errores de carga, como mostrar un mensaje de error al usuario
  };

  return (
    <div>
      <CldUploadButton
        cloudName={process.env.CLOUDINARY_CLOUD_NAME}
        apiKey={process.env.CLOUDINARY_API_KEY}
        uploadPreset="mu1ohw43"
        onSuccess={handleSuccess}
        onError={handleError}
      >
        Cargar Imagen
      </CldUploadButton>
    </div>
  );
};

export default UploadImage;