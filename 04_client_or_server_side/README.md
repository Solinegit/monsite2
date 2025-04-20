# 04_Client_or_server_side


# exercice : calcul côté client ou côté serveur ?

Regardez bien tous les fichiers source fournis dans le projet Astro. index.astro et moduleWeatherServerSide.ts sont dans le dossier src/pages et app.ts ainsi que moduleWeatherClientSide.ts sont dans le dossier src/scripts.

Ajoutez des console.log("message") juste avant les return (en changeant "message" par ce que vous voulez) dans les fonctions getCurrentHumidity getCurrentWind getCurrentTemperature et getCurrentCloudCover.

Où s'affichent les 4 messages ? Dans le terminal du serveur Astro ou dans la console du navigateur ? Pourquoi ?

Ouvrez l'onglet "Network" de la console de développement de votre navigateur. Rechargez la page. Observez que DEUX requêtes de type FETCH sont envoyées au serveur api.open-meteo.com.

![network](network.png)

Répondez aux question dans un fichier reponses.md à la racine de votre projet.



# Solution 


Lorsque j'ajoute le console.log() les messages des fonction effectuées coté serveur apparraissent dans le terminal vs code

Les console.log() des fonctions effectuées coté client apparaissent dans la console du navigateur où j'ouvre la page web.


Dans la console du navigateur il y a effectivement deux fetch : un fait par getCurrentHumidity et l'autre par GetCurrentWind



# Code

Fichier index.astro

[index.astro](index.astro ":include :type=code html")



Fichier app.ts

[app.ts](app.ts ":include :type=code ts")


Ficher moduleWeatherClientSide.ts

[moduleWeatherClientSide.ts](moduleWeatherClientSide.ts ":include :type=code ts")


Ficher moduleWeatherServerSide.ts

[moduleWeatherServerSide.ts](moduleWeatherServerSide.ts ":include :type=code ts")