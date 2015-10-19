$(function() {
		var result = {
			// connecting to the value in the html with the class of formWest
			west: {
				culture: [
					{
						title: "Calgary Stampede",
						description: "The Calgary Stampede is an annual rodeo, exhibition and festival held every July in Calgary, Alberta, Canada. It attracts over one million visitors per year and features one of the world's largest rodeos, a parade, midway, stage shows, concerts, agricultural competitions, chuckwagon racing and First Nations exhibitions.   ",
						contentSource:"https://en.wikipedia.org/wiki/Calgary_Stampede",
						photo: "img/calgaryStampede.jpg",
						photoCredit: "http://adventurecaravans.com/wp-content/uploads/2013/07/20110716Stampede46662.jpg",
						link: "http://www.calgarystampede.com/"
					},
					{
						title: "Butchart Gardens",
						description: "The Butchart Gardens is a group of floral display gardens in Brentwood Bay, British Columbia, Canada, located near Victoria on Vancouver Island. This world-renowned garden occupies 55 acres with stunning floral scenery.",
						contentSource:"http://www.hellobc.com/activitylisting/4543363/butchart-gardens.aspx",
						photo: "img/butchardGardens.jpg",
						photoCredit: "http://stophavingaboringlife.com/enjoying-the-butchart-gardens-high-tea-the-empress/",
						link: "http://www.butchartgardens.com/"
					},
					{
						title: "Buffalo Jump",
						description: "Head-Smashed-In Buffalo Jump is a buffalo jump located in the foothills of the Rocky Mountains in Alberta. The park was established as a World Heritage Site in 1981 for its testimony of prehistoric life and the customs of aboriginal people. ",
						contentSource:"https://en.wikipedia.org/wiki/Head-Smashed-In_Buffalo_Jump",
						photo: "img/headSmashedInBuffaloJump.jpg",
						photoCredit: "http://www.summitpost.org/head-smashed-in-buffalo-jump/333126",
						link: "http://www.history.alberta.ca/headsmashedin/"
					},
					{
						title: "Dawson City",
						description: "Dawson City, Yukon is the heart of the Klondike Gold Rush! An incredible community that has preserved its past, Dawson City invites you to turn back the pages of time and experience our rich living history. Meander the wooden boardwalks and visit national historic treasures.",
						contentSource:"http://www.yukoninfo.com/dawson-city-yukon/",
						photo: "img/dawsonCity.jpg",
						photoCredit: "https://en.wikipedia.org/wiki/Dawson_City",
						link: "http://dawsoncity.ca/"
					},
					{
						title: "Royal BC Museum",
						description: "The Royal BC Museum, which was founded in 1886, includes three permanent galleries: modern history, natural history, and local First Nations’ history. The museum’s collections comprise approximately 7 million objects, including artifacts, natural history specimens, and archival records.",
						contentSource:"https://en.wikipedia.org/wiki/Royal_British_Columbia_Museum",
						photo: "img/royalBcMuseum.jpg",
						photoCredit: "http://royalbcmuseum.bc.ca/exhibitions/current/",
						link: "http://royalbcmuseum.bc.ca/"
					}, 
					{
						title: "Dinosaur Park",
						description: "Dinosaur Provincial Park is a UNESCO World Heritage Site in Calgary, Alberta. The park is well known for being one of the richest dinosaur fossil locales in the world. Forty dinosaur species have been discovered at the park and more than 500 specimens have been removed and exhibited in museums around the globe.",
						contentSource:"",
						photo: "img/dinosaurProvincialPark.jpg",
						photoCredit: "http://www.wallconvert.com/converted/nature_wallpapers_26367_1920x1080-113077.html",
						link: "http://www.albertaparks.ca/dinosaur.aspx"
					},
					{
						title: "Squamish Lil'wat",
						description: "The Squamish Lil’wat Cultural Centre celebrates the joint history of the Squamish and Lil’wat First Nations, past and present, by showcasing their histories, creative works and cultures in an interactive format. Highlights include an interpretive centre with interactive cultural experience, permanent and temporary exhibits and demonstrations.",
						contentSource: "http://www.whistler.com/arts/squamish-lilwat-cultural-centre/",
						photo: "img/squamish.jpg",
						photoCredit: "http://www.media-centre.ca/architecture/",
						link: "http://slcc.ca/"
					},
					{
						title: "Train Travel",
						description: "Rocky Mountaineer offers over 65 Canadian vacation packages and four unique rail routes - three train journeys through British Columbia and Alberta to Banff, Lake Louise, Jasper and Calgary, and one train excursion from Vancouver to Whistler. This world-renowned, luxurious train travels by daylight through the wild beauty of Canada's West and is the best way to experience the majestic Canadian Rockies.",
						contentSource: "https://www.rockymountaineer.com/en_CA_ON/",
						photo: "img/trainTravel.jpg",
						photoCredit: "http://www.theluxurypost.com/wp-content/uploads/2015/02/Rocky-Mountaineer-13.jpg",
						link: "https://www.rockymountaineer.com/en_CA_ON/"
					}					
				],
				nature: [
  					{
                        title: "Whistler",
                        description: "Whistler is located in the mountains of British Columbia is one of the top four-season resorts in North America with over 8,100 acres of snow-covered slopes. The alpine village at Whistler is charming and offers fine dining, nightlife, shopping, and  rejuvenating spas. ",
                        contentSource:"http://www.whistler.com/",
                        photo: "img/whistler.jpg",
                        photoCredit: "http://www.whistler-townplaza.com/activities/ski-snowboard-vacations/",
                        link: "http://www.hellobc.com/whistler.aspx?gclid=CjwKEAjw7uKwBRDUlJvRo-z6rgMSJACbmSBh2ulHq_WVbB6I-Ni5HYB9RdKNWVzVq_xkjDHZ5Zt_YRoCtwTw_wcB"
                    }, 
                    {
                        title: "Banff",
                        description: "For over 125 years, Banff National Park has provided visitors with a healthy combination of unspoiled wilderness, modern amenities and opportunities for active exploration. With such a breathtaking landscape, it’s no surprise that this UNESCO World Heritage Site has been nominated time and again as a “must-see” destination for travelers around the world.",
                        contentSource: "http://www.banfflakelouise.com/",
                        photo: "img/banff.jpg",
                        photoCredit: "http://www.evolvetours.com/5-things-that-make-banff-completely-magical/",
                        link: "http://banffnationalpark.com/"
                    },
                    {
                        title: "Grizzly Viewing",
                        description: "The Great Bear Rainforest is one of the most pristine wilderness environments on earth. It is home to the planet's largest intact temperate rainforest, and is the only place in the world where you can see the Kermode (Spirit) bear, a sub-species of black bear noted for its white fur. ",
                        contentSource: "http://www.hellobc.com/great-bear-rainforest.aspx",
                        photo: "img/bear.jpeg",
                        photoCredit: "http://www.hellobc.com/great-bear-rainforest.aspx",
                        link: "http://www.hellobc.com/great-bear-rainforest.aspx"
                    },
                    {
                        title: "Dog Sledding",
                        description: "Experience Yukon winter travel in its purest form and discover the joyful sport of dogsledding. Bond with half a dozen furry friends, and feel the adrenaline rush of being pulled by your enthusiastic team of huskies. Choose from half-day outings to multi-day wilderness adventures.",
                        contentSource: "http://www.travelyukon.com/Explore/Things-to-do/Winter",
                        photo: "img/yukon.jpg",
                        photoCredit: "http://muktuk.com/",
                        link: "http://www.travelyukon.com/"
                    },
                    {
                        title: "Columbia Ice Field",
                        description: "The Columbia Icefield is the largest mass of ice in the Rocky Mountains. The most accessible part of the Icefield is the Athabasca Glacier, which spills over three giant bedrock steps and flows down the valley like a frozen, slow-moving river. There are tours that takes visitors onto the surface of the Glacier and take in some stunning views",
                        contentSource: "http://www.brewster.ca/activities-in-the-rockies/brewster-attractions/columbia-icefield-glacier-adventure/#/0",
                        photo: "img/iceField.jpg",
                        photoCredit: "http://therealbanff.com/accessible-adventure-columbia-icefields-in-banff/",
                        link: "http://travelalberta.com/Things%20to%20Do/Scenic%20Routes/Icefields%20Parkway.aspx"
                    }
				]
			},	
			east: {
				culture: [
					{
						title: "Turtle Island",
						description: "Take a journey through aboriginal culture with the Turtle Island experience. First, visit the Canadian Museum of Civilization.  Then push off from shore in a Rabaska canoe and cross the Ottawa River. You are greeted in the traditional way with a welcoming song by your Aboriginal hosts. Then you are led on a guided tour of the village.",
						contentSource: "http://caen-keepexploring.canada.travel/things-to-do/exp/turtle-island-aboriginal-experience#/?galleryItemId=200009538",
						photo: "img/museumOfHistory.jpg",
						photoCredit: "http://caen-keepexploring.canada.travel/things-to-do/exp/turtle-island-aboriginal-experience#/?galleryItemId=200009538",
						link: "http://caen-keepexploring.canada.travel/things-to-do/exp/turtle-island-aboriginal-experience#/?galleryItemId=200009538"
					},				
					{
						title: "Winter Carnival",
						description: "Enjoy an epic carnival experience at the Quebec Winter Carnival. The most famous attractions of this winter festival are the night-time and daytime parades led by mascot Bonhomme Carnaval. The parades wind through the upper city, decorated for the occasion with lights and ice sculptures. Another major event includes a masquerade ball with up to 400 participants at the grand ballroom of the Château Frontenac.",
						contentSource: "https://en.wikipedia.org/wiki/Quebec_Winter_Carnival",
						photo: "img/quebecCarnival.jpg",
						photoCredit: "http://media.shawconnect.ca/travel/files/2012/11/place_loto_vue1.jpg",
						link: "http://carnaval.qc.ca/en/about/history/"
					},
					{
						title: "L'anse Au Meadows",
						description: "L'anse Au Meadows is an archaeological site on the northernmost tip of the island of Newfoundland in the Canadian province of Newfoundland and Labrador. Discovered in 1960, it is the most famous site of a Norse or Viking settlement in North America outside Greenland.",
						contentSource: "https://en.wikipedia.org/wiki/L%27Anse_aux_Meadows",
						photo: "img/lanseAuMeadows.jpg",
						photoCredit: "http://ngjyra.com/wp-content/uploads/2015/07/LAnse-aux-Meadows7.jpg",
						link: "http://www.pc.gc.ca/eng/lhn-nhs/nl/meadows/index.aspx"
					},				
					{
						title: "Distillery District",
						description: "The Distillery District is home to many of Toronto's hottest designer boutiques, unique cafes, artisan shops, breathtaking art galleries, performance venues and award-winning restaurants. The Distillery features more than 70 ground-floor cultural and retail establishments in the restored red brick, Victorian-era buildings of the renowned Gooderham & Worts whiskey distillery.",
						contentSource:"http://www.thedistillerydistrict.com/",
						photo: "img/distilleryDistrict.jpg",
						photoCredit: "http://www.lovethiscitytv.com/wp-content/uploads/2013/11/Toronto%E2%80%99s-Distillery-District.jpg",
						link: "http://www.thedistillerydistrict.com/"
					},
					{
						title: "Stratford, Ontario",
						description: "Stratford is a destination internationally renowned as one of North America's great arts towns.  The area has a dynamic local food scene and the popular Stratford Bacon & Ale Trail and Stratford Chocolate Trail. Our beautiful City celebrates a vibrant art and music scene, our famed theatre, modern recreational facilities and a variety of recreational programs.",
						contentSource: "https://www.stratfordcanada.ca/en/visitus.asp",
						photo: "img/stratford.jpg",
						photoCredit: "http://student.plattsburgh.edu/jbrun008/Stratford_Ontario_Street_1%20(1).jpg",
						link: "https://www.stratfordcanada.ca/en/visitus.asp"
					},
					{
						title: "Green Gables",
						description: "In Cavendish, you’ll find  Anne of Green Gables Heritage Place, Avonlea Village, and Site of L.M. Montgomery’s Cavendish Home.Explore the house or even walk the Haunted Wood, at Green Gables Heritage Place in PEI National Park. Anne of Green Gables–The Musical™ has been thrilling Anne fans for 48 years. Enjoy a day of family fun at Avonlea Village in Cavendish.",
						contentSource: "http://www.tourismpei.com/pei-anne-vacation",
						photo: "img/anneGreenGables.jpg",
						photoCredit: "http://www.sacanada.org/uploads/2003-01%20PEI_Anne_of_Green_Gables_house.jpg",
						link: "http://www.tourismpei.com/pei-anne-vacation"
					},	
					{
						title: "Sugar Shack",
						description: "A visit to the sugar shack is the ultimate experience in capturing the spring's sweetness. Every year in March and April, when the temperature plummet below zero at night and rise above zero in the day, maple trees in Ontario are tapped for their sap. The end result is enjoyed in many forms: maple syrup, maple butter, maple candy, and maple sugar." ,
						contentSource: "http://www.toronto4kids.com/March-2013/To-the-Sugar-Shack/",
						photo: "img/sugarShack.jpg",
						photoCredit: "http://hdrcreme.com/photos/56349-sugar-shack-in-autumn",
						link: "http://www.toronto4kids.com/March-2013/To-the-Sugar-Shack/"
					},		
					{
						title: "Notre Dame Basilica",
						description: "Notre Dame Basilica is a basilica in the historic district of Old Montreal.The church's Gothic Revival architecture is among the most dramatic in the world. Its interior is grand and colourful. Its ceiling is coloured deep blue and decorated with golden stars. It is filled with hundreds of intricate wooden carvings and several religious statues. ",
						contentSource: "https://en.wikipedia.org/wiki/Notre-Dame_Basilica_(Montreal)",
						photo: "img/notreDameMontreal.jpg",
						photoCredit: "https://upload.wikimedia.org/wikipedia/commons/7/73/Notre-Dame_Basilica_-_Basilique_Notre-Dame_de_Montr%C3%A9al.jpg",
						link: "http://www.basiliquenotredame.ca/"
					},	
					{
						title: "St. Johns",
						description: "St. John's, our province's capital, is the perfect combination of big-city luxury and small-town charm. As the oldest and most easterly city in North America, this is where heritage lives.  It's become a rare, old city full of character, experience and charisma, with a contemporary, sophisticated edge.",
						contentSource: "",
						photo: "img/stJohns.jpg",
						photoCredit: "http://i.huffpost.com/gen/1760910/images/o-ST-JOHNS-NEWFOUNDLAND-facebook.jpg",
						link: ""
					}																			
				],
				nature: [
				   {
                        title: "Polar Bear Viewing",
                        description: "Churchill is one of the few human settlements where polar bears can be observed in the wild. Thousands of visitors from around the world visit each fall for the excitement of seeing these magnificent animals.",
                        contentSource: "http://www.everythingchurchill.com/experiences/polar-bears/",
                        photo: "img/polarBear.jpg",
                        photoCredit: "http://www.marketwired.com/press-release/frontiers-north-adventures-launches-conservation-journey-polar-bears-2033112.htm",
                        link: "http://www.everythingchurchill.com/"
                    },
                    {
                        title: "Niagara",
                        description: "Experience the incredible power and beauty of Niagara Falls at Ontario's Niagara Parks. Get as close as you can to the thundering water at Journey Behind the Falls and White Water Walk, then dine with a panoramic view at Elements on the Falls Restaurant.",
                        contentSource: "http://www.niagaraparks.com/",
                        photo: "img/niagara.jpg",
                        photoCredit: "http://churchillpolarbears.org/wp-content/uploads/2014/11/Brokvist_churchill-5.jpg",
                        link: "https://www.niagarafalls.ca/"
                    },
                    {
                        title: "Whale Watching",
                        description: "Beluga whales are majestic, sociable creatures that patrol Arctic and sub-Arctic waters above the 50th parallel. Up to 3,000 of Hudson Bay’s 25,000+ whales visit the Churchill area between mid-June to mid-August.",
                        contentSource: "http://www.everythingchurchill.com/experiences/beluga-whales/",
                        photo: "img/whale.jpg",
                        photoCredit: "http://www.winnipegfreepress.com/local/rules-could-sink-beluga-tours-296685721.html",
                        link: "http://www.everythingchurchill.com/experiences/beluga-whales/"
                    },
                    {
                        title: "Iceberg Alley",
                        description: "When it comes to viewing icebergs, this is one of the best places in the world. On a sunny day, view these 10,000-year-old glacial giants from many points along the northern and eastern coasts – in every shape and size. With colours ranging from snow-white to the deepest aquamarine.",
                        contentSource: "http://www.newfoundlandlabrador.com/thingstodo/icebergviewing",
                        photo: "img/iceberg.jpg",
                        photoCredit: "http://www.nationalgeographiclodges.com/about-our-lodges/best-of-lists/best-coastal-destinations/#.VhlG_RNViko",
                        link: "http://www.newfoundlandlabrador.com/thingstodo/icebergviewing"
                    },
                    {
                        title: "Edge Walk",
                        description: "EdgeWalk is CN Tower’s most thrilling attraction in its history, and the first of its kind in North America. It is the world’s highest full circle hands-free walk on a  wide ledge encircling the top of the Tower’s main pod, 356m/1168ft above the ground. Visitors walk in groups of six, while attached to an overhead safety rail via a trolley and harness system.",
                        contentSource: "http://www.cntower.ca/en-ca/plan-your-visit/attractions/edgewalk/edgewalk-overview.html",
                        photo: "img/edgeWalk.jpg",
                        photoCredit: "http://www.edgewalkcntower.ca/",
                        link: "http://www.edgewalkcntower.ca/"
                    }
				]
			},
		};

		//Storing the variables and listening to the radios!
		$("form").on("submit", function(e) {
			e.preventDefault();
			$("a.photoSource").show();
			$("a.link").show();
			$("a.contentSource").show();
			$("i.fa").show();
			$("input.button").show();
			// $("header").fadeIn(500);
			//storing the west option when checked
			var west = $("input.formWest:checked", this).val();
			console.log(west);

			//storing the east option when checked
			var east = $("input.formEast:checked", this).val();
			console.log(east);

			//storing the culture option when checked
			var culture = $("input.formCulture:checked", this).val();
			console.log(culture);

			//storing the nature option when checked
			var nature = $("input.formNature:checked", this).val();
			console.log(nature);



			// its a conditional statement
			if (west === "west" && culture === "culture") {
				$("form").empty();
				//Start counter to get first element
				var counter = 0;
				$(".heroImage").attr("src", result.west.culture[counter].photo);
				$("h1.title").html(result.west.culture[counter].title);
				$("a.photoSource").attr("href", result.west.culture[counter].photoCredit);
				$("p.blurb").html(result.west.culture[counter].description);
				$("a.link").attr("href", result.west.culture[counter].link);
				$("a.contentSource").attr("href", result.west.culture[counter].contentSource);


				//FORWARD BUTTON
				$("i.fa-chevron-right").on("click", function() {
					//increase counter
					//To get new element from array
					
					if (counter < (result.west.culture.length - 1)) {
						counter = counter + 1;
					}
					else {
						counter = 0;
					}

					$(".heroImage").attr("src", result.west.culture[counter].photo);
					$("h1.title").html(result.west.culture[counter].title);
					$("p.photoSource").html(result.west.culture[counter].photoCredit);
					$("p.blurb").html(result.west.culture[counter].description);
					$("p.link").html(result.west.culture[counter].link);
				});


				//BACK BUTTON
				$("i.fa-chevron-left").on("click", function() {
					//increase counter
					//To get new element from array
					
					counter -= 1;

					// if (counter = 0) {
					// 	counter = (result.west.culture.length - 1);
					// }

					$(".heroImage").attr("src", result.west.culture[counter].photo);
					$("h1.title").html(result.west.culture[counter].title);
					$("p.photoSource").html(result.west.culture[counter].photoCredit);
					$("p.blurb").html(result.west.culture[counter].description);
					$("p.link").html(result.west.culture[counter].link);
				});

			}

			if (west === "west" && nature === "nature") {
				$("form").empty();
				//Start counter to get first element
				var counter = 0;
				$(".heroImage").attr("src", result.west.nature[counter].photo);
				$("h1.title").html(result.west.nature[counter].title);
				$("a.photoSource").attr("href", result.west.nature[counter].photoCredit);
				$("p.blurb").html(result.west.nature[counter].description);
				$("a.link").attr("href", result.west.nature[counter].link);
				$("a.contentSource").attr("href", result.west.nature[counter].contentSource);

				//FORWARD BUTTON
				$("i.fa-chevron-right").on("click", function() {
					//increase counter
					//To get new element from array
					
					if (counter < (result.west.nature.length - 1)) {
						counter = counter + 1;
					}
					else {
						counter = 0;
					}

					$(".heroImage").attr("src", result.west.nature[counter].photo);
					$("h1.title").html(result.west.nature[counter].title);
					$("p.photoSource").html(result.west.nature[counter].photoCredit);
					$("p.blurb").html(result.west.nature[counter].description);
					$("p.link").html(result.west.nature[counter].link);
				});


				//BACK BUTTON
				$("i.fa-chevron-left").on("click", function() {
					//increase counter
					//To get new element from array
					
					counter -= 1;

					// if (counter = 0) {
					// 	counter = (result.west.culture.length - 1);
					// }

					$(".heroImage").attr("src", result.west.nature[counter].photo);
					$("h1.title").html(result.west.nature[counter].title);
					$("p.photoSource").html(result.west.nature[counter].photoCredit);
					$("p.blurb").html(result.west.nature[counter].description);
					$("p.link").html(result.west.nature[counter].link);
				});

			}

			if (east === "east" && nature === "nature") {
				$("form").empty();
				//Start counter to get first element
				var counter = 0;
				$(".heroImage").attr("src", result.east.nature[counter].photo);
				$("h1.title").html(result.east.nature[counter].title);
				$("a.photoSource").attr("href", result.east.nature[counter].photoCredit);
				$("p.blurb").html(result.east.nature[counter].description);
				$("a.link").attr("href", result.east.nature[counter].link);
				$("a.contentSource").attr("href", result.east.nature[counter].contentSource);

				//FORWARD BUTTON
				$("i.fa-chevron-right").on("click", function() {
					//increase counter
					//To get new element from array
					
					if (counter < (result.east.nature.length - 1)) {
						counter = counter + 1;
					}
					else {
						counter = 0;
					}

					$(".heroImage").attr("src", result.east.nature[counter].photo);
					$("h1.title").html(result.east.nature[counter].title);
					$("p.photoSource").html(result.east.nature[counter].photoCredit);
					$("p.blurb").html(result.east.nature[counter].description);
					$("p.link").html(result.east.nature[counter].link);
				});


				//BACK BUTTON
				$("i.fa-chevron-left").on("click", function() {
					//increase counter
					//To get new element from array
					
					counter -= 1;

					// if (counter = 0) {
					// 	counter = (result.west.culture.length - 1);
					// }

					$(".heroImage").attr("src", result.east.nature[counter].photo);
					$("h1.title").html(result.east.nature[counter].title);
					$("p.photoSource").html(result.east.nature[counter].photoCredit);
					$("p.blurb").html(result.east.nature[counter].description);
					$("p.link").html(result.east.nature[counter].link);
				});

			}

			if (east === "east" && culture === "culture") {
				$("form").empty();
				//Start counter to get first element
				var counter = 0;
				$(".heroImage").attr("src", result.east.culture[counter].photo);
				$("h1.title").html(result.east.culture[counter].title);
				$("a.photoSource").attr("href", result.east.culture[counter].photoCredit);
				$("p.blurb").html(result.east.culture[counter].description);
				$("a.link").attr("href", result.east.culture[counter].link);
				$("a.contentSource").attr("href", result.east.culture[counter].contentSource);

				//FORWARD BUTTON
				$("i.fa-chevron-right").on("click", function() {
					//increase counter
					//To get new element from array
					
					if (counter < (result.east.culture.length - 1)) {
						counter = counter + 1;
					}
					else {
						counter = 0;
					}

					$(".heroImage").attr("src", result.east.culture[counter].photo);
					$("h1.title").html(result.east.culture[counter].title);
					$("p.photoSource").html(result.east.culture[counter].photoCredit);
					$("p.blurb").html(result.east.culture[counter].description);
					$("p.link").html(result.east.culture[counter].link);
				});


				//BACK BUTTON
				$("i.fa-chevron-left").on("click", function() {
					//increase counter
					//To get new element from array
					
					counter -= 1;

					// if (counter = 0) {
					// 	counter = (result.west.culture.length - 1);
					// }

					$(".heroImage").attr("src", result.east.culture[counter].photo);
					$("h1.title").html(result.east.culture[counter].title);
					$("p.photoSource").html(result.east.culture[counter].photoCredit);
					$("p.blurb").html(result.east.culture[counter].description);
					$("p.link").html(result.east.culture[counter].link);
				});

			}
		});
	});

					// //loop through west.culture array
				// for (var i = 0; i < result.west.culture.length; i = i + 1) { //the length/size of the array
				// 	console.log(result.west.culture.length);
				// 	var location = result.west.culture[i]; 
				// 	var photo = location.photo;
				// 	var title = location.title;
				// 	var description = location.description;
				// 	var photoCredit = location.photoCredit;
				// 	var link = location.link;
				// 	console.log(photo);

				// 	// var image = photo;
				// 	// $(".heroImage").attr("src", image);
				// 	// $("h1.title").html(title);
