import assets from "../../assets/assets";
import SectionTitle from "../card/SectionTitle";
import Card from "../card/Card";
const FeaturedArticles = () => {
  const articles = [
    {
      image: assets.soil_health,
      title: "The Importance of Soil Health",
      description: "Learn the value of healthy soil for sustainable farming.",
    },
    {
      image: assets.reading,
      title: "Reading for Pleasure",
      description:
        "Explore the joys of reading and how it can enrich your life.",
    },
    {
      image: assets.blogging,
      title: "Blogging Essentials",
      description: "Tips on content creation and audience engagement.",
    },
  ];

  return (
    <div>
      <SectionTitle title="Featured Articles" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
