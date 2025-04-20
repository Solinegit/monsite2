# Generics



# Exercice

1. Créez une classe `Queue` qui utilise les génériques. Cette classe doit avoir les méthodes suivantes :

- `enqueue(element: T)`: Ajoute un élément à la queue.
- `dequeue()`: Supprime et renvoie l'élément en tête de la queue. Si la queue est vide, cette méthode doit renvoyer undefined.
- `size()`: Renvoie le nombre d'éléments dans la queue.

2. Créez une instance de `Queue` qui stocke des nombres et une autre qui stocke des chaînes de caractères. Testez les méthodes `enqueue`, `dequeue` et `size` sur ces instances.

Voici un squelette de code pour vous aider à démarrer :

```typescript
class Queue<T> {
  // TODO: Implementez les methodes ici

  enqueue(element: T): void {
    // TODO
  }

  dequeue(): T | undefined {
    // TODO
  }

  size(): number {
    // TODO
  }
}

// Testez votre code ici
let numberQueue = new Queue<number>();
// TODO

let stringQueue = new Queue<string>();
// TODO
```


# Réponse

[app.ts](app.ts ":include :type=code ts")