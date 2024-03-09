import Image from "next/image";
import UploadImage from "./components/UploadImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hola como tas?</h1>
      <UploadImage/>
    </main>
  );
}
