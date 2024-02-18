import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "polygon");

(async () => {
    const drop = await sdk.getContract(
      "0x5E743d0b65b6dB8Ee666d58f6cc978Eeac5b7547",
      "New test Edition Drop"
    );
  
    try {
      await drop.createBatch([
        "https://my-json-server.typicode.com/vijema/Astery-Expeditions/expeditions/0",
        "https://my-json-server.typicode.com/vijema/Astery-Expeditions/expeditions/1",
        "https://my-json-server.typicode.com/vijema/Astery-Expeditions/expeditions/2",
      ]);
      console.log("uploaded all nfts");
    } catch (error) {
      console.log(error);
    }
  })();