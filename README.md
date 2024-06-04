**DOCUMENTACIÓN DE LA API**

**Endpoint GET /creatures:**

Descripción

- Este endpoint devuelve un objeto con una propiedad creatures que apunta a un array de criaturas.

Response

- 200 OK: Si todo funciona correctamente se emite una response con un objeto con una propiedad creatures que apunta al array de criaturas.

```
  {
  "creatures": [
  {
  "_id": "6655ed36ba3cab6ea0154bf9",
  "name": "Cthulhu",
  "lineage": "Primigenio",
  "imageUrl": "https://images3.alphacoders.com/135/1351783.png",
  "description": "Cthulhu es un personaje extraído de la literatura de H.P. Lovecraft. El autor formó, en algunos de sus relatos, una mitología del horror basada en la existencia de universos paralelos y seres provenientes de ellos —entre los que se encuentra Cthulhu— que existieron «antes del tiempo», y cuyo contacto con los humanos tiene terribles consecuencias.",
  "author": "H. P. Lovecraft",
  "augury": true,
  "alternativeText": "Pulpo interestelar muy feo y con muchos tentáculos"
  },
  {
  "_id": "6655efd7ba3cab6ea0154bfc",
  "name": "Hastur",
  "lineage": "Primigenio",
  "imageUrl": "https://i.etsystatic.com/11762585/r/il/f2a6f3/4052040586/il_fullxfull.4052040586_hhbx.jpg",
  "description": "Hastur es un personaje de los Mitos de Cthulhu creado por H.P. Lovecraft y otros autores. Es conocido también como 'El Rey de Amarillo' y está asociado con la locura y el caos.",
  "author": "H. P. Lovecraft",
  "augury": true,
  "alternativeText": "Ser cósmico con aspectos de locura y caos"
  },
  {
  "_id": "6655f09cba3cab6ea0154bff",
  "name": "Azathoth",
  "lineage": "Primigenio",
  "imageUrl": "https://wallpapercave.com/wp/wp9634956.jpg",
  "description": "Azathoth es una entidad cósmica de la mitología creada por H.P. Lovecraft. Es conocido como el 'Caos Nuclear' y 'el Sultán Demonio', y es el centro del universo, de donde toda la realidad emana y a donde finalmente regresará.",
  "author": "H. P. Lovecraft",
  "augury": true,
  "alternativeText": "Dios primordial de la locura y el caos cósmico"
  },
  {
  "_id": "6655f18aba3cab6ea0154c01",
  "name": "Nyarlathotep",
  "lineage": "Primigenio",
  "imageUrl": "https://wallpapercave.com/wp/wp10690552.jpg",
  "description": "Nyarlathotep es una entidad cósmica de la mitología creada por H.P. Lovecraft, conocido por su habilidad para cambiar de forma y su tendencia a sembrar la locura.",
  "author": "H. P. Lovecraft",
  "augury": true,
  "alternativeText": "El Caos Reptante"
  }
  ]
  }
```

- 404 Not found: Se responderá así si el path es incorrecto.

```
  {
  "error": "Not found"
  }
```
