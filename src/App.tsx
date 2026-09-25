import { useEffect, useState } from "react";
import type { Technology } from "./types";
import TechnologyCard from "./TechnologyCard";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Add technology to stack
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some(
      (item) => item.id === tech.id
    );

    if (isAlreadyAdded) {
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      tech,
    ]);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        setError("Something went wrong while loading the data.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <h2>Loading technologies...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
  <div>
    <h1>Dev Stack</h1>

    <p>Total Technologies: {technologies.length}</p>

    <div>
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          stack={stack}
          onAdd={handleAddToStack}
        />
      ))}
    </div>
  </div>
);
}

export default App;