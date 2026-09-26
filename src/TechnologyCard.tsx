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
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white">

      {/* Icon and Badge */}
      <div className="flex items-center justify-between mb-4">

        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 object-contain"
        />

        <span className="bg-blue-50 text-blue-500 px-3 py-1 rounded-full text-xs">
          {tech.badge}
        </span>

      </div>

      {/* Name */}
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        {tech.name}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed min-h-[42px] mb-4">
        {tech.description}
      </p>

      {/* Category, Difficulty and Rating */}
      <div className="flex items-center justify-between mb-4">

        <div className="flex items-center gap-2">

          <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
            {tech.category}
          </span>

          <span className="text-xs text-gray-500">
            {tech.difficulty}
          </span>

        </div>

        <span className="text-sm text-gray-600">
          <span className="text-yellow-400">★</span>{" "}
          {tech.rating}
        </span>

      </div>

      {/* Add Button */}
      <button
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`w-full py-2.5 rounded-lg text-sm font-medium ${
          isAdded
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-950 text-white hover:bg-gray-800"
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