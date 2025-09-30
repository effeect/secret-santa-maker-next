import SecretSanta from "./secretSanta/secretSanta";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
      <>
        <Navbar />
        <SecretSanta />
        <Footer />
      </>
  );
}
