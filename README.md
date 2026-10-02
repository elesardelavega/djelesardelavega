# Elesar de la Vega DJ

Web estática de **Elesar de la Vega** preparada para GitHub Pages.

## Publicación en GitHub Pages

Configurar el repositorio con:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/docs`

La web publicada está en la carpeta `docs/`.

## Prueba local

Desde esta carpeta:

```powershell
python -m http.server 8091 --directory docs
```

Abrir:

```text
http://localhost:8091/
```
