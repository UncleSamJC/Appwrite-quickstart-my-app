import { Account, Client, Databases } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6815b5680031b38cdc62") // Replace with your project ID
  // .setPlatform('com.example.idea-tracker');


export const account = new Account(client);
export const databases = new Databases(client);
