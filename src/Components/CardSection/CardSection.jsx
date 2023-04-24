import React from "react";
import "./CardSection.scss";
import Card from "../Card/Card";
import Card1 from "../../Images/Card-1.png";
import Card2 from "../../Images/Card-2.png";
import Card3 from "../../Images/Card-3.png";
import Card4 from "../../Images/Card-4.png";
import Card5 from "../../Images/Card-5.png";
import Card6 from "../../Images/Card-6.png";
import Card7 from "../../Images/Card-7.png";
import Card8 from "../../Images/Card-8.png";
import Card9 from "../../Images/Card-9.png";

export default function CardSection() {
  return (
    <div className="card-section">
      <Card
        image={Card1}
        title={"Eat Right For Your Exercise Regime"}
        type={"Lifestyle"}
        description={
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
      />
      <Card
        image={Card2}
        title={"The Look: Perfect Balance"}
        type={"Lifestyle"}
        description={
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
      />
      <Card
        image={Card3}
        title={"Fun Things to Do in Rome"}
        type={"Style"}
        description={
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
      />
      <Card
        image={Card4}
        title={"24 Colorful Ceilings That Add Unexpected Contrast to Any Room"}
        type={"Style"}
        description={
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
      />
      <Card
        image={Card5}
        title={"9 New Songs to Heat Up Your Fall Playlist"}
        type={"Lifestyle"}
        description={
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
      />
      <Card
        image={Card6}
        title={"What You Need on Your Bedside Table"}
        type={"Events"}
        description={
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
      />
      <Card
        image={Card7}
        title={"When Two Wheels Are Better Than Four"}
        type={"Travel"}
        description={
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
      />
      <Card
        image={Card8}
        title={"26 Living Room Ideas from the Homes of Top Designers"}
        type={"Travel"}
        description={
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
      />
      <Card
        image={Card9}
        title={"What Makes Your City’s Style Unique"}
        type={"Music"}
        description={
          "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
      />
    </div>
  );
}
