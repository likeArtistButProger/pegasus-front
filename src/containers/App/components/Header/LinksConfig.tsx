import { Option } from './components/LinkWithDropdown';

type LinkConfig = {
    title: string;
    href?: string;
    additionalLinks?: Option[]
}

const defaultStyle = {
    marginLeft: "20px",
    padding: "10px 10px 10px 0",
    whiteSpace: "nowrap",
    fontSize: 14,
    lineHeight: "21px",
    color: "black"
}

const inactiveStyle = {
    color: "#888888"
}

const makeInactiveOption = (title?: string) => ({
    icon: "/svg/coming_soon.svg",
    // @ts-ignore
    content: <div style={{...defaultStyle, ...inactiveStyle}}>{title ? `${title} (coming soon)` : "Coming soon"}</div>
})

const Links: LinkConfig[] = [
    {
        title: "PGC v2 BEP-20 Contracts",
        additionalLinks: [
            {
                icon: "/images/logo_32.png",
                iconSize: [28, 28],
                href: "https://bscscan.com/token/0xaafbd6940f54bb86bdbc0323b7b1fd269a69fc76#tokenInfo",
                content: 
                // @ts-ignore
                    <div style={defaultStyle}>
                        <span style={{ fontWeight: 700 }}>PegasCoin(PGC)</span>
                        &nbsp;
                        <span>0xaafbd6940f54bb86bdbc0323b7b1fd269a69fc76</span>
                    </div>
            },
            {
                icon: "/images/logo_32.png",
                iconSize: [28, 28],
                href: "https://bscscan.com/address/0xdbc85cdfaebab4c25276b3196d7cd78b3ddcbe08#tokenInfo",
                content: 
                // @ts-ignore
                    <div style={defaultStyle}>
                        <span style={{ fontWeight: 700 }}>PegasCoin Swap Voucher (PGSV)</span>
                        &nbsp;
                        <span>0xdbc85cdfaebab4c25276b3196d7cd78b3ddcbe08</span>
                    </div>
            }
        ]
    },
    {
        title: "Buy",
        additionalLinks: [
            {
                icon: "/svg/trading.svg",
                href: "https://app.stex.com/en/trading/pair/BTC/PGC/1D",
                // @ts-ignore
                content: <div style={defaultStyle}>PGC v1</div>
            },
            {
                ...makeInactiveOption("PGC v2")
            }
        ]
    },
    {
        title: "Staking",
        additionalLinks: [
            makeInactiveOption()
        ]
    },
    {
        title: "Affiliate",
        additionalLinks: [
            makeInactiveOption()
        ]
    },
    {
        title: "Projects",
        additionalLinks: [
            {
                icon: "/images/hashrent_32.png",
                iconSize: [28, 28],
                href: "https://hashrent.pro/",
                // @ts-ignore
                content: <div style={defaultStyle}>Mining Bonus</div>
            },
            makeInactiveOption("IDO"),
            makeInactiveOption("TokenCreate"),
            {
                icon: "/svg/coming_soon.svg",
                href: "/crafting",
                isRoute: true,
                // @ts-ignore
                content: <div style={defaultStyle}>Crafting</div>
            },
            // makeInactiveOption("Crafting"),
            makeInactiveOption("Lottery"),
            makeInactiveOption("Tasks"),
            makeInactiveOption("NFT"),
            makeInactiveOption("Bridge"),
            makeInactiveOption("Games"),
        ]
    },
    {
        title: "Pegascoin v1 (old)",
        additionalLinks: [
            {
                icon: "/svg/home.svg",
                href: "https://pegascoin.com/index_old.html",
                // @ts-ignore
                content: <div style={defaultStyle}>Home Page</div>
            },
            {
                icon: "/svg/chart.svg",
                href: "http://netstats.pegascoin.com/",
                // @ts-ignore
                content: <div style={defaultStyle}>Network Stats</div>
            },
            {
                icon: "/svg/loopa.svg",
                href: "https://explorer.pegascoin.com/",
                // @ts-ignore
                content: <div style={defaultStyle}>Explorer</div>
            },
            {
                icon: "/svg/wallet.svg",
                href: "https://wallet.pegascoin.com/",
                // @ts-ignore
                content: <div style={defaultStyle}>Web Wallet</div>
            },
        ],
    },
    {
        title: "Join",
        additionalLinks: [
            {
                icon: "/svg/discord.svg",
                href: "https://discord.com/invite/KYXDgqV",
                // @ts-ignore
                content: <div style={defaultStyle}>Discord</div>
            },
            {
                icon: "/svg/twitter.svg",
                href: "https://twitter.com/HashrentPro",
                // @ts-ignore
                content: <div style={defaultStyle}>Twitter</div>
            },
            {
                icon: "/svg/twitter_old.svg",
                href: "https://twitter.com/Pegascoin",
                // @ts-ignore
                content: <div style={defaultStyle}>Twitter (old)</div>
            },
            {
                icon: "/svg/telegram.svg",
                href: "https://t.me/pegasco",
                // @ts-ignore
                content: <div style={defaultStyle}>Telegram</div>
            },
            {
                icon: "/images/coingecko.png",
                iconSize: [28, 28],
                href: "https://www.coingecko.com/en/coins/pegascoin",
                // @ts-ignore
                content: <div style={defaultStyle}>Coingecko</div>
            },
        ]
    }
]

export { Links }