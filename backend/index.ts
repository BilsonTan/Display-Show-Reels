import dotenv from "dotenv";
  import express, { Express, Request, Response } from "express";
  import cors from "cors";

  dotenv.config();

  const app: Express = express();

  app.use(express.json());
  app.use(cors());

  app.get('/select-clips', (req: Request, res: Response) => {
    res.send([
      {
        "name": "Bud Light",
        "description": "A factory is working on the new Bud Light Platinum.",
        "standard": "PAL",
        "definition": "SD",
        "startTimecode": "00:00:00:00",
        "endTimecode": "00:00:30:12"
      },
      {
        "name": "Audi",
        "description": "A group of vampires are having a party in the woods. The vampire in charge of drinks (blood types) arrives in his Audi. The bright lights of the car kills   all of the vampires, with him wondering where everyone went afterwards.",
        "standard": "PAL",
        "definition": "SD",
        "startTimecode": "00:00:00:00",
        "endTimecode": "00:01:30:00"
      },
      {
        "name": "Chrysler",
        "description": "Clint Eastwood recounts how the automotive industry survived the Great Recession.",
        "standard": "PAL",
        "definition": "SD",
        "startTimecode": "00:00:00:00",
        "endTimecode": "00:00:10:14"
      },
      {
        "name": "Fiat",
        "description": "A man walks through a street to discover a beautiful woman (Catrinel Menghia) standing on a parking space, who proceeds to approach and seduce him, when   successfully doing so he then discovers he was about to kiss a Fiat 500 Abarth.",
        "standard": "NTSC",
        "definition": "SD",
        "startTimecode": "00:00:00:00",
        "endTimecode": "00:00:18:11"
      },
      {
        "name": "Volkswagen \"Black Beetle\"",
        "description": "A computer generated black beetle runs fast, as it is referencing the new Volkswagen model.",
        "standard": "NTSC",
        "definition": "HD",
        "startTimecode": "00:00:00:00",
        "endTimecode": "00:00:30:00"
      },
      {
        "name": "Pepsi",
        "description": "People in the Middles Ages try to entertain their king (Elton John) for a Pepsi. While the first person fails, a mysterious person (Season 1 X Factor  winner Melanie Amaro) wins the Pepsi by singing Aretha Franklin's \"Respect\".\" After she wins, she overthrows the king and gives Pepsi to all the town.",
        "standard": "NTSC",
        "definition": "SD",
        "startTimecode": "00:00:00:00",
        "endTimecode": "00:00:20:00"
      },
      {
        "name": "Captain America The First Avenger",
        "description": "Video Promo",
        "standard": "PAL",
        "definition": "HD",
        "startTimecode": "00:00:00:00",
        "endTimecode": "00:00:20:10"
      },
      {
        "name": "M&M's",
        "description": "At a party, a brown shelled M&M is mistaken for being naked. As a result, the red M&M tears off its skin and dances to \"Sexy and I Know It\" by LMFAO.",
        "standard": "NTSC",
        "definition": "SD",
        "startTimecode": "00:00:00:00",
        "endTimecode": "00:00:15:27"
      },
      {
        "name": "Best Buy",
        "description": "An ad featuring the creators of the camera phone, Siri, and the first text message. The creators of Words with Friends also appear parodying the incident  involving Alec Baldwin playing the game on an airplane.",
        "standard": "PAL",
        "definition": "HD",
        "startTimecode": "00:00:00:00",
        "endTimecode": "00:00:10:05"
      }
    ])
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });