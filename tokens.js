// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1368634687647514709",
        serverId: "1368634677220347915",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 10, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
