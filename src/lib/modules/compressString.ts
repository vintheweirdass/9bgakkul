// from comment https://gist.github.com/Explosion-Scratch/357c2eebd8254f8ea5548b0e6ac7a61b?permalink_comment_id=4598581#gistcomment-4598581
import lz from "lz-string"
export const compress = (
    str: string,
  ): string => {
    return lz.compress(str)
  }
  
  export const decompress = (
    str: string,
  ): string => {
    return lz.decompress(str)
  }
