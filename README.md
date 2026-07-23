# Brief de Proyecto — Sitio Web para Negocio de Tarimas de Madera Reciclada

## 1. Resumen del proyecto

**Tipo de proyecto:** Landing page (página única).

El desarrollador trabajará sobre una **plantilla base de HTML ya existente**, adaptándola a este negocio. Ya se entregó por separado un prompt inicial para adaptar dicha plantilla. Este documento es el brief con la información del negocio, el branding y los requisitos visuales que deben aplicarse sobre esa plantilla.

> **Importante:** este README **no define la estructura de secciones** de la página. La estructura ya existe en la plantilla base y debe respetarse; aquí solo se entrega contenido, marca y estilo.

---

## 2. Información del negocio

- **Rubro:** Venta y reciclaje de tarimas (pallets) de madera.
- **Teléfono de contacto:** +52 56 4122 5210
- **Nombre comercial sugerido:** *EcoTarimas MX*
- **Ubicación y redes sociales:** no se proporcionaron — se omiten intencionalmente del sitio.

### Nota sobre el origen de los datos

El cliente solo proporcionó el **teléfono** y el **rubro** del negocio. La carpeta `imagenes/` fue revisada en su totalidad y contiene únicamente fotografías de producto (pilas de tarimas de madera en patio/bodega); no incluye logo, documentos ni ningún otro dato del negocio.

Por lo tanto, la siguiente información fue generada de forma creativa para completar el brief y debe tratarse como **propuesta editable**, no como dato confirmado por el cliente:

- Nombre comercial ("EcoTarimas MX")
- Descripción y listado de servicios
- Horario de atención

El desarrollador puede ajustar estos textos libremente si el cliente confirma otros datos más adelante.

### Servicios / productos (propuesta)

- Venta de tarimas de madera recicladas (medidas estándar y a la medida)
- Compra de tarimas y pallets usados
- Reparación y restauración de tarimas
- Fabricación de tarimas nuevas bajo pedido
- Venta y entrega por mayoreo para empresas (logística, manufactura, comercio)

### Horario de atención (propuesto)

Lunes a sábado, 9:00 a.m. – 6:00 p.m.

### Propuesta de valor

Negocio enfocado en **economía circular**: da una segunda vida a la madera mediante la compra, reparación y reventa de tarimas, ofreciendo una alternativa más económica y sustentable frente a las tarimas nuevas.

---

## 3. Branding

### Paleta de colores

Extraída de los tonos reales de la madera vista en las fotos de producto, combinada con una paleta corporativa oscura para el look premium/enterprise solicitado.

| Uso | Color | HEX |
|---|---|---|
| Primario (marca / madera) | Marrón madera | `#8B5A2B` |
| Primario claro (acentos, hover) | Madera clara | `#C9A66B` |
| Secundario / fondo oscuro | Carbón corporativo | `#1C1C1A` |
| Acento (sustentabilidad / reciclaje) | Verde eco | `#3F7D58` |
| Fondo claro | Blanco cálido | `#F7F3EC` |
| Texto secundario / grises | Gris neutro | `#5C5750` |

### Tipografía sugerida

- **Encabezados:** [Sora](https://fonts.google.com/specimen/Sora) — geométrica, moderna, con carácter tech/premium.
- **Cuerpo de texto:** [Inter](https://fonts.google.com/specimen/Inter) — alta legibilidad, estándar en sitios corporativos y de gran escala.

### Identidad visual

- Estética que combina la calidez de la madera (color primario) con un fondo corporativo oscuro/neutro, transmitiendo solidez y confianza (enterprise) sin perder cercanía con el producto físico.
- El verde de acento debe usarse con moderación, para reforzar el mensaje de reciclaje/sustentabilidad (en íconos, detalles, CTAs secundarios).
- Fotografía de producto real (tarimas apiladas) como recurso visual principal, priorizando un tratamiento limpio y minimalista por encima de recargar la página con elementos gráficos.

---

## 4. Estilo visual obligatorio

El sitio debe transmitir:

- **Estilo premium, enterprise y corporativo de marca.**
- **Nivel big tech:** elegante y a la vez minimalista.

Evitar recursos visuales genéricos o "de plantilla gratuita"; el resultado debe verse como el sitio de una empresa establecida y confiable.

---

## 5. Efectos y animaciones requeridos

- Efectos visuales y **animaciones de scroll** (elementos que aparecen/se transforman al hacer scroll).
- **Pantalla de carga (preloader)** con spinner + logo/marca del negocio antes de mostrar el sitio.
- **Animaciones en el título del hero**, por ejemplo: efecto máquina de escribir (typewriter), cambio de color en las letras u otros efectos tipográficos similares.

---

## 6. Instrucciones sobre assets

- **No existe un logo entre los archivos entregados.** La carpeta `imagenes/` contiene únicamente fotografías de producto (tarimas apiladas), sin logo ni ningún archivo de marca.
  - Mientras no se reciba un logo oficial del cliente, usar un **wordmark tipográfico** como marca temporal: el nombre comercial en la tipografía de encabezados (Sora), en el color primario (`#8B5A2B`), tanto para el header como para el preloader.
  - **Si en el futuro el cliente entrega un logo con fondo**, se le debe remover el fondo antes de usarlo en el sitio (header, favicon, preloader, etc.).
- Las fotografías incluidas en `imagenes/` son fotografía de producto real y deben usarse como recurso visual principal del sitio (hero, galería, secciones de servicio, etc., según lo permita la plantilla base).
  - Seleccionar las 2–3 imágenes de mejor calidad/composición y descartar o recortar las que tengan elementos ajenos al negocio (personas, vehículos, calle) en primer plano.
  - Optimizar todas las imágenes para web (comprimir y/o convertir a formato `.webp`) antes de integrarlas, priorizando tiempos de carga rápidos.

---

## 7. Nota para el desarrollador

Este proyecto está pensado para construirse de forma iterativa con **Claude Code**: el desarrollador puede darle instrucciones a Claude las veces que sea necesario (ajustar textos, colores, animaciones, disposición de imágenes, etc.) hasta lograr el resultado deseado. No es necesario acertar todo a la primera iteración.

---

## 8. Checklist para el desarrollador

- [ ] Confirmar con el cliente (o mantener como propuesta) el nombre comercial, los servicios y el horario de atención.
- [ ] Aplicar la paleta de colores de marca sobre la plantilla base.
- [ ] Aplicar la tipografía sugerida (Sora para encabezados, Inter para cuerpo).
- [ ] Crear un wordmark tipográfico temporal como marca, ya que no se recibió un logo.
- [ ] Integrar el teléfono de contacto (+52 56 4122 5210) en el sitio.
- [ ] Seleccionar, recortar y optimizar (webp/compresión) las fotografías de producto de `imagenes/`.
- [ ] Implementar pantalla de carga (preloader) con spinner + wordmark/logo.
- [ ] Implementar animación de tipo máquina de escribir (o efecto tipográfico equivalente) en el título del hero.
- [ ] Implementar animaciones/efectos de scroll a lo largo de la página.
- [ ] Verificar que el sitio se vea premium, corporativo y minimalista (nivel "big tech").
- [ ] Iterar con Claude Code las veces que sea necesario hasta lograr el resultado final.
