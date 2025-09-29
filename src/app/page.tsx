import Image from "next/image";
import SecretSanta from "./secretSanta/secretSanta";
import Footer from "./components/footer";

export default function Home() {
  return (
      <>
        <SecretSanta />
        <Footer />
      </>
  );
}
