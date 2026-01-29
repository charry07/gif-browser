# 📦 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar tu aplicación de búsqueda de GIFs en GitHub Pages de manera automática usando GitHub Actions.

## 📋 Tabla de Contenidos

- [Requisitos Previos](#-requisitos-previos)
- [Configuración Inicial](#-configuración-inicial)
- [Habilitar GitHub Pages](#-habilitar-github-pages)
- [Configurar Secretos](#-configurar-secretos)
- [Proceso de Despliegue](#-proceso-de-despliegue)
- [Verificación](#-verificación)
- [Solución de Problemas](#-solución-de-problemas)

## ✅ Requisitos Previos

Antes de comenzar, asegúrate de tener:

1. **Cuenta de GitHub** con acceso de administrador al repositorio
2. **API Key de Giphy** - Obtén una gratis en [Giphy Developers](https://developers.giphy.com/)
3. **Repositorio** clonado y código subido a GitHub

## 🔧 Configuración Inicial

El proyecto ya incluye la configuración necesaria para el despliegue:

### Archivos de Configuración

1. **`.github/workflows/deploy.yml`** - Workflow de GitHub Actions
   - Se ejecuta automáticamente en push a `master`
   - Puede ejecutarse manualmente desde la interfaz de GitHub
   - Compila el proyecto y lo despliega en GitHub Pages

2. **`vite.config.ts`** - Configuración de Vite
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/gif-browser/', // ⚠️ Importante: debe coincidir con el nombre del repo
   })
   ```

## 🌐 Habilitar GitHub Pages

### Paso 1: Acceder a la Configuración

1. Ve a tu repositorio en GitHub: `https://github.com/[tu-usuario]/gif-browser`
2. Haz clic en la pestaña **Settings** (⚙️ Configuración)

### Paso 2: Configurar Pages

1. En el menú lateral izquierdo, busca y haz clic en **Pages**
2. En la sección **Build and deployment**:
   - **Source**: Selecciona **GitHub Actions** (NO "Deploy from a branch")
3. Guarda los cambios

![GitHub Pages Configuration](https://docs.github.com/assets/cb-49777/mw-1440/images/help/pages/creating-custom-github-actions-workflow-to-publish-site.webp)

> 💡 **Nota**: Si seleccionas "Deploy from a branch" en lugar de "GitHub Actions", el workflow no funcionará correctamente.

## 🔐 Configurar Secretos

La aplicación necesita una API key de Giphy para funcionar. Debes agregarla como secreto del repositorio:

### Paso 1: Obtener API Key de Giphy

1. Ve a [Giphy Developers](https://developers.giphy.com/)
2. Crea una cuenta o inicia sesión
3. Haz clic en **Create an App**
4. Selecciona **API** como tipo de aplicación
5. Completa la información requerida
6. Copia tu **API Key**

### Paso 2: Agregar el Secreto en GitHub

1. En tu repositorio, ve a **Settings** → **Secrets and variables** → **Actions**
2. Haz clic en **New repository secret**
3. Completa el formulario:
   - **Name**: `VITE_GIF_API_KEY`
   - **Secret**: Pega tu API key de Giphy
4. Haz clic en **Add secret**

![Add Secret](https://docs.github.com/assets/cb-28889/mw-1440/images/help/settings/actions-secrets-add-secret.webp)

> ⚠️ **Importante**: El nombre del secreto DEBE ser exactamente `VITE_GIF_API_KEY` (distingue mayúsculas y minúsculas).

## 🚀 Proceso de Despliegue

### Despliegue Automático

El despliegue se ejecuta automáticamente cuando:

1. Haces push a la rama `master`:
   ```bash
   git add .
   git commit -m "Tu mensaje de commit"
   git push origin master
   ```

2. El workflow de GitHub Actions se ejecutará automáticamente:
   - ✅ Instala dependencias
   - ✅ Compila el proyecto
   - ✅ Despliega en GitHub Pages

### Despliegue Manual

También puedes ejecutar el despliegue manualmente:

1. Ve a la pestaña **Actions** en tu repositorio
2. Selecciona el workflow **Deploy to GitHub Pages**
3. Haz clic en **Run workflow**
4. Selecciona la rama `master`
5. Haz clic en **Run workflow** (verde)

![Run Workflow Manually](https://docs.github.com/assets/cb-32937/mw-1440/images/actions/actions-workflow-dispatch.webp)

## ✅ Verificación

### Monitorear el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow ejecutándose (🟡 amarillo) o completado (✅ verde)
3. Haz clic en el workflow para ver los detalles y logs

### Acceder a tu Sitio

Una vez que el despliegue se complete (status ✅ verde):

**URL de tu aplicación**:
```
https://[tu-usuario].github.io/gif-browser/
```

Por ejemplo, si tu usuario es `charry07`:
```
https://charry07.github.io/gif-browser/
```

> 💡 **Tip**: Puedes encontrar la URL exacta en:
> - Settings → Pages → "Your site is live at..."
> - En los detalles del workflow, en el paso "Deploy to GitHub Pages"

## 🔍 Solución de Problemas

### El workflow no se ejecuta

**Problema**: Hiciste push pero no aparece el workflow en Actions.

**Soluciones**:
1. Verifica que GitHub Pages esté habilitado con **GitHub Actions** como source
2. Confirma que estás haciendo push a la rama `master`
3. Verifica que el archivo `.github/workflows/deploy.yml` existe en tu repositorio

### Build falla con error de TypeScript

**Problema**: El workflow falla en el paso "Build" con errores de TypeScript.

**Soluciones**:
1. Ejecuta localmente: `pnpm build` para ver el error completo
2. Corrige los errores de tipos
3. Haz commit y push de nuevo

### Build falla sin API key

**Problema**: Error: "VITE_GIF_API_KEY is not defined"

**Soluciones**:
1. Verifica que agregaste el secreto `VITE_GIF_API_KEY`
2. Confirma que el nombre está escrito correctamente (sensible a mayúsculas)
3. Intenta eliminar y recrear el secreto

### El sitio carga pero no muestra GIFs

**Problema**: La página se ve pero no carga GIFs o muestra errores en consola.

**Soluciones**:
1. Abre la consola del navegador (F12) y verifica errores
2. Confirma que tu API key de Giphy sea válida
3. Verifica que la API key no tenga límites de dominio
4. Revisa si alcanzaste el límite de requests de tu plan

### Errores 404 en assets (CSS, JS, imágenes)

**Problema**: La página carga pero falta CSS/JS, errores 404 en la consola.

**Soluciones**:
1. Verifica que `vite.config.ts` tenga: `base: '/gif-browser/'`
2. El `base` debe coincidir EXACTAMENTE con el nombre del repositorio
3. Si renombraste el repo, actualiza el `base` en `vite.config.ts`
4. Haz rebuild y redeploy

### El sitio muestra contenido antiguo

**Problema**: Los cambios no se reflejan en el sitio desplegado.

**Soluciones**:
1. Limpia el caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
2. Verifica que el workflow se haya completado exitosamente
3. Espera unos minutos, GitHub Pages puede tardar en actualizar
4. Intenta en modo incógnito/privado

## 📚 Recursos Adicionales

- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [Giphy API Documentation](https://developers.giphy.com/docs/api/)

## 🆘 ¿Necesitas Ayuda?

Si sigues teniendo problemas:

1. Revisa los logs del workflow en la pestaña Actions
2. Busca el error específico en Google o Stack Overflow
3. Abre un issue en el repositorio con:
   - Descripción del problema
   - Captura de pantalla del error
   - Logs del workflow (si aplica)

---

✅ **¡Listo!** Tu aplicación de búsqueda de GIFs debería estar funcionando en GitHub Pages.

🌟 **Recuerda**: Cada vez que hagas push a `master`, el sitio se actualizará automáticamente.
