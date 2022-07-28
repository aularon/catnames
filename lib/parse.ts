import sarref from "./sarref.ts";

function processFileContents(data: string) {
  let template = "";
  return data.split("\n")
    .map((line) => line.trim())
    .filter((line) => line)
    .map((line) =>
      line.endsWith(":")
        ? ((template = line.substring(0, line.length - 1)) && null)
        : template
        ? sarref(template, line)
        : line
    )
    .filter((line) => line);
}
const parse = async (rootDir: string): Promise<Record<string, string[]>> => {
  const fnames = [];
  const promises = [];
  for await (const dirEntry of Deno.readDir(rootDir)) {
    if (!dirEntry.name.endsWith(".txt")) continue;
    fnames.push(dirEntry.name);
    promises.push(Deno.readTextFile(rootDir + "/" + dirEntry.name));
  }

  const parsedFiles = await Promise.all(promises).then((files) =>
    files.map(processFileContents)
  );
  return Object.fromEntries(
    fnames.map((fname, i) => [fname.split(".").shift(), parsedFiles[i]]),
  );
};
export default parse;
