var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");
var h2Content = document.getElementById("h2-content");
var pContent = document.getElementById("p-content");
var toggledMenu = menuToggle.addEventListener("click", function()
{
     for(var activated = 0; activated < activeElements.length; activated++)
	 {
          activeElements[activated].classList.toggle("active");
     }
})

var navs = [];
for(var i = 1; i <= 4; i++)
{
	var nav = document.getElementById("li" + i.toString());
	//nav.addEventListener("click", changeScreen(i));
	navs.push(nav);
}

function changeScreen(nr)
{
	var p;
	var h2;
	switch(nr)
	{
		case 1: 
		{
			h2 = "About";
			p = "Depeche Mode - a British musical group from the circle of electronic music and alternative rock, which was founded in 1980 in Basildon "
			+ "in Great Britain. Currently members of the band are Dave Gahan (vocals), Andrew Fletcher (keyboards, bass) and Martin Gore (keyboards, "
			+ "electric guitar and vocals). All three have belonged to the group since its inception. The group\'s name was based on inspiration from "
			+ "a French fashion magazine, suggested by Gahan. The creation of Depeche Mode was preceded by the composition Composition of Sound group. "
			+ "In 2006 the band won the MTV Europe Music Awards in the category best band.";
			console.log("case 1");
			
		}
		break;
		case 2: 
		{
			h2 = "BC";
			p = "Black Celebration - the sixth album by Depeche Mode (eighth in the US) released in 1986."
			+ "From the musical and lyrics side to the dark, gloomy and pessimistic album.";
			console.log("case 2");
			
		}
		break;
		case 3: 
		{
			h2 = "SOFAD";
			p = "Songs of Faith and Devotion - the eighth album of the Depeche Mode group, released on March 22, 1993." 
			+ "The album was defined as another breakthrough in the band\'s work. The Devotional Tour lasted over a year. It led to many"
			+ "of misunderstandings, with the consequence that Alan Wilder left the band on June 1, 1995. Box set Box of Faith and Devotion has also "
			+ "been released containing all editions from the album session. The song \"I Feel You\" contains real drums that have been processed into "
			+ "drum loops. The piano is also used as part of the outro song \"Mercy in You\". In the beginning \"Judas\" Irish bagpipes were used, and "
			+ "\"Walking in My Shoes\" it has piano parts that were processed by a guitar processor to add interference. However, when recording ballads"
			+ "\"Condemnation\" Mark Ellis and Dave Gahan clapped, Alan Wilder hit the drum and Martin Gore played the organ."
			+ "The album has many recordings on an electric guitar, without playing technique. Parts of the guitar were processed by Leslie Ton cabinets. ";
			console.log("case 3");
			
		}
		break;
		case 4: 
		{
			h2 = "PTA";
			p = "Playing the Angel - the eleventh album of the Depeche Mode group released in 2005."
			+ "The album was released in addition to the usual CD media, also in a version consisting of two disks: hybrid SACD and DVD. The SACD "
			+ "disc contained the album Playing the Angel, while the DVD - the album Playing the Angel mixed in stereo and 5.1. In addition, it includes "
			+ "such extras as the movie Making the Angel, the music video Precious, Clean and photo gallery.";
			console.log("case 4");
			
		}
		break;
		default: {}
	}
	
	pContent.innerHTML = p;
	h2Content.innerHTML = h2;
	for(var i = 1; i <= 4; i++)
	{
		var nav = document.getElementById("li" + i.toString());
		//(i == nr) ? nav.setActive(): ;
		
	}
}



