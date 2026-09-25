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
    <div>
      <h2>Your Stack</h2>

      <p>
        Selected: {stack.length}
      </p>

      {stack.length === 0 ? (
        <p>No technologies added yet.</p>
      ) : (
        <div>
          {stack.map((tech) => (
            <div key={tech.id}>
              <img
                src={tech.icon}
                alt={tech.name}
              />

              <div>
                <h3>{tech.name}</h3>
                <p>{tech.category}</p>
              </div>

              <button
                onClick={() => onRemove(tech.id)}
              >
                ✕
              </button>
            </div>
          ))}

          <button onClick={onRemoveAll}>
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

export default YourStack;