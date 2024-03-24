import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";



config();


const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "polygon", {
  secretKey: process.env.API_KEY
});

(async () => {
    const drop = await sdk.getContract(
      // "0xf0Cd04492E937734a8d2CD1022824f90F5Ad43d6", // my-json-server
      "0x5E743d0b65b6dB8Ee666d58f6cc978Eeac5b7547", //Npoint
      "edition-drop"
    );
  
    try {
      await drop.createBatch([
              "https://api.npoint.io/a42017eb51596187e46e/expeditions/13",
              "https://api.npoint.io/a42017eb51596187e46e/expeditions/14"

              // "https://my-json-server.typicode.com/vijema/Astery-Expeditions/expeditions/2"
              // "https://api.npoint.io/a42017eb51596187e46e/expeditions/8"

              // 1) Меняем индекс в ссылке выше
              // 2) Добавляем новую мету в db.json и коммитим - ждем апдейта по ссылке
              // 3) Запускаем node scripts/upload-nfts.mjs 
              // https://www.npoint.io/docs/a42017eb51596187e46e
              

      ]);
      console.log("uploaded all nfts");
    } catch (error) {
      console.log(error);
    }
  })();

