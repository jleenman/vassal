import { copyFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

const outputDir = join(process.cwd(), '.output', 'public')
const rendered404 = join(outputDir, '404', 'index.html')
const pages404 = join(outputDir, '404.html')

await stat(rendered404)
await copyFile(rendered404, pages404)

console.log('Prepared GitHub Pages fallback: copied /404/index.html to /404.html')
