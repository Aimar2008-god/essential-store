# Guía para publicar y vender ESSENTIAL

## Publicar la tienda

1. Sube los cambios a la rama `main` del repositorio de GitHub.
2. En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions** como origen.
3. El flujo de publicación prepara y publica solo la tienda: páginas HTML, estilos, scripts, capturas y créditos de fotos. No copia las carpetas fuente ni los ZIP de venta.
4. Cuando termine el flujo en **Actions**, abre la dirección que aparece en **Settings → Pages** y revisa la página pública.

El repositorio es público, así que cualquier persona puede consultar el código de la tienda en GitHub. El navegador también recibe el HTML, CSS y JavaScript de cualquier web estática. Las carpetas editables de las plantillas y sus ZIP no forman parte de la web pública ni del repositorio.

## Activar compra y entrega automática

1. Crea un producto por plantilla en tu proveedor de ventas, establece su precio y sube el ZIP correspondiente a su área privada de entrega.
2. Activa la entrega digital por correo y confirma que el comprador recibe el enlace después de pagar.
3. Comprueba que las cinco URL de checkout en `store/js/payment-links.js` corresponden al producto y ZIP correctos.
4. Revisa que `SUPPORT_EMAIL` sea el correo que quieres usar para consultas. No procesa los pagos.
5. Haz una compra de prueba y comprueba el pago, el recibo y la descarga automática antes de anunciar la tienda.

## Mantener privados los archivos de las plantillas

El código editable está en las carpetas locales dentro de `Nueva carpeta/`; los ZIP de venta están en `delivery-packages/`. `.gitignore` excluye esa carpeta y los ZIP. El flujo de GitHub Pages publica una lista cerrada de archivos de `store/`, así que no añadas el código de las plantillas ni los ZIP a esa carpeta ni fuerces su inclusión en Git.

Las páginas públicas de vista previa muestran las capturas que has proporcionado. No cargan las páginas HTML de las plantillas descargables.

## Antes de anunciar ventas

- Añade las páginas de licencia de uso, privacidad, condiciones de venta y reembolsos que necesite tu negocio.
- Revisa los precios y sustituye los nombres, servicios, direcciones y precios de muestra en las plantillas descargables.
- Comprueba los créditos y licencias de las fotos en `store/image-credits.md` y en cada paquete.
- Al actualizar una plantilla, vuelve a crear su ZIP y reemplázalo en el área privada de entrega de tu proveedor.

Los créditos de las fotos que aparecen en las capturas están disponibles en la tienda pública.
