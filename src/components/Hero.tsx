import heroImage from "../assets/assets/banner-stack.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        {/* Left Side */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your Ideal
            <br />

            <span className="text-brand-gradient">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-600 mt-5 max-w-xl leading-relaxed">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">

            <button className="brand-gradient text-white px-5 py-2.5 rounded-lg font-medium">
              Explore Technologies
            </button>

            <button className="border border-gray-200 px-6 py-2.5 rounded-lg font-medium">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <img
            src={heroImage}
            alt="Developer stack illustration"
            className="w-full max-w-md"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;