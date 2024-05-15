var images = [
	"../screen/img00.jpg",
	"../screen/img01.jpg",
	"../screen/img02.jpg",
	"../screen/img03.jpg",
	"../screen/img04.jpg",
	"../screen/img05.jpg",
	"../screen/img06.jpg",
	"../screen/img07.jpg",
	"../screen/img08.jpg",
	"../screen/img09.jpg",
	"../screen/img10.jpg",
	"../screen/img11.jpg",
	"../screen/img12.jpg",
	"../screen/img13.jpg",
	"../screen/img14.jpg",
	"../screen/img15.jpg",
	"../screen/img16.jpg",
	"../screen/img17.jpg",
	"../screen/img18.jpg",
	"../screen/img19.jpg",
	]

var reponses = [
	"Pologne",
	"Allemagne",
	"Belgique",
	"Espagne",
	"Grèce",
	"Norvège",
	"Royaume-Uni",
	"Maroc",
	"Suède",
	"Italie",
	"Japon",
	"Vietnam",
	"France",
	"Canada",
	"Inde",
	"Liban",
	"Mexique",
	"Sénégal",
	"Brésil",
	"Thaïlande"
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
		console.log(images[id]);
		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.fontSize = "30px" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		id++;
		raz();
	}

	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;

	}