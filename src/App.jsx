import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Thumbnail } from "./components/Thumbnail";
import data from "./data";

export function App() {
  const thumbnailElements = data.map((thumbnail) => {
    return <Thumbnail key={thumbnail.id} thumbnail={thumbnail} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="thumbnail-row">{thumbnailElements}</div>
    </>
  );
}
