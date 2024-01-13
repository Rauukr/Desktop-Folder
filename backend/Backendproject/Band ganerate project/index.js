import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];
  res.render("index.ejs", {
    adjective: randomAdj,
    noun: randomNoun,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
const adj = [
    "abandoned",
    "able",
    "absolute",
    "adorable",
    "adventurous",
    "academic",
    "acceptable",
    "acclaimed",
    "accomplished",
    "accurate",
    "aching",
    "acidic",
    "acrobatic",
    "active",
    "actual",
    "adept",
    "admirable",
    "admired",
    "adolescent",
    "adorable",
    "adored",
    "advanced",
    "afraid",
    "affectionate",
    "aged",
    "aggravating",
    "aggressive",
    "agile",
    "agitated",
    "agonizing",
    "agreeable",
    "ajar",
    "alarmed",
    "alarming",
    "alert",
    "alienated",
    "alive",
    "all",
    "altruistic",
    "amazing",
    "ambitious",
    "ample",
    "amused",
    "amusing",
    "anchored",
    "ancient",
    "angelic",
    "angry",
    "anguished",
    "animated",
    "annual",
    "another",
    "antique",
    "anxious",
    "any",
    "apprehensive",
    "appropriate",
    "apt",
    "arctic",
    "arid",
    "aromatic",
    "artistic",
    "ashamed",
    "assured",
    "astonishing",
    "athletic",
    "attached",
    "attentive",
    "attractive",
    "austere",
    "authentic",
    "authorized",
    "automatic",
    "avaricious",
    "average",
    "aware",
    "awesome",
    "awful",
    "awkward",
    "babyish",
    "bad",
    "back",
    "baggy",
    "bare",
    "barren",
    "basic",
    "beautiful",
    "belated",
    "beloved",
    "beneficial",
    "better",
    "best",
    "bewitched",
    "big",
    "big-hearted",
    "biodegradable",
    "bite-sized",
    "bitter",
    "black",
    "black-and-white",
    "bland",
    "blank",
    "blaring",
    "bleak",
    "blind",
    "blissful",
    "blond",
    "blue",
    "blushing",
    "bogus",
    "boiling",
    "bold",
    "bony",
    "boring",
    "bossy",
    "both",
    "bouncy",
    "bountiful",
    "bowed",
    "brave",
    "breakable",
    "brief",
    "bright",
    "brilliant",
    "brisk",
    "broken",
    "bronze",
    "brown",
    "bruised",
    "bubbly",
    "bulky",
    "bumpy",
    "buoyant",
    "burdensome",
    "burly",
    "bustling",
    "busy",
    "buttery",
    "buzzing",
    "calculating",
    "calm",
    "candid",
    "canine",
    "capital",
    "carefree",
    "careful",
    "careless",
    "caring",
    "cautious",
    "cavernous",
    "celebrated",
    "charming",
    "cheap",
    "cheerful",
    "cheery",
    "chief",
    "chilly",
    "chubby",
    "circular",
    "classic",
    "clean",
    "clear",
    "clear-cut",
    "clever",
    "close",
];

const noun = [
    "aardvark",
    "abacus",
    "abbey",
    "abdomen",
    "abolishment",
    "abroad",
    "abyssinian",
    "accelerant",
    "accelerator",
    "accompanist",
    "accordion",
    "account",
    "accountant",
    "achieve",
    "achiever",
    "acid",
    "acknowledgment",
    "acoustic",
    "acoustics",
    "acrylic",
    "act",
    "action",
    "active",
    "activity",
    "actor",
    "actress",
    "acupuncture",
    "adapter",
    "addiction",
    "addition",
    "address",
    "adjustment",
    "administration",
    "adrenalin",
    "adult",
    "advancement",
    "advantage",
    "advertisement",
    "advertising",
    "advice",
    "affair",
    "affect",
    "afghanistan",
    "africa",
    "aftermath",
    "afternoon",
    "aftershave",
    "aftershock",
    "afterthought",
    "age",
    "agency",
    "agenda",
    "agent",
    "aglet",
    "agreement",
    "air",
    "airbag",
    "airbus",
    "airfare",
    "airforce",
    "airline",
    "airmail",
    "airplane",
    "airport",
    "airship",
    "alarm",
    "alb",
    "albatross",
    "alcohol",
    "alcove",
    "alder",
    "algebra",
    "algeria",
    "alibi",
    "allergist",
    "alley",
    "alligator",
    "alloy",
    "almanac",
    "almond",
    "alpaca",
    "alpenglow",
    "alpenhorn",
    "alpha",
    "alphabet",
    "alternative",
    "altitude",
    "alto",
    "aluminium",
    "aluminum",
    "ambassador",
    "ambulance",
    "amendment",
    "america",
    "amount",
    "amusement",
    "anagram",
    "analgesia",
    "analog",
    "analysis",
    "analyst",
    "anatomy",
    "anesthesiology",
    "anethesiologist",
    "anger",
    "angiosperm",
    "angle",
    "angora",
    "angstrom",
    "anguish",
    "animal",
    "anime",
    "ankle",
    "anklet",
    "annual",
    "anorak",
    "answer",
    "ant",
    "antarctica",
    "anteater",
    "antechamber",
    "antelope",
    "anthony",
    "anthropology",
    "antler",
    "anybody",
    "anything",
    "anywhere",
    "apartment",
    "ape",
    "aperitif",
    "apology",
    "apparatus",
    "apparel",
    "appeal",
    "appendix",
    "apple",
    "applewood",
    "appliance",
    "approval",
    "april",
    "apron",
    "apse",
    "aquarius",
    "aquifer",
    "arch",
    "archaeology",
    "archeology",
    "archer",
    "architect",
    "architecture",
    "arch-rival",
    "area",
    "argentina",
    "argument",
    "aries",
    "arithmetic",
    "arm",
    "armadillo",
    "armament",
    "armchair",
    "armenian",
    "armoire",
    "armor",
    "arm-rest",
    "army",
    "arrival",
    "arrow",
    "art",
    "artichoke",
    "artificer",
    "ascot",
    "ash",
    "ashram",
    "ashtray",
    "asia",
    "asparagus",
    "asphalt",
    "assignment",
    "assistance",
    "associate",
    "association",
    "asterisk",
    "astrakhan",
    "astrolabe",
    "astrologer",
    "astrology",
    "astronomy",
    "atelier",
    "athelete",
    "athlete",
    "atm",
    "atmosphere",
    "atom",
    "atrium",
    "attachment",
    "attack",
    "attempt",
    "attendant",
    "attention",
    "attenuation",
    "attic",
    "attitude",
    "attorney",
    "attraction",
    "audience",
    "auditorium",
    "august",
    "aunt",
    "australia",
    "australian",
    "author",
    "authorisation",
    "authority",
    "authorization",
    "automaton",
    "avalanche",
    "avenue",
    "average",
    "azimuth",
    "babe",
    "babies",
    "baboon",
    "babushka",
    "baby",
    "back",
    "backbone",
    "backdrop",
    "backpack",
    "bacon",
    "bad",
    "badge",
    "badger",
    "bafflement",
    "bag",
    "bagel",
    "bagpipe",
];