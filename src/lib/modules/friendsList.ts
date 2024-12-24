const tuple: <T extends string[]>(...args: T) => typeof args = <T extends string[]>(...args: T) => args;
export const social = tuple('discord', 'instagram', 'spotify', 'website', 'github', 'email')
export type Badges = keyof typeof badgesColor;
export type BadgesColor = Record<Badges, string>
export const badgesColor = {
    "Owner": "#991b1b",
    "External (not from our school)": "#c2410c",
    "Chief of Class": "#3f6212",
    "Vice of Class": "#9d174d",
    "Normal student": "#1e40af"
}
export interface FriendsInfo {
    badges: Badges[];
    social?: {
        discord?: string[];
        instagram?: string[];
        spotify?: string[];
        website?: string[];
        github?: string[];
        email?: string[];
    }
    ownsDomain?: string[];
    description?: string;
}
export type FriendsList = Record<string, FriendsInfo>;
export const providers = {
    spotify:"https://open.spotify.com/user/",
    discord:"https://discord.com/users/",
    instagram:"https://instagram.com/",
    github:"https://github.com/",
    website:"https://",
    email:"mailto:",
}
export const friendsList = {
    vintheweirdass: {
        badges: ["Owner", "Normal student"],
        social: { discord: ["999863217557880842"], instagram: ["vintheweirdass"], email: ["abuse@vintheweirdass.is-a.dev"] },
        ownsDomain: ["@"],
        description: "A dumbass person who likes to destroy a Pi"
    },
    "arkananta.langit": {
        badges: ["Chief of Class"],
        description: "A great captain. Supports palestine ftw",
        social: {
            instagram: ["arkananta.langit"]
        }
    },
    // "eryquicc": {
    //     badges: ["External (not from our school)"],
    //     description: "vintheweirdass' friend, a fucking cool dude",
    //     social: {
    //         github: ["Eryquicc"],
    //         instagram: ["yaboyquicc"],
    //         website: ["eryquicc.is-a.dev"],
    //         spotify: ["31d2kb6hsopz7rfm7fdvfoyk7izu"],
    //         discord: ["629939924589608961"]
    //     }
    // },
    "hroiene_": {
        badges: ["Normal student"],
        description: "just a chill guy tbh",
        social: {
            instagram: ["hroiene_", "gdsnmnstrs", "jographicss"]
        }
    },
    "romanptic": {
        badges: ["Normal student"],
        social: {
            instagram: ["romanptic"]
        }
    },
    "yunnaiurs": {
        badges: ["Normal student"],
        social: {
            instagram: ["yunnaiurs"]
        }
    },
    p_t_r_i_t_n_d_i_l_i_a: {
        badges: ["Normal student"],
        social: {
            instagram: ["p_t_r_i_t_n_d_i_l_i_a"]
        }
    },
} satisfies FriendsList
export const friendsListInfer = friendsList as {[k:string]:FriendsInfo}