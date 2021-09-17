type NewsStage = "complete" | "planning" | "progress";

type News = {
    planningDate: string;
    description: string;
    stage: NewsStage;
}

export const firstNewsBlock: News[] = [
    {
        planningDate: "2Q21",
        stage: "complete",
        description: "Create and verify the Binance Smart Chain Contract (BEP-20) for Pegascoin v2"
    },
    {
        planningDate: "2Q21",
        stage: "complete",
        description: "Start of the 1st stage swap of Pegascoin v1 to Pegascoin v2 with bonus program"
    },
    {
        planningDate: "3Q21",
        stage: "progress",
        description: `Pegascoin v2 pre-sale with "Special Benefit Offer"`
    },
    {
        planningDate: "3Q21",
        stage: "progress",
        description: "Mining bonus program upgrade"
    },
    {
        planningDate: "3Q21",
        stage: "planning",
        description: "Start of the 2st stage swap of Pegascoin v1 to Pegascoin v2 on STEX Exchange"
    },
    {
        planningDate: "3Q21",
        stage: "planning",
        description: "Affiliate program"
    },
    {
        planningDate: "3Q21",
        stage: "planning",
        description: "Staking"
    }
]

export const secondNewsBlock: News[] = [
    {
        planningDate: "3Q21",
        stage: "planning",
        description: "IDO"
    },
    {
        planningDate: "4Q21",
        stage: "planning",
        description: "TokenCreate service"
    },
    {
        planningDate: "4Q21",
        stage: "planning",
        description: "Crafting"
    },
    {
        planningDate: "1Q22",
        stage: "planning",
        description: "PegasLottery"
    },
    {
        planningDate: "1Q22",
        stage: "planning",
        description: "PegasTasks"
    },
    {
        planningDate: "1Q22",
        stage: "planning",
        description: "PegasNFT"
    },
    {
        planningDate: "2Q22",
        stage: "planning",
        description: "PegasSwap"
    },
    {
        planningDate: "2Q22",
        stage: "planning",
        description: "Pegascoin CrossChain and Bridge"
    },
    {
        planningDate: "2Q22",
        stage: "planning",
        description: "PegasGames"
    }
]