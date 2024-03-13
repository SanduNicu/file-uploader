import { ReactElement } from "react";

function Welcome(): ReactElement {
  return (
    <main className="relative isolate min-h-full">
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
          Hello there
        </h1>
      </div>
    </main>
  );
}

export default Welcome;
