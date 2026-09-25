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
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;