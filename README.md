Stand 23.12.2022

Der aktuelle Stand der APP beinhaltet folgende Funktionen:

-> Login Funktion mit dem Test-User mh2126@mci4me.at, Passwort: Qwerasdf12345!?
    Info: Registrierung funktioniert ebenso, jedoch nicht mit gmail Adressen, weil ein google Anmelden nicht möglich ist.

HomeScreen:
-> Startseite zeigt Energiespartipp des Tages
-> Startseite zeigt die Stromsparzeiten welche per Schnittstelle der energie.gv.at Seite gefetched werden
-> Eine Navigationsbar ermöglicht das wechseln zwischen den Seiten

Graph Page:
-> Die Seite 'Graph' zeigt ein GraphModul
-> Ein Eintragen eines Wertes in ein Feld ist Möglich
-> Dieser eine Wert wird als Startwert angezeigt

-> Die restlichen Werte, neben dem Ersten, sind randomisierte Werte die nur das Verhalten des Graphens zeigen sollen
-> Ebenso kann man noch kein Datum festlegen für seine Werte oder ähnliches,
    einzig die Funktion eines Feldes mit einem Übertragen des Wertes in den Graphen wurde bisher umgesetzt

-> Eine Calculation im Code berechnet aus dem aktuellen Strompreis, welcher auf einer anderen Seite erfasst werden kann
    und dem eingegebenen Wert, die aktuellen Stromkosten

Energiespartipps:
-> Die Seite 'Energiespartipps' zeigt eine Liste von Energiespartipps
-> Ein Scrollen durch die Energiespartipps ist möglich
-> Ganz unten befindet sich ein Button, welcher auf die Seite 'Energiespartipps hinzufügen' weiterleitet
-> Hier wird man auf seine Standard Mail App weitergeleitet, um einen Energiespartipp zu schreiben

Settings:
-> Die Seite 'Settings' zeigt die Einstellungen

-> Diese Seite ist noch nicht vollständig umgesetzt, jedoch ist es möglich den Strompreis einzugeben
-> Den ersten Zählerstand erfassen ist bisher nicht möglich, sondern das Feld sollte einfach ein Gefühl geben wie es aussehn soll

-> Benachrichtigung ausstellen ist leider auch noch nicht möglich, weil die Benachrichtigung noch nicht implementiert ist
-> Ausloggen ist möglich und wurde umgesetzt
-> Give us Feedback Button funktioniert und wurde umgesetzt
