# Scripts Disponibles

## Scripts de Desarrollo

### `npm run dev`
Inicia el servidor de desarrollo con limpieza automática del cache.
- Limpia el directorio `.next` antes de iniciar
- Previene problemas de cache corrupto
- **Recomendado para uso diario**

### `npm run dev:no-clean`
Inicia el servidor de desarrollo sin limpiar el cache.
- Más rápido si el cache está funcionando correctamente
- Usar solo cuando estés seguro de que no hay problemas de cache

## Scripts de Producción

### `npm run build`
Genera el build de producción con limpieza automática del cache.
- Limpia el directorio `.next` antes de compilar
- Garantiza un build limpio

### `npm run start`
Inicia el servidor de producción.
- Requiere ejecutar `npm run build` primero

## Scripts de Limpieza

### `npm run clean`
Elimina el directorio `.next` (cache de Next.js).
- Útil para resolver problemas de compilación
- Se ejecuta automáticamente con `dev` y `build`

### `npm run clean:all`
Limpieza completa del proyecto.
- Elimina `.next`, `node_modules` y `package-lock.json`
- Reinstala todas las dependencias
- **Usar solo cuando sea necesario** (tarda más tiempo)

## Scripts de Calidad

### `npm run lint`
Ejecuta el linter de Next.js para verificar problemas de código.

## Recomendaciones

- **Desarrollo normal**: `npm run dev`
- **Problemas de cache**: Ya se resuelven automáticamente
- **Problemas con dependencias**: `npm run clean:all`
- **Build para producción**: `npm run build`
