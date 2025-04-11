#Gym VitalFit
Sitio web profesional y responsive para un gimnasio moderno. Incluye páginas informativas, sección de clases, entrenadores, contacto, precios y blog. Este proyecto fue desarrollado utilizando **HTML5** y **CSS3**, con énfasis en accesibilidad, diseño responsive y efectos visuales avanzados sin JavaScript.

---
---

##  Objetivos del proyecto

- Crear una página web moderna para un gimnasio.
- Aplicar buenas prácticas de desarrollo web (semántica, estructura, estilos externos).
- Utilizar **solo HTML y CSS** (sin JavaScript).
- Implementar funcionalidades avanzadas como:
  - Diseño responsive.
  - Efectos visuales atractivos.
  - Validación de formularios.
  - Accesibilidad.
  - Modo oscuro.
  - Animaciones y transiciones suaves.
  - Componentes reutilizables y adaptables.

---

## Tecnologías utilizadas

- **HTML5**: Etiquetas semánticas, formularios, multimedia.
- **CSS3**: Flexbox, Grid, animaciones, `clip-path`, `scroll-snap`, efectos `hover`, modo oscuro, media queries.
- **Sin JavaScript**: Toda la interactividad y efectos visuales se lograron únicamente con CSS.
**JavaScript (Vanilla)**: Validaciones, efectos visuales, lógica de interacción.


---

## 📁 Estructura del proyecto

```
sitio_gimnasio/
│
├── index.html              # Página de inicio
├── clase.html              # Página con las clases del gimnasio
├── entrenador.html         # Sección de entrenadores
├── contacto.html           # Formulario de contacto
├── precio.html             # Tabla de precios
├── blog.html               # Artículos y consejos
│
├── css/                    # Estilos CSS por página
│   ├── blog.css
│   ├── clases.css
│   ├── contacto.css
│   └── ...
│
├── assets/
│   ├── img/ ...              # Imágenes de fondo, clases, entrenadores
│   ├── iconos/ ...             # Íconos de redes sociales
│   └── video/  ...            # Video de fondo en la portada
│
└── .gitignore              # Ignorar archivos innecesarios en repositorio
```

---

## Funcionalidades implementadas

### ✅ Diseño responsive
Aunque el proyecto no es completamente responsive, se implementaron algunas prácticas de adaptabilidad:
- Uso de **media queries** para adaptar el contenido a móviles, tablets y escritorio.
- Layout con **Flexbox y Grid**.
- Tipografías y botones escalables.
- Uso de `max-width` y `margin: auto`** para centrar y contener elementos en pantallas grandes.
- `flex-wrap` permite que los contenedores reorganicen su contenido si el ancho no alcanza.
- Unidades relativas (`em`, `%`, `rem`)** en márgenes, paddings y fuentes.
- Media queries básicas aplicadas en ciertos puntos para adaptar tarjetas o textos:

```css``
@media screen and (max-width: 768px) {
    .tarjeta {
        flex-direction: column;
    }
}

### ✅ Efectos CSS avanzados
- **Transiciones suaves** (`transition`) en botones y tarjetas.
- **Animaciones** (`@keyframes`) para entradas de texto e imágenes.
- Uso de `clip-path` para recortes creativos en secciones.
- **Scroll snap** para navegar secciones con anclajes precisos.
- **Hover effects** en tarjetas, botones e imágenes.

### ✅ Accesibilidad
- Uso de etiquetas semánticas: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`.
- Contrastes adecuados para usuarios con baja visión.
- Estados de foco (`:focus-visible`) definidos para navegación con teclado.
- Textos alternativos (`alt`) en todas las imágenes.
- Iconos accesibles mediante `aria-label` o `title`.
- Navegación clara con estructura jerárquica.

### ✅ Formularios
- Validación en tiempo real usando solo atributos HTML (`required`, `type`, `pattern`).
- Campos con `placeholder`, etiquetas `<label>`, y mensajes de ayuda.
- Diseño atractivo con estilos adaptativos en diferentes dispositivos.

### ✅ Modo oscuro
- Implementado con la clase `.dark-mode` y variables CSS (`:root`) para cambiar colores dinámicamente.
- Cambio visual suave con transiciones.

### ✅ Otros elementos destacados
- **Video de fondo** en la página principal.
- **Mega menú** de navegación en el header.
- **Tarjetas interactivas** con hover para clases y entrenadores.
- **Redes sociales** enlazadas con íconos visuales.
- **Formulario de suscripción a newsletter**.
- **Mapa interactivo** (con imagen como placeholder).

---
## Decisiones Técnicas

- **Separación por módulos** para facilitar mantenimiento.
- **Uso de HTML semántico** para accesibilidad.
- **JavaScript nativo** para mantener ligereza y control del código.
- **Variables CSS** para consistencia visual.
- **Validaciones personalizadas** con feedback inmediato.

---

##  Páginas HTML

**index.html** es la página de entrada del sitio. Contiene:

- Una estructura `header > main > footer`.
- Un video incrustado promocional (en `<section class="video">`).
- Navegación principal con enlaces a otras páginas del sitio.
- Contenido con presentación del gimnasio y llamados a la acción.


**clase.html** presenta las clases ofrecidas por el gimnasio:

- Galería de clases (ej: musculacion, yoga, etc) en contenedores tipo tarjetas.
- Imágenes destacadas y títulos.
- Secciones con `section.clases` divididas visualmente por estilo.


**entrenador.html** muestra perfiles del equipo:

- Tarjetas de entrenador con foto, nombre, especialidad y redes sociales.
- Uso de `flexbox` para alinear horizontalmente o en grilla.


**precio.html** detalla planes del gimnasio:

- Tres tarjetas de planes: Básico, Intermedio, Premium.
- Comparación visual con diferentes colores y beneficios.
- Cada tarjeta es interactiva (hover + JS).


**contacto.html** contiene un formulario de contacto:

- Campos: nombre, email, mensaje, teléfono.
- Validación JavaScript al escribir.
- Etiquetas `<label>` asociadas para accesibilidad.


**blog.html** contiene un listado de entradas:

- Artículos con imágenes, títulos, descripciones.
- Filtro de entradas por categoría con botones ocultos (`radio`) y `label`.
- Aparición progresiva al hacer scroll (scroll reveal).



## CSS y Diseño

**index.css** define estilos específicos para la página principal:

- Posicionamiento del video de fondo.
- Estilo para la sección de bienvenida, menú, botones y llamados a la acción.


**clases.css** incluye estilos para las tarjetas de clases:

- Uso de `grid` o `flex` para organizar imágenes.
- Colores de fondo alternos para secciones.


**entrenadores.css**:

- Diseña tarjetas de entrenador.
- Ajuste de imágenes circulares o cuadradas.
- Efectos hover en íconos sociales.


**precios.css**:

- Estilos para las tarjetas de planes.
- Uso de colores para destacar el plan Premium.
- Hover para ampliar o resaltar la tarjeta activa.


**contacto.css**:

- Layout de formulario centrado.
- Colores e íconos para inputs validados.
- Errores en rojo, confirmaciones en verde.


**blog.css**:

- Estilos para tarjetas de entrada del blog.
- Filtros visuales por categoría.
- Animaciones ligeras para entrada de tarjetas.


**styles.css** contiene estilos compartidos:

- Variables CSS (colores, tamaños).
- Reset CSS (márgenes, paddings, box-sizing).
- Tipografía y estilos base de botones, inputs y fondos.
- Cada página tiene su **archivo CSS separado**.
- Se define una hoja `styles.css` compartida con:
  - Variables CSS (`:root { --color-principal, etc. }`)
  - Estilos base comunes como reset, tipografía, botones.
- **Diseño adaptable** (no totalmente responsive) con `max-width` y media queries básicas.
- Uso de `flexbox` y `grid` para organización visual de tarjetas y secciones.


---
##  JavaScript - Explicación Técnica

### 'contacto.js'

- **Validación de formularios en tiempo real**.
- Usa expresiones regulares para validar:
  - Nombre (solo letras)
  - Email (formato válido)
  - Teléfono (números y formato)
- Previene el envío si hay campos inválidos y muestra errores en vivo.

```js
form.addEventListener("submit", e => {
  if (!validarCampos()) {
    e.preventDefault();
    mostrarErrores();
  }
});
```

---

### `precios.js`

- Interacción con tarjetas de precios.
- Agrega/quita clases activas con `classList.toggle`.
- Resalta visualmente el plan elegido para mejorar la UX.

---

### `blog.js`

- **Scroll reveal** con `IntersectionObserver`: anima las tarjetas al entrar en pantalla.
- Filtrado de entradas por categoría usando radio buttons y etiquetas visibles.
- Reorganiza el DOM según la categoría elegida.

---

### `theme-toggle.js`

- Alterna entre modo claro/oscuro.
- Usa `localStorage` para mantener la preferencia entre sesiones.
- Aplica clases CSS como `.dark-mode` para cambiar la apariencia general.

