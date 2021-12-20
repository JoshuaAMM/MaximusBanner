import fs from "fs";

function readFile(path: string) {
  try {
    const data = fs.readFileSync(path, "utf8");

    return data;
  } catch (error: any) {
    throw new Error("error reading file " + error);
  }
}

export default readFile;