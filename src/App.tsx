import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./types";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

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
      toast.warning(
        "Technology is already in your stack!"
      );
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      tech,
    ]);

    toast.success("Technology added to stack!");
  };

  // Remove one technology from stack
  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    toast.success(
      "Technology removed from stack!"
    );
  };

  // Remove all technologies from stack
  const handleRemoveAll = () => {
    setStack([]);

    toast.success(
      "All technologies removed from stack!"
    );
  };

  // Load technology data
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error(
            "Failed to load technology data"
          );
        }

        const data: Technology[] =
          await response.json();

        setTechnologies(data);
      } catch (error) {
        setError(
          "Something went wrong while loading the data."
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Loading state
  if (loading) {
    return <h2>Loading technologies...</h2>;
  }

  // Error state
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <ToastContainer />

      {/* Temporary heading */}
      <h1>Dev Stack</h1>

      <p>
        Total Technologies: {technologies.length}
      </p>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Technology Cards */}
          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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

          {/* Your Stack */}
          <div className="lg:col-span-1">

            <YourStack
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;