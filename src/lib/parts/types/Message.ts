//valibot
import * as v from "valibot"
export const spotifySongRegexHtml = "^(http(s)?:\\/\\/open.spotify.com\\/track\\/[0-9a-zA-Z]+(\\?[\\w\\-]+=[\\w\\-]+(&[\\w\\-]+=[\\w\\-]+)*)?)$"
export const spotifySongRegex = new RegExp(spotifySongRegexHtml)
export const spotifySongIdRegex = /[\w]+/
// svelte-ignore state_referenced_locally
export const OptionSchema = v.objectAsync({
    name:v.pipeAsync(v.string('The name must be defined'), v.minLength(1, "The name's length need at least 1"), v.maxLength(50, "The name's length has exceeded more than 50")),
    spotifySong:v.undefinedableAsync(v.pipeAsync(v.string(), v.regex(spotifySongRegex, 'The spotify song link is badly formatted'))),
    spotifySongId:v.undefinedableAsync(v.pipeAsync(v.string(), v.regex(spotifySongIdRegex, 'The spotify song ID is badly formatted'))),
    description:v.pipeAsync(v.string('The description must be defined'), v.minLength(1, "The description's length need at least 1"), v.maxLength(1500, "The description's length has exceeded more than 1500"))
})

// internal option (only used on .svelte files)
export type Option = { name: string, description: string, spotifySong?:string, spotifySongId?:string, editorMode?:boolean}
