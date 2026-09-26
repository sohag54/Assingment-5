import type { Technology } from "./types";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white">

      {/* Header */}
      <div className="mb-5">

        <h2 className="text-lg font-bold text-gray-900">
          Your Stack
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} technologies selected.`}
        </p>

      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl h-24 flex items-center justify-center text-center">

          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>

        </div>
      ) : (
        <div>

          {/* Selected Technologies */}
          <div className="flex flex-col gap-3">

            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
              >

                {/* Technology Info */}
                <div className="flex items-center gap-3">

                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                  />

                  <div>

                    <h3 className="text-sm font-medium text-gray-900">
                      {tech.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {tech.category}
                    </p>

                  </div>

                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-5 border border-red-200 text-red-500 py-2 rounded-lg text-sm hover:bg-red-50 transition"
          >
            Remove All
          </button>

        </div>
      )}

    </div>
  );
}

export default YourStack;