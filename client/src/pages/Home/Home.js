import React from "react";
import "./Home.css";

const Home = () =>
<div className="HomeCollection">

<div className="Quote">
<p> Life is short. </p>
<p> Buy the good wine. </p>
</div>
<p>New to wine? We got you covered.</p>
<p>Sip Happens is your source for everything wine - We’re all familiar with the stress and frustration 
associated with wine shopping—What pairs with what? How much should I spend? Is this brand any good?—and the 
sheer uncertainty of an untrained, uninformed selection. But moreover, we’re familiar with the more-consistent-than-clockwork 
morning-after migraine that accompanies a night of wine consumption. Here at Sip Happens is 
 where wine lovers meet their new best friend.</p>

<div className="creator1">
Kyesten Caldwell
<div className="images">
<img src={require("../../images/Kyesten.jpg")} alt="Kyesten" />
</div>
"What I like to drink most is wine that belongs to others."- Diogenes. Favorite wine is Moscato.
</div>

<div className="creator2">
Jessica Lovell
<div className="images">
<img src={require("../../images/jessicabiophoto.jpg")} alt="Jessica" />
</div>
"Wine is bottled poetry."- Robert Louis Stevenson. Favorite wine is Rose.
</div>

<div className="creator3">
Kate Stark
<div className="images">
<img src={require("../../images/kate.jpg")} alt="Kate" />
</div>
“I’d rather eat pasta and drink wine than be a size 0”- Sophia Loren. Favorite wine is Cabernet Sauvignon.
</div>

</div>

export default Home;