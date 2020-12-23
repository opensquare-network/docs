---
id: fronted
title: Fronted
slug: architecture/fronted
---

## Code repositories

There are 2 repositories to serve the fronted part of whole OpenSquare business.

- [Dapps](https://github.com/opensquare-network/dapps) includes 2 parts: 
  - code of front pages written with react and redux
  - a content server which serve the bounty detail content 
- [os-scan](https://github.com/opensquare-network/os-scan) includes 3 parts:
  - scan scripts which track the blocks, extract the business and save the corresponding data to MongoDB.
  - server which serve the restful APIs for explorer and dapps front pages.
  - site which is the code for explorer pages written with react and redux.
  
  
## Logical architecture

Generally we can see the logical parts in following charts and how their works with each other.

- Substrate based OpenSquare chain which produce blocks.
- Scan scripts which scan blocks and save business data to MongoDB.
- Scan server which provide restful apis to Dapp and explorer.  
- Dapp which interact with the OpenSquare chain.
- Explorer which help view the blocks, extrinsics, events and other business data.

![Architecture](/figure/os-architecture.png)
 
 
## Content server apis

#### Post bounty detail to content server

```
POST https://content.opensquare.network/content
```

params: 
- description: the bounty detail
- hash: blake2 hash of the detail


#### Get bounty detail by hash 

```
GET https://content.opensquare.network/content/:hash
```

params: 
- hash: blake2 hash of the detail
