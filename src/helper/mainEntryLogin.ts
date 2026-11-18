import path from "node:path";
import { readFile} from "node:fs/promises";

const publicPath = path.join(__dirname, '..', '..', 'public');
const pathEntryLogin = path.join(__dirname, '..', '..', 'public', 'index.html');
const entryLogin = async (): Promise<unknown> => {
  try {
    const data = await readFile(pathEntryLogin, 'utf-8');
    return data;
  } catch (err) {
    return {
      message: 'File Tidak Ditemukan!',
      status: 404,
      success: false
    }
  }
}

export {entryLogin, publicPath};
