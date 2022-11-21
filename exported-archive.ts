import { ExportedTwitterArchive } from './types/json-export'
import * as fs from 'fs'

// Twitter backup - exported JSON demo.
// 
// Usage: ts-node exported-archive.ts

async function processArchive(file: string) {

  const archive: ExportedTwitterArchive = JSON.parse(fs.readFileSync(file, 'utf-8'))

  for(const content of archive.content) {
    console.log(`${content.type}: ${content.description}`)
  }
}

processArchive("02e915a83d437ad9.json")