import Arka from "./assets/friendsPfp/instagram/arkanantalangit.jpg"
import { red, orange, lightGreen, pink, lightBlue, blue } from '@mui/material/colors';
const tuple:<T extends string[]>(...args: T) => typeof args = <T extends string[]>(...args: T) => args;
export const badges = tuple('Owner', 'Chief of Class', 'Vice of Class', 'Normal student', 'is-not.cool Admin', 'External (not from our school)');
export const social = tuple('discord', 'instagram', 'spotify', 'website', 'github', 'email')
export type Badges = typeof badges[number];
export type BadgesColor = Record<Badges, string>
export const badgesColor:BadgesColor = {
  "Owner":red[800],
  "External (not from our school)":orange[800],
  "Chief of Class":lightGreen[800],
  "Vice of Class":pink[800],
  "is-not.cool Admin":lightBlue[800],
  "Normal student":blue[800]
}
export type FriendsList = Record<string, {
    badges: Badges[];
    avatar?:string;
    social?:{
      discord?:string[];
      instagram?:string[];
      spotify?:string[];
      website?:string[];
      github?:string[];
      email?:string[];
    }
    ownsDomain?:string[];
    description?:string;
}>;

export const friends:FriendsList =  {
    cupglassdev:{
      badges:["Owner", "Normal student"],
      avatar:"https://avatars.githubusercontent.com/u/70825723?v=4",
      social:{discord:["999863217557880842"], instagram:["cupglassdev"],email:["abuse@cupglass.is-a.dev"]},
      ownsDomain:["@"],
      description:"A dumbass person who likes to destroy a Pi"
    },
    "arkananta.langit":{
      badges:["Chief of Class"],
      description:"A great captain. Supports palestine ftw",
      avatar:Arka,
      social:{
      instagram:["arkananta.langit"]
      }
    },
    "eryquicc":{
      badges:["External (not from our school)"],
      description:"cupglassdev's friend, a fucking cool dude",
      social:{
        github:["Eryquicc"],
      instagram:["yaboyquicc"],
      website:["eryquicc.is-a.dev"],
      spotify:["31d2kb6hsopz7rfm7fdvfoyk7izu"],
      discord:["629939924589608961"]
      }
    },
    "hroiene_":{
      badges:["Normal student"],
      description:"just a chill guy tbh",
      social:{
        instagram:["hroiene_", "gdsnmnstrs", "jographicss"]
      }
    },
    "romanptic":{
      badges:["Normal student"],
      social:{
        instagram:["romanptic"]
      }
    },
    "yunnaiurs":{
      badges:["Normal student"],
      social:{
        instagram:["yunnaiurs"]
      }
    },
    p_t_r_i_t_n_d_i_l_i_a:{
      badges:["Normal student"],
      social:{
        instagram:["p_t_r_i_t_n_d_i_l_i_a"]
      }
    },
}