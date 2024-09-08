export type Theme = {
    id: number,
    name: string,
    PrimaryColor:  string,
    SecondColor: string,
    LightColor: string,
    ChatItemColor: string,
}

export const AppTheme: Theme[] = [
    {
        id: 1,
        name: "Green",
        PrimaryColor: "#468585",
        SecondColor: "#50B498",
        LightColor: "#DEF9C4",
        ChatItemColor: '#50b498',
    },
    {
        id: 2,
        name: "Orange",
        PrimaryColor: "#304463",
        SecondColor: "#7D8ABC",
        LightColor: "#FFF8DB",
        ChatItemColor: "#FFC7ED",
    },
    {
        id: 3,
        name: "Brown",
        PrimaryColor: "#973131",
        SecondColor: "#E0A75E",
        LightColor: "#F5E7B2",
        ChatItemColor: "#F9D689",
    }
]