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
    <div className="border border-red-200 rounded-xl p-5 shadow-sm bg-white">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <h2 className="text-lg font-bold">
          Your Stack
        </h2>

        <span className="text-sm text-gray-500">
          {stack.length} selected
        </span>

      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">

          <p className="text-gray-500 text-sm">
            No technologies added yet.
          </p>

          <p className="text-gray-400 text-xs mt-2">
            Add technologies to build your stack.
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
                    <h3 className="text-sm font-medium">
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
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>

          {/* Remove All */}
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