import fetch from 'node-fetch'
import { TwitterBackupApiResponse } from './types/api'

// Twitter backup - API demo.
//
// Media files exposed via the API will point to copies on authory.
// 
// Usage: ts-node api.ts

async function fetchFromApi(userId: string) {

  // You can paginate or search via query params.
  // Check TwitterBackupApiQueryParams in types/api.ts
  const response = await fetch(`https://api-development.authory.com/twitter-import/profile/${userId}`)

  console.assert(response.status === 200)

  const result: TwitterBackupApiResponse = await response.json() as any

  for(const content of result.articles) {
    console.log(`${content.type}: ${content.description}`)
  }
}

// Pass your user id.
fetchFromApi("02e915a83d437ad9")