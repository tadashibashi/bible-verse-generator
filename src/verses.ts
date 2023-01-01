export interface Verse {
    text: string;
    ref: string;
}

const version = "NASB1995";

const encouragement: Array<Verse> = [
    {
        text: 
`The Lord is my Shepherd, I shall not want. 
He makes me lie down in green pastures; 
He leads me beside quiet waters. 
He restores my soul; 
He guides me in the paths of righteousness 
For His name's sake.`,
        ref: "Psalm 23: 1-3"
    },
    {
        text:
`Even though I walk through the valley of the shadow of death, 
I fear no evil, for You are with me; 
Your rod and Your staff, they comfort me.`,
        ref: "Psalm 23:4",
    },
    {
        text:
`You prepare a table before me in the presence of my enemies; 
You have anointed my head with oil; 
My cup overflows. 
Surely goodness and lovingkindness will follow me all the days of my life, 
And I will dwell in the house of the Lord forever.`,
        ref: "Psalm 23: 5-6"
    },
    {
        text:
`Do not fret because of evildoers, 
Be not envious toward wrongdoers. 
For they will wither quickly like the grass 
And fade like the green herb. 
Trust in the Lord and do good; 
Dwell in the land and cultivate faithfulness.`,
        ref: "Psalm 37:1-3"
    },
    {
        text:
`Delight yourself in the Lord; 
And He will give you the desires of your heart. 
Commit your way to the Lord, 
Trust also in Him, and He will do it. 
He will bring forth your righteousness as the light 
And your judgment as the noonday.`,
        ref: "Psalm 37:4-6"
    },
    {
        text:
`Rest in the Lord and wait patiently for Him; 
Do not fret because of him who prospers in his way, 
Because of the man who carries out wicked schemes. 
Cease from anger and forsake wrath; 
Do not fret; it leads only to evildoing.`,
        ref: "Psalm 37:7-8"
    },
    {
        text:
`The wicked plots against the righteous 
And gnashes at him with his teeth. 
The Lord laughs at him, 
For He sees his day is coming. 
The wicked have drawn the sword and bent their bow 
To cast down the afflicted and the needy, 
To slay those who are upright in conduct. 
Their sword will enter their own heart, 
And their bows will be broken.`,
        ref: "Psalm 37:12-15"
    },
    {
        text:
`The steps of a man are established by the Lord, 
And He delights in his way. 
When he falls, he will not be hurled headlong, 
Because the Lord is the One who holds his hand.`,
        ref: "Psalm 37:23-24"
    },
    {
        text:
`Depart from evil and do good, 
So you will abide forever. 
For the Lord loves justice 
And does not forsake His godly ones; 
They are preserved forever, 
But the descendents of the wicked will be cut off.`,
        ref: "Psalm 37:27-28"
    },
    {
        text:
`Pray, then, in this way: 

    'Our Father, who is in Heaven, 
    Hallowed be Your name. 
    Your kingdom come. 
    Your will be done, 
    On earth as it is in heaven. 
    Give us this day our daily bread. 
    And forgive us our debts, as we also have forgiven our debtors. 
    And do not lead us into temptation, but deliver us from evil. 
    For Yours is the kingdom and the power and the glory forever. 
    Amen.`,
        ref: "Matthew 6:9-13"
    },
    {
        text:
`Do not store up for yourselves treasures on earth, 
    where moth and rust destroy, 
And where thieves break in and steal. 
But store up for yourselves treasures in heaven, 
    where neither moth nor rust destroys, 
    and where thieves do not break in and steal; 
    for where your treasure is, there your heart will be also.`,
        ref: "Matthew 6:19-21"
    },
    {
        text:
`"Do not worry then, saying, 'What will we eat?' or 'What will we drink? 
    or what will we wear for clothing?' 
For the Gentiles eagerly seek all these things; 
    for your heavenly Father knows that you need all these things. 
But seek first His kingdom and His righteousness, 
        and all these things will be added to you. 
So do not worry about tomorrow; for tomorrow will care for itself. 
Each day has enough trouble of its own"`,
        ref: "Matthew 6: 31-33"
    },
];

const gospel: {
    sin: Array<Verse>,
    salvation: Array<Verse>,
} = {
    sin: 
    [
        {
            text: "For all have sinned and fall short of the glory of God",
            ref: "Romans 3:23"
        },
        {
            text: "For the wrath of God is revealed from heaven against all ungodliness " +
                    "and unrighteousness of men who supress the truth in unrighteousness...",
            ref: "Romans 1:18"
        },
        {
            text: "For since the creation of the world His invisible attributes, " +
                "and divine nature, have been clearly seen, being understood through " +
                "what has been made, so that they are without excuse.",
            ref: "Romans 1:20"
        },
        {
            text: 
`There is none righteous, not even one; 
There is none who understands, 
There is none who seeks for God; 
All have turned aside, together they have become useless; 
there is none who does good, 
there is not even one.`,
            ref: "Romans: 3:10b-12"
        },
        {
            text: "And you were dead in your trespasses and sins, in which you formerly walked " +
                "according to the course of this world, according to the prince of the power of " +
                "the air, of the spirit that is now working in the sons of disobedience",
            ref: "Ephesians 2:1-2"
        }
    ],
    salvation: 
    [
        {
            text: "But now apart from the Law the righteousness of God has been manifested, " +
                "being withnessed by the Law and the Prophets, even the righteousness of God " +
                "through faith in Jesus Christ for all those who believe",
            ref: "Romans 3:21"
        },
        {
            text: "For God so loved the world, that He gave His only begotten Son, " +
                "that whoever believes in Him shall not perish, but have eternal life.",
            ref: "John 3:16"
        },
        {
            text: "But God demonstrates His own love toward us, in that while we were yet sinners, " +
                "Christ died for us.",
            ref: "Romans 5:8"
        },
        {
            text: "He made Him who knew no sin to be sin on our behalf, so that we might become" +
                "the righteousness of God in Him",
            ref: "2 Corinthians 5:21"
        },
        {
            text: "For the wages of sin is death, but the free gift of God is eternal life " +
                "in Christ Jesus our Lord",
            ref: "Romans 6:23" 
        },
        {
            text: "that if you confess with your mouth Jesus as Lord, and believe in your heart that " +
                "God raised Him from the dead, you will be saved",
            ref: "Romans 10:9"
        },
        {
            text: "But God, being rich in mercy, because of His great love with which He loved us, " +
                "even when we were dead in our transgressions, made us alive together with Christ (by " +
                "grace you have been saved), and raised us up with Him, and seated us with Him in the " +
                "heavenly places in Christ Jesus, so that in the ages to come He might show the surpassing " +
                "riches of His grace in kindness toward us in Christ Jesus.",
            ref: "Ephesians 2:4-7"
        },
        {
            text: "For by grace you have been saved through faith; and that not of yourselves, it is the " +
                "gift of God; not as a result of works, so that no one may boast.",
            ref: "Ephesians 2:8-9"
        },
        {
            text: 
`Surely our griefs He himself bore, 
And our sorrows He carried; 
Yet we esteemed Him stricken, 
Smitten of God, and afflicted. 
But He was pierced through for our transgressions, 
He was crushed for our iniquities; 
The chastening for our well-being fell upon Him, 
And by His scourging we are healed. 
All of us like sheep have gone astray, 
Each of us has turned to his own way; 
But the Lord has caused the inquity of us all 
To fall on Him.`,
            ref: "Isaiah 53:4-6"
        },
        {
            text:
`He was oppressed and He was afflicted, 
Yet He did not open His mouth; 
Like a lamb that is led to slaughter, 
And like a sheep that is silent before its shearers, 
So He did not open His mouth. 
By oppression and judgment He was taken away; 
And as for His generation, who considered 
that He was cut off out of the land of the living 
For the transgression of my people, to whom the stroke was due?`,
            ref: "Isaiah 53:7-8"
        },
        {
            text:
`But the Lord was pleased to crush Him, putting Him to grief; 
If He would render Himself as a guilt offering, 
He will see His offspring, 
He will prolong His days, 
And the good pleasure of the Lord will prosper in His hand. 
As a result of the anguish of His soul, 
He will see it and be satisfied; 
By His knowledge the Righteous One, 
My Servant, will justify the many, 
As He will bear their iniquities.`,
            ref: "Isaiah 53:10-11"
        },
        {
            text:
`Therefore, I will allot Him a portion with the great, 
And He will divide the booty with the strong; 
Because He poured out Himself to death, 
And was numbered with the transgressors; 
Yet He Himself bore the sin of many, 
And interceded for the transgressors.`,
            ref: "Isaiah 53:12"
        }
    ]
    
}

/**
 * 
 * @param outOf integer
 * @returns number between 0 and outOf-1, inclusive
 */
function pickRandom(outOf: number) {
    return Math.floor(Math.random() * Math.floor(outOf));
}

export function getRandomVerse() {
    const type = pickRandom(3);
    let verse: Verse = null;
    let typeStr = "";
    switch(type) {
        case 0: {
            const index = pickRandom(encouragement.length);
            verse = encouragement[index];
            typeStr = "encouragement"
            break;
        }
        case 1: {
            const index = pickRandom(gospel.sin.length);
            verse = gospel.sin[index];
            typeStr = "gospel,sin"
            break;
        }
        case 2: {
            const index = pickRandom(gospel.salvation.length);
            verse = gospel.salvation[index];
            typeStr = "gospel,salvation"
            break;
        }

        default:
            console.error("Internal error with function getRandomVerse. Type index out of bounds");
            return null;
    }

    return {
        ref: verse.ref,
        text: verse.text,
        type: typeStr,
        version
    };
}