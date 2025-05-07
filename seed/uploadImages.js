// uploadImages.js (actualización para asegurar conexión abierta)
const fs = require('fs');
const path = require('path');
const { MongoClient, GridFSBucket } = require('mongodb');

const uri = 'mongodb+srv://nemesisnecros:KZi2r3uXYEtflBaz@cluster0.q15pww7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'pinguinorey3d';
const imgDir = path.join(__dirname, '../assets/img');

async function uploadImages() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const bucket = new GridFSBucket(db, { bucketName: 'imagenes' });

    const files = fs.readdirSync(imgDir);

    // Usar Promise.all para esperar que todas las imágenes se suban antes de cerrar la conexión
    const uploadPromises = files.map((file) => {
      const filePath = path.join(imgDir, file);
      const uploadStream = bucket.openUploadStream(file);
      const readStream = fs.createReadStream(filePath);

      // Piping the file into the upload stream
      readStream.pipe(uploadStream);

      return new Promise((resolve, reject) => {
        uploadStream.on('finish', () => {
          console.log(`Imagen subida: ${file}`);
          resolve();
        });

        uploadStream.on('error', (err) => {
          console.error(`Error al subir ${file}:`, err);
          reject(err);
        });
      });
    });

    // Esperar a que todas las promesas se resuelvan
    await Promise.all(uploadPromises);

    console.log('Todas las imágenes se subieron correctamente.');
  } catch (err) {
    console.error('Error general:', err);
  } finally {
    client.close();
    console.log('Conexión cerrada.');
  }
}

uploadImages();
