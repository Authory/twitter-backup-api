import { ExportedTwitterArchive } from './types/json-export'
import * as fs from 'fs'

// Twitter backup - exported JSON demo.
// 
// Media files exposed via the export will point to their original files on twitter.
// 
// Usage: ts-node exported-archive.ts

async function processArchive(file: string) {

  const archive: ExportedTwitterArchive = JSON.parse(fs.readFileSync(file, 'utf-8'))

  for(const content of archive.content) {
    console.log(`${content.type}: ${content.description}`)
  }
}

// Pass your file name.
processArchive("02e915a83d437ad9.json")