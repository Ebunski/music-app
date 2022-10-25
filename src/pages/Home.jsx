import Hero from "../components/Hero";
import NewReleases from "../components/NewReleases";
import YourArea from "../components/YourArea";

export default function Home() {
  return (
    <main className="md:mt-20 md:ml-20  md:mr-12">
      <Hero />
      <NewReleases />
      <YourArea />
    </main>
  );
}
