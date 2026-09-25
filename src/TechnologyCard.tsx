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
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm">

      {/* Icon and Badge */}
      <div className="flex items-center justify-between mb-4">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12"
        />

        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold mb-2">
        {tech.name}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        {tech.description}
      </p>

      {/* Category and Difficulty */}
      <div className="flex gap-2 mb-4">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          {tech.category}
        </span>

        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          {tech.difficulty}
        </span>
      </div>

      {/* Rating */}
      <p className="mb-4">
        <span className="text-yellow-500">★</span>{" "}
        {tech.rating}
      </p>

      {/* Add Button */}
      <button
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`w-full py-2 rounded-lg font-medium ${
          isAdded
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isAdded
          ? "✓ Added to Stack"
          : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;