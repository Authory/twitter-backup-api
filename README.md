# Twitter Backup Tool - API & JSON Export

This repository shows how to use the API of our [twitter backup tool](https://twitter-backup.authory.com).

# How to use

Your `userId` is the alphanumeric code you can find in the URL of your profile. For example the `userId` of
[this profile](https://twitter-backup.authory.com/a06bd89d39144f88) is `a06bd89d39144f88`

```typescript
const response = await fetch(`https://api-development.authory.com/twitter-import/profile/${userId}`)

const result: TwitterBackupApiResponse = await response.json() as any

for(const content of result.articles) {
  console.log(`${content.type}: ${content.description}`)
}
```

You can find the type definitions [here](/types).

Please check [api.ts](./api.ts) for an example on how to use the API.

Please check [exported-archive.ts](./exported-archive.ts) for an example on how to use the JSON export. You can find a download link for the JSON file in your onboarding email.

