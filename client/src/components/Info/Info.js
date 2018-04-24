import React from 'react';
import "./Info.css"

const Info = () =>
<div className="collection container">
	<div className="row">
		<div className="winebasics col-lg-10">
			<h1 className="title">Wine Basics</h1>
				<p>Wine is made with grapes, but they are different than what you’ll find at the grocery store. 
				Wine grapes (the latin name is Vitis vinifera) are small, sweet, have thick skins, and contain seeds. 
				There are over 1,300 identified, commercial wine grape varieties, 
				but just about 150 of these varieties make up the majority of wine made in the world.</p>
		</div>
	</div>

	<div className="row">
		<div className= "col-md-4">
			<img className= "images" src={require("../../images/winetasting.jpg")} alt="Wine Paring Chart" />
		</div>
		<div className= "tasting col-md-8">
			<h1 className="title">The 5 S's of Wine Tasting</h1>
				<h3>1. Swirl</h3>
					<p>The first tip to enjoying a good red wine is ensuring that it’s properly aerated, 
					and swirling it is one way to achieve some aeration if the bottle has just been opened 
					(the other ways to achieve that include opening the bottle about 30 minutes prior to drinking, using a decanter, 
					or using an aerator). Swirling is the reason that the wine glasses at a nice wine bar or winery seem gigantic compared to the 
					individual serving of wine–because the shape and size of the glass allows you to swirl without spilling, and for the wine to have
					the largest air surface. No matter what type of red wine you’re drinking, the best and most classic glass is the “large bordeaux” 
					style.  Needless to say–if you don’t have the right glass, just swirl carefully!</p>
				<h3>2. Sniff</h3>
					<p>As you know, our senses of taste and smell are very directly tied. So when you take a good long sniff of something, it will affect how you taste that something in the same moment. This, normally, is a good thing! Plus, a nice red wine just smells darn good. So, after you get some air into it, stick your nose well into that wine glass (as in, you should be dangerously close to dipping the tip of your nose into the juice!) and take a good long sniff. For some fun smell-testing, put only one nostril in for a sniff, and then the other–does it smell different in each nostril? Different than when we smell with your whole nose? Sometimes you can pick up different smells that way.</p>
					
				<h3>3. Slurp</h3>
					<p>Get some air in there! Another part of the aerating process is taking in air as you sip the wine into your mouth. So, as you take in some wine, make it sound like a straw trying to slurp up the last few drops out of a glass–get some air in there! This will continue to oxidate the wine and make it it’s best, full flavor.</p>
					
				<h3>4. Swish</h3>
					<p>Mouthwash style.  That’s right–swish it around like you’re last dose of Listerine before a dentist office visit. This may seem odd and unsophisticated, but the goal is to get that wine on every part of your tastebuds. In the same way your nostrils may pick up different scents, different parts of your tongue will pick up different flavors. So you’ll get the full flavor of the wine only if it hits every one of your tastebuds.</p>
				<h3>5. Swallow</h3>
					<p>The obvious final step (unless, of course, you’re preserving your alcohol-intake, at which point you take the “Spit” route here) is swallow! This is hard to describe, but as you swallow, do so slowly letting the wine drift over the back of your tongue as it goes down for one last final swoop over the taste buds.
					So, whether you’re sipping on that first taste from a bottle at home, or at your local wine shop’s weekend tasting event, now you know how to make the most of your tasting and to most accurately discover whether you love something or not. </p>
		</div>
	</div>
	<div className= "row">
		<div className= "col-md-12">
			
			<h1 className="title">9 Tips for Pairing Wine and Food</h1>
			<p>If you’re just getting started, you’ll find these tried-and-true methodologies to produce consistently great pairings. That said, as you get more familiar with different wines, you’ll become confident and can experiment breaking the rules!If you’re just getting started, you’ll find these tried-and-true methodologies to produce consistently great pairings. That said, as you get more familiar with different wines, you’ll become confident and can experiment breaking the rules!</p>
			<ol>
				<li>The wine should be more acidic than the food.</li>
				<li>The wine should be sweeter than the food.</li>
				<li>The wine should have the same flavor intensity as the food.</li>
				<li>Red wines pair best with bold flavored meats (e.g. red meat).</li>
				<li>White wines pair best with light-intensity meats (e.g. fish or chicken).</li>
				<li>Bitter wines (e.g. red wines) are best balanced with fat.</li>
				<li>It is better to match the wine with the sauce than with the meat.</li>
				<li>More often than not, White, Sparkling and Rosé wines create complementary pairings.</li>
				<li>More often than not, Red wines will create congruent pairings.</li>
			</ol>
		</div>
		<div className= "col-md-8">
			<img className="image2"src={require("../../images/pairing.png")} alt="Wine Paring Chart" />
		</div>
	</div>
</div>



export default Info;

