# Modal_HRnet

![logo](public/favicon.svg)

---

- ![Author](<https://img.shields.io/badge/Author-Souad Mouatakide-">)
- ![GitHub P14_HRnet_React size](https://img.shields.io/github/repo-size/sousouben/modal_hrnet)
- ![GitHub top language](https://img.shields.io/github/languages/top/sousouben/modal_hrnet)
- ![GitHub language count](https://img.shields.io/github/languages/count/sousouben/modal_hrnet)

---

# Composant modal

Composant minimaliste d'une modal pour React.

---

## Prérequis

- Un éditeur de texte comme [VsCode](https://code.visualstudio.com/download)
- [Node.js > v.16](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

---

### Installation de la modal

```bash
npm install modal_hrnet
yarn install modal_hrnet
```

---

#### `Modal`

- `message` \* : Le message que vous devez afficher
- `closeModal` \* : Donne l'ordre de fermer la modal
- `bcgModal` \* : Donne la couleur de fond de la modal
- `close` \* : Donne la couleur et la forme du bouton de fermeture de la modal
- `p` \* : Donne la couleur et la taille du message de la modal

---

##### Exemple

```javascript
import React, { useState } from "react";
import { Modal } from "modal_hrnet";

function ButtonCreateEmployee() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button
        type="submit"
        className="openModal"
        onClick={() => {
          setModal(true);
        }}
      >
        Save
      </button>
      {modal && (
        <Modal message={"employee created"} closeModal={setModal} />
      )}
    </div>
  );
}

export ButtonCreateEmployee;
```
