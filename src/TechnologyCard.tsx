import type { Technology } from "./types";

interface TechnologyCardProps {
  tech: Technology;
  stack: Technology[];
  onAdd: (tech: Technology) => void;
}

function TechnologyCard({
  tech,
  stack,
  onAdd,
}: TechnologyCardProps) {
  const isAdded = stack.some(
    (item) => item.id === tech.id
  );

  return (
    <div>
      <img src={tech.icon} alt={tech.name} />

      <h2>{tech.name}</h2>

      <p>{tech.description}</p>

      <p>{tech.category}</p>

      <p>{tech.difficulty}</p>

      <p>⭐ {tech.rating}</p>

      <button
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`px-4 py-2 rounded-lg font-medium ${
          isAdded
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;