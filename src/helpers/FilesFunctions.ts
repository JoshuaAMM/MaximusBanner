import fs from 'fs';

class File {

    public static readFile(path: string): string {
        try {
            const data = fs.readFileSync(path, 'utf8');
            return data;
        } catch (error: any) {
            throw new Error('error reading file ' + error);
        }
    }

    public static writeFile<T extends object>(data: T, path: string) {
      const dataToSave: string = JSON.stringify(data);
      
      try {
        fs.writeFileSync(path, dataToSave);
      } catch (error: any) {
        throw new Error(error);
      }
      
    }

}

export default File;

// nodemon --ignore './src/database/*.json'