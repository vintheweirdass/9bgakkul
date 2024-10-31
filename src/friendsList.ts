const tuple = <T extends string[]>(...args: T) => args;
export const badges = tuple('Owner', 'External (not from our school)', 'is-not.cool Admin', 'Chief of Class', 'Vice of Class');
export type Badges = typeof badges[number];
export type BadgesColor = Record<Badges, string>
export const badgesColor:BadgesColor = {
  "Owner":"red",
  "External (not from our school)":"orange",
  "Chief of Class":"lightgreen",
  "Vice of Class":"pink",
  "is-not.cool Admin":"skyblue"
}
export type FriendsList = Record<string, {
    badges: Badges|undefined;
    avatar:string;
}>;

export const friends:FriendsList =  {
    cupglassdev:{
      badges:"Owner",
      avatar:"https://avatars.githubusercontent.com/u/70825723?v=4"
    }
}