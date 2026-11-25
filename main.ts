#!/usr/bin/env node
// Keyboard Review: prints the one line my cat committed during a sprint review.

const LINE =
  "My cat walked across the keyboard once and shipped a better commit than I did all sprint.";

const USAGE = `Usage: node main.ts [--shout] [--help]

Print the keyboard-review line.

Options:
  --shout  Print the line in uppercase.
  --help   Show this help and exit.
`;

const args = new Set(process.argv.slice(2));

function hasFlag(flag: string): boolean {
  return args.has(flag);
}

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function showHelp(): void {
  console.error(USAGE.trimEnd());
  process.exitCode = 0;
}

function main(): void {
  if (hasFlag("--help")) {
    showHelp();
    return;
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
