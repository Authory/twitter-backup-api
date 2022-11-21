import fetch from 'node-fetch'
import { TwitterBackupApiResponse } from './types/api'

// Twitter backup - API demo.
// 
// Usage: ts-node api.ts

async function fetchFromApi(userId: string) {

  const response = await fetch(`https://api-development.authory.com/twitter-import/profile/${userId}`)

  console.assert(response.status === 200)

  const result: TwitterBackupApiResponse = await response.json() as any

  for(const content of result.articles) {
    console.log(`${content.type}: ${content.description}`)
  }
}

fetchFromApi("02e915a83d437ad9")