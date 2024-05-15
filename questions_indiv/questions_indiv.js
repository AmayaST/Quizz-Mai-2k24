document.getElementById("masquer").style.display = "none";

var liste_questions = [
	"0",
	"Qui est né le 19 février 1995 ?",
	"Quel basketteur né le 23 février 1995 passé par l'université de Jayhawks du Kansas a été numéro 1 de draft ?",
	"Quel réalisateur né le 5 juillet 1972 a réalisé le film Les Infidèles en 2012 ?",
	"Quel acteur né le 12 juin 1985 a joué Jack Wilder dans Insaisissables (1 et 2) et Cole Aarons dans Scrubs ?",
	"Quelle actrice née le 19 février 2004 à Marbella qui a joué dans Enola Holmes et Stranger Things est surnomée The Millster ?",
	"Quel humoriste né le 29 novembre 1995 a sorti son deuxième spectacle en 2024 qui se nomme Par amour ?",
	"Dans quelle émission ont été découvert le chanteur né le 12 janvier 1993 et ses copains Niall, Louis, Liam et Harry ?",
	"Quel célèbre présentateur TV né le 12 juin 1967, en plus de la présentation de son émission phare, a aussi présenté des émissions de sport ?",
	"Dolly la célèbre brebis a vu le jour un 5 juillet, mais en quelle année ?",
	"Quel homme politique européen surnommé l'Immortel est décédé le 12 juin 2023 ?",
	"Quel auteur/réalisateur/scénariste est né le 19 février 1983 a co-écrit Pulsions avec l'humoriste qui est sur scène ?",
	"Quel est le prénom de l'actrice née le 23 février 1983 a joué dans la comédie Le diable s'habille en Prada et Oppenheimer ?",
	"De quelle ville a été maire l'ancien président né le 29 novembre 1932 ?",
	"Où a eu lieu le séisme le 12 janvier 2010 ?",
	"Quel homme politique a été élu président de son pays le 12 juin 1991 ?",
	"Quel écrivain né le 12 janvier 1628 a écrit La belle au bois dormant ?",
	"Quelle joueuse de tennis née le 5 juillet 1979 a gagné Wimbledon et l'Open d'Australie en 2006 ?",
	"Quelle femme politique française née le 23 février 1970 a récolté 0,56% des suffrages lors de l'élection présidentielle en 2012 ?",
	"Anna Faris (Erica) est née le 29 novembre 1976, comment s'appellent ses jumeaux dans Friends ?",
	"Dans quelle série a joué l'actrice Laëtitia Milot née le 5 juillet 1980 ?",
	"Quel boxeur né le 12 janvier 1944 a battu Mohammed Ali lors du combat du siècle en 71 à New York ?",
	"Quelle cuisinière est née le 23 février 1967 et a été élue meilleur femme chef du monde en 2015 ?",
	"Quel astronome né le 19 février 1473 a défendu la théorie de l'héliocentrisme ?",
	"Quel célèbre physicien autrichien né le 29 novembre 1803 a donné son nom à un effet qu'il a découvert ?",


	]
;


var liste_reponses = [
	"0",
	"Nikola Jokić",
	"Andrew Wiggins",
	"Gilles Lellouche - 0,5 points pour Dujardin car il est né le 13 juin de la même année :)",
	"Dave Franco",
	"Millie Bobby Brown",
	"Paul Mirabel",
	"X Factor",
	"Denis Brogniart",
	"1996",
	"Silvio Berlusconi",
	"Navo",
	"Emily",
	"Paris",
	"Haïti",
	"Boris Eltsine",
	"Charles Perrault",
	"Amélie Mauresmo",
	"Nathalie Arthaud",
	"Jack & Erica",
	"Plus belle la vie",
	"Joe Frazier",
	"Hélène Darroze",
	"Nicolas Copernic",
	"Christian Doppler",

]
;

var id_reponse = 0

function myFunction(clicked_id) {
	var Elt = document.getElementById("question");
	Elt.textContent = liste_questions[clicked_id];
	document.getElementById(clicked_id).id = "id" + clicked_id;
	id_reponse = clicked_id;
	document.getElementById("reponse").textContent= "";
}
;

function Afficher_reponse(clicked_id) {
	var Elt = document.getElementById("reponse");
	Elt.textContent = liste_reponses[id_reponse];

}