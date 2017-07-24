# percent-Levenshtein
Obtener el porcentaje de coincidencia entre dos cadenas, utilizando el algoritmo  Levenshtei.

La distancia de Levenshtein, distancia de edición o distancia entre palabras es el número mínimo de operaciones requeridas para transformar una cadena de caracteres en otra , [Distancia_de_Levenshtein](https://es.wikipedia.org/wiki/Distancia_de_Levenshtein)



###### Ejemplo:

```javascript
var s1 = "Hola Daniel muy bien ";
var s2 = "ola Dani tu bien";

var percent = percentLevenshtein(s1,s2);
```

> regresa 86.486% de coincidencia

