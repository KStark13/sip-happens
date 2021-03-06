const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Wines collection and inserts the wines below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/siphappensdb",
  {
    useMongoClient: true
  }
);

const winesSeed = [
  {
    name: "Red Wine",
    image: "https://minimalistbaker.com/wp-content/uploads/2015/07/Simple-Traditional-Red-Sangria-SQUARE.jpg",
    flavor: "Sweet",
    wine: "Sangria",
    description: "Red Wine Sangria is a traditional classic and we suggest using fruits like oranges cherries and lemons to add flavor and colorful garnish. The perfect fruity drink for entertaining large crowds."
  },

  {
    name: "Red Wine",
    image: "https://cdn.shopify.com/s/files/1/1781/3871/products/barefoot_redmoscato_c428f10d-5fbd-40d6-9056-0ab12f48d759_1024x1024.jpg?v=1513888504",
    flavor: "Sweet",
    wine: "Red Moscato",
    description: "Red Moscato wine is a sweet, slightly sparkling wine with flavors of the Moscato grape with classic red characteristics. Red Moscato is a popular sweet and sparkling wine and highly enjoyed around the world by many different people. Low in alcohol, it is great as an aperitif or with dessert."
  },
  {
    name: "Red Wine",
    image: "https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/17_30983_30E_01ex.jpg",
    flavor: "Sweet",
    wine: "Pinot Noir",
    description: "Pinot Noir is typically a light to medium bodied, fruit-forward red wine that calls Burgundy home. It holds a pleasant spot in the red wine spectrum—not too dry, but certainly not sweet—which is why it's a favorite the world over."
  },
  {
    name: "Red Wine",
    image: "http://www.fmwineanddine.com/wp-content/uploads/2013/04/dessert-wine-INSTA.jpg",
    flavor: "Sweet",
    wine: "Banfi's Rosa Regale",
    description: "This bright red wine from Italy's well-loved Piedmont region has a devoted following. It is a red sparkling wine that is sweet and subtle with the lush flavors of ripe raspberry and juicy strawberry."
  },
  {
    name: "Red Wine",
    image: "http://runningharevineyard.com/wordpress/wp-content/uploads/2015/06/runningharewinesMalbec.jpg",
    flavor: "Dry",
    wine: "Malbec",
    description: "Malbec is a purple grape variety used in making red wine. The grapes tend to have an inky dark color and robust tannins, and are known as one of the six grapes allowed in the blend of red Bordeaux wine. "
  },
  {
    name: "Red Wine",
    image: "https://i1.wp.com/www.redoakvineyard.com/wp-content/uploads/2017/02/ZINFANDEL_LODI.jpg?fit=2474%2C3606&ssl=1",
    flavor: "Dry",
    wine: "Zinfandel",
    description: "Zinfandel wine made in the traditional fashion may be unoaked, easy-drinking and jammy, or oak-aged and full bodied. Expect flavors of black fruits and spice in all. The full flavors and bit of sweetness make Zinfandel a great match for grilled and barbecued meats."
  },
  {
    name: "Red Wine",
    image: "https://cdn.shopify.com/s/files/1/0672/6657/products/BrooklynWinery_CabernetSauvignon_1024x1024.jpg?v=1511290211",
    flavor: "Dry",
    wine: "Cabernet Sauvignon",
    description: "Cabernet Sauvignon is a full-bodied red wine with dark fruit flavors and savory tastes from black pepper to bell pepper. Despite the natural full-bodied traits of Cab, Bordeaux wines are kings of subtlety, they tend to taste a little lighter but have strong tannins and acidity that will last on your tongue."
  },
  {
    name: "Red Wine",
    image: "https://nickelandnickel.com/wp-content/uploads/2015/03/acquire-syrah.jpg",
    flavor: "Dry",
    wine: "Syrah",
    description: "Syrah is responsible for some of the darkest full-bodied red wines in the world. It has dark fruit flavors from sweet blueberry to savory black olive. When you taste Syrah you’ll be greeted with a punch of flavor that tapers off and then has a spicy peppery note in the aftertaste. "
  },
  {
    name: "White Wine",
    image: "https://writtenpalette.com/wp-content/uploads/2017/09/Nik-Weis-St.-Urban-Hof-Riesling-Wine.jpg",
    flavor: "Sweet",
    wine: "Riesling",
    description: "Usually crisp, due to its high levels of acidity, Riesling is known for its strong floral aromas. This aromatic wine offers primary fruit aromas of orchard fruits like nectarine, apricot, honey-crisp apple, and pear"
  },
  {
    name: "White Wine",
    image: "https://www.fattoriasorbaiano.it/97-large_default/vinsanto-doc.jpg",
    flavor: "Sweet",
    wine: "Vin Santo",
    description: "Vin Santo is a viscous, typically sweet dessert wine made in Italy, predominantly in Tuscany. The wine is loved for its intense flavors of hazelnut and caramel. "
  },
  {
    name: "White Wine",
    image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/52022_XXX_v1.tif&wid=650&cvt=jpeg",
    flavor: "Sweet",
    wine: "Torrontés Wine",
    description: "Torrontés is an aromatic white wine that originated in Argentina. Torrontés is an ideal wine to match with Asian and Indian cuisine due to its sweet floral aromas of rose petals and flavors of white peach and lemon zest."
  },
  {
    name: "White Wine",
    image: "http://cdn3.bigcommerce.com/s-k4dvh6/product_images/uploaded_images/sauternes-bauduc-6.jpg?t=1456436734",
    flavor: "Sweet",
    wine: "Sauternes",
    description: "Sauternes represents the sweeter side of Bordeaux and is made from the region’s rare white grapes. It can consist of intense notes of honeyed apricot, butterscotch, caramel, coconut, mango, ginger, marmalade, and citrus themes. "
  },
  {
    name: "White Wine",
    image: "http://www.sourceofwine.com/wp-content/uploads/2014/03/Chardonnay-Wine-300x300.jpg",
    flavor: "Dry",
    wine: "Chardonnay",
    description: "Oaked Chardonnays are rich, full-bodied and have additional flavors of vanilla, butter and even caramel from the oak. "
  },
  {
    name: "White Wine",
    image: "http://eaglevlei.com/wp-content/uploads/2016/06/Semillon-2015-1.jpg",
    flavor: "Dry",
    wine: "Sémillon",
    description: " Sémillon wine is loved for its full body, like Chardonnay, but with flavors closer to Pinot Gris or Sauvignon Blanc. "
  },
  {
    name: "White Wine",
    image: "https://www.thespanishhamper.co.uk/wp-content/uploads/2014/02/Diamante-semi-sweet-white-wine.-Rioja.jpg",
    flavor: "Dry",
    wine: "White Rioja",
    description: "On the palate, White Rioja wines are dry and subtly reveal layers of lemon curd, creamed pine nuts, praline, tarragon and lemonade with a long finish of oily minerals, saline and mouth-watering acidity. "
  },
  {
    name: "White Wine",
    image: "http://azwinemonk.com/wp-content/uploads/2017/04/IMG_20170402_101418_316-300x300.jpg",
    flavor: "Dry",
    wine: "Viognier",
    description: "Viognier is a full-bodied white wine that originated in southern France. Most loved for its perfumed aromas of peach, tangerine and honeysuckle, Viognier can also be oak-aged to add a rich creamy taste with hints of vanilla."
  },
  {
    name: "Rosé",
    image: "https://up-1.cdn-fullscreendirect.com/production/photos/10330/original/20170615_055632_10330_994864.jpeg",
    flavor: "Dry",
    wine: "Tempranillo Rosé",
    description: "Tempranillo rosé is growing in popularity from the Rioja region and other parts of Spain. With this style of rosé you can expect a pale pink hue and herbaceous notes of green peppercorn, watermelon, strawberry and meaty notes."
  },
  {
    name: "Rosé",
    image: "http://calicoastwinecountry.com/wordpress/wp-content/uploads/2013/08/Bloody-Mary-Sangria-by-Liz-Dodder.jpg",
    flavor: "Dry",
    wine: "Syrah Rosé",
    description: "Rosé of Syrah tend to be more on the bolder end of the spectrum and are best served slightly warmer than fridge temperatures in a regular red wine glass. This is a surprisingly good wine with pepperoni pizza or a bowl of chili. "
  },
  {
    name: "Rosé",
    image: "http://www.marquesvl.com/images/IMG/rose.jpg",
    flavor: "Dry",
    wine: "Cabernet Sauvignon Rosé",
    description: "This type of rosé wine is nearly exclusively made in the ‘Saignée Method’. Cabernet rosé are a deep ruby red color with red wine-like flavors of green bell pepper, cherry sauce, black currant and pepper spice."
  },
  {
    name: "Rosé",
    image: "http://www.au-pays-des-merveilles.com/blog/wp-content/uploads/2013/07/CIVB_TABLEROSE.jpg",
    flavor: "Dry",
    wine: "Tavel Rosé",
    description: " Tavel Rosé has more body and structure than most pink wines and is considered to have all the character of a good red wine, just less color. It is made primarily with Grenache and Cinsault, but nine varieties are allowed in the blend. "
  },
  {
    name: "Rosé",
    image: "http://imbibemagazine.com/wp-content/uploads/2018/04/dotw-del-rio-grenache-rose-crdt-del-rio-web-330x495.jpeg",
    flavor: "Sweet",
    wine: "Grenache Rosé",
    description: " Grenache Rosé has a brilliant ruby red hue with notes of ripe strawberry, orange, hibiscus and sometimes with a hint of allspice. You’ll find wines of Grenache to have moderately high acidity, but since most have quite a bit of color and body, typically you’ll want to serve them cold to keep them zesty."
  },
  {
    name: "Rosé",
    image: "https://www.mitolowines.com.au/assets/images/contentblock/photos/scaled.jester_wine_table.jpg",
    flavor: "Sweet",
    wine: "Sangiovese Rosé",
    description: " Sangiovese Rosé a bright copper red color that sparkles in the light, Sangiovese seems like it was made to be a rosé wine. Notes of fresh strawberries, green melon, roses and yellow peach are complimented with mouth quenching acidity. "
  },
  {
    name: "Rosé",
    image: "https://3.bp.blogspot.com/-4T0MfEG_z6w/WmDWSdEnKRI/AAAAAAABKRs/2LqCsl-8vYsrv5vvaZmf7X_kOEJIkYk6wCLcBGAs/s1600/DSC_5357334.jpg",
    flavor: "Sweet",
    wine: "Mourvèdre Rosé",
    description: " Mourvèdre is floral on the nose with notes of violets and rose petals. On the palate, this grape can be full of red plums, cherries, dried herbs, smoke and even meat."
  },
  {
    name: "Rosé",
    image: "https://cdn.shopify.com/s/files/1/1599/7971/products/pinot_noir_rose_16_1024x1024.jpg?v=1505695429",
    flavor: "Dry",
    wine: "Pinot Noir Rosé",
    description: " In rosé, Pinot Noir delivers bright acidity and soft, subtle aromas of crabapple, watermelon, raspberries, strawberries, and wet stone. "
  },
  {
    name: "Bubbly",
    image: "https://bespokeunit.com/wp-content/uploads/2017/12/Canard-Duch%C3%AAne-Authentic-Brut-Champagne-Bottle-Glasses.jpg",
    flavor: "Sweet",
    wine: "Brut Champagne",
    description: "Brut Champagne is a level of sweetness in sparkling wine. The sweetness comes from a step in the Champagne making process called dosage which is when a small amount of sugar or grape must is added back into the wine before corking the wine."
  },
  {
    name: "Bubbly",
    image: "https://cdn.shopify.com/s/files/1/1781/3871/products/barefoot_moscatospumante_c2e52d5d-3cd8-4351-aa43-55b858b02388_1024x1024.jpg?v=1514052220",
    flavor: "Sweet",
    wine: "Moscato Spumante",
    description: "Sweet and Spice with everything nice, Moscato Spumante Champagne mixes it up with wine, and apricot and peach flavors, a crisp acidity, and a tangerine finish."
  },
  {
    name: "Bubbly",
    image: "http://img.alicdn.com/imgextra/i4/2525789055/TB2tyDUdFHM8KJjSZFwXXcibXXa_!!2525789055.png",
    flavor: "Sweet",
    wine: "Moscato Pink",
    description: " Moscato Pink opens with a fragrant floral aroma. Sweet, harmonious and fruity, this pale pink sparkler makes a great complement to your favorite dessert. "
  },
  {
    name: "Bubbly",
    image: "https://file.weddingchicks.com/508538_blanc-de-bleu-cuvee-mousseux-l-vendors3232images.jpg",
    flavor: "Sweet",
    wine: "Blanc de Bleu Cuvee Mousseux",
    description: "Blanc de Bleu is a premium California Chardonnay wine with an added hint of blueberries and is a delicate sparkling wine reserved for memorable celebrations. It offers seductive flavors and fresh aromatic effervescence - vividly pasteled with blueberries."
  }
];

db.Wines
  .remove({})
  .then(() => db.Wines.collection.insertMany(winesSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  });